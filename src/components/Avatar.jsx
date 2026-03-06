import { useState } from 'react';
import GeneratedAvatar from './GeneratedAvatar';

export default function Avatar({ character }) {
  const [imgFormat, setImgFormat] = useState('png');
  const basePath = import.meta.env.BASE_URL;
  const imgPath = `${basePath}avatars/${character.id}.${imgFormat}`;

  if (imgFormat) {
    return (
      <img
        className="avatar__img"
        src={imgPath}
        onError={() => {
          if (imgFormat === 'png') {
            setImgFormat('webp');
          } else {
            setImgFormat(null);
          }
        }}
        alt={character.name}
        loading="lazy"
      />
    );
  }

  return (
    <GeneratedAvatar
      id={character.id}
      build={character.build}
      age={character.age}
      height={character.height}
      hair={character.hair}
    />
  );
}
