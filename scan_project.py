#!/usr/bin/env python3
"""
scan_project.py
Escaneja documents textuals d'un projecte i genera un resum de línies de codi.
Ignora fitxers/carpetes ocults i els que coincideixen amb patrons de .gitignore.

Ús:
    python scan_project.py            # escaneja el directori actual
    python scan_project.py /ruta/dir  # escaneja el directori indicat
"""

import os
import sys
import fnmatch


# Extensions de fitxers de text a escanejar
TEXT_EXTENSIONS = {
    '.js', '.jsx', '.ts', '.tsx',
    '.html', '.htm',
    '.css', '.scss', '.sass', '.less',
    '.json', '.jsonc',
    '.xml', '.svg',
    '.md', '.txt', '.rst',
    '.py', '.rb', '.php',
    '.java', '.c', '.cpp', '.h', '.hpp', '.cs',
    '.go', '.rs', '.swift', '.kt',
    '.yaml', '.yml', '.toml', '.ini',
    '.sh', '.bash', '.zsh', '.fish',
    '.vue', '.svelte',
    '.graphql', '.gql',
    '.sql', '.env',
}


def parse_gitignore(root_dir):
    """Llegeix .gitignore i retorna una llista de patrons."""
    gitignore_path = os.path.join(root_dir, '.gitignore')
    patterns = []
    if not os.path.exists(gitignore_path):
        return patterns

    with open(gitignore_path, 'r', encoding='utf-8', errors='ignore') as f:
        for line in f:
            line = line.strip()
            # Ignorar línies buides, comentaris i negacions
            if line and not line.startswith('#') and not line.startswith('!'):
                patterns.append(line)

    return patterns


def matches_gitignore(name, rel_path, patterns):
    """Comprova si un nom o ruta relativa coincideix amb algun patró de .gitignore."""
    rel_unix = rel_path.replace('\\', '/')
    parts = rel_unix.split('/')

    for pattern in patterns:
        clean = pattern.rstrip('/')  # Treure '/' final (indica directori)

        # Coincidència directa amb el nom del fitxer/carpeta
        if fnmatch.fnmatch(name, clean):
            return True

        # Coincidència amb la ruta relativa completa
        if fnmatch.fnmatch(rel_unix, clean):
            return True

        # Coincidència amb qualsevol segment del camí
        for part in parts:
            if fnmatch.fnmatch(part, clean):
                return True

        # Patró amb wildcard en ruta parcial (p.ex. node_modules/**)
        for i in range(len(parts)):
            partial = '/'.join(parts[:i + 1])
            if fnmatch.fnmatch(partial, clean):
                return True

    return False


def count_lines(filepath):
    """Compta el nombre de línies d'un fitxer de text."""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            return sum(1 for _ in f)
    except (IOError, OSError, PermissionError):
        return 0


def scan_directory(root_dir, output_filename):
    """
    Escaneja el directori recursivament.
    Retorna:
        files_data    -- llista de tuples (ruta_relativa, num_linies)
        ignored_items -- llista de noms d'elements ignorats a l'arrel
    """
    root_abs = os.path.abspath(root_dir)
    gitignore_patterns = parse_gitignore(root_abs)

    files_data = []     # (ruta_relativa, num_linies)
    ignored_items = []  # elements ignorats a l'arrel del projecte

    # Identificar elements ignorats a l'arrel (per mostrar-los a l'informe)
    try:
        root_entries = sorted(os.listdir(root_abs))
    except PermissionError:
        root_entries = []

    for item in root_entries:
        if item == output_filename:
            continue
        item_path = os.path.join(root_abs, item)
        rel = os.path.relpath(item_path, root_abs)

        if item.startswith('.') or matches_gitignore(item, rel, gitignore_patterns):
            ignored_items.append(item)

    # Recórrer el directori ignorant ocults i patrons de .gitignore
    for dirpath, dirnames, filenames in os.walk(root_abs, topdown=True):

        # Filtrar subdirectoris a visitar (modifica dirnames in-place)
        dirs_keep = []
        for d in sorted(dirnames):
            dir_full = os.path.join(dirpath, d)
            rel = os.path.relpath(dir_full, root_abs)
            if d.startswith('.') or matches_gitignore(d, rel, gitignore_patterns):
                continue
            dirs_keep.append(d)
        dirnames[:] = dirs_keep

        for filename in sorted(filenames):
            # Saltar l'arxiu de sortida
            if dirpath == root_abs and filename == output_filename:
                continue

            filepath = os.path.join(dirpath, filename)
            rel = os.path.relpath(filepath, root_abs)

            # Ignorar fitxers ocults
            if filename.startswith('.'):
                continue

            # Ignorar fitxers que coincideixen amb .gitignore
            if matches_gitignore(filename, rel, gitignore_patterns):
                continue

            # Processar només extensions de text
            ext = os.path.splitext(filename)[1].lower()
            if ext in TEXT_EXTENSIONS:
                line_count = count_lines(filepath)
                rel_unix = rel.replace('\\', '/')
                files_data.append((rel_unix, line_count))

    return files_data, ignored_items


def write_report(root_dir, files_data, ignored_items, output_path):
    """Escriu l'informe de línies de codi a un fitxer de text."""
    folder_name = os.path.basename(root_dir)
    total_lines = sum(count for _, count in files_data)
    sep = "=" * 50

    out = []
    out.append(f"RESUM DEL PROJECTE [{folder_name}]")
    out.append(sep)

    if files_data:
        for filepath, line_count in files_data:
            out.append(f"{filepath} - {line_count} línies")
    else:
        out.append("(cap fitxer de text trobat)")

    out.append("")
    out.append(sep)
    out.append("FITXERS I CARPETES IGNORATS")
    out.append(sep)

    if ignored_items:
        for item in ignored_items:
            out.append(f"{item} (ignorat)")
    else:
        out.append("(cap element ignorat)")

    out.append("")
    out.append(sep)
    out.append(f"TOTAL: {total_lines} línies en {len(files_data)} fitxers")
    out.append("")

    content = '\n'.join(out)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Resum escrit a: {output_path}")
    print(f"Total: {total_lines} línies en {len(files_data)} fitxers")


def main():
    if len(sys.argv) > 1:
        root_dir = os.path.abspath(sys.argv[1])
    else:
        root_dir = os.getcwd()

    if not os.path.isdir(root_dir):
        print(f"Error: '{root_dir}' no és un directori vàlid.")
        sys.exit(1)

    folder_name = os.path.basename(root_dir)
    output_filename = f"resum_{folder_name}.txt"
    output_path = os.path.join(root_dir, output_filename)

    print(f"Escanejant: {root_dir}")
    files_data, ignored_items = scan_directory(root_dir, output_filename)
    write_report(root_dir, files_data, ignored_items, output_path)


if __name__ == '__main__':
    main()
