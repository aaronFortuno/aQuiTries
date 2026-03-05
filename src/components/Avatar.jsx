import { useState } from 'react';
import GeneratedAvatar from './GeneratedAvatar';

export default function Avatar({ character }) {
  const [useImage, setUseImage] = useState(true);
  const basePath = import.meta.env.BASE_URL;
  const imgPath = `${basePath}avatars/${character.id}.png`;

  if (useImage) {
    return (
      <img
        className="avatar__img"
        src={imgPath}
        onError={() => setUseImage(false)}
        alt={character.name}
        loading="lazy"
      />
    );
  }

  return <GeneratedAvatar sex={character.sex} build={character.build} age={character.age} />;
}
