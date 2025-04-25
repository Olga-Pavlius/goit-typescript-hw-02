import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { UnsplashPhoto } from "../FetchFoto/FetchFoto";  // Імпортуємо UnsplashPhoto для типізації

type Props = {
  images: UnsplashPhoto[]; // Типізуємо масив зображень
  onClick: (image: UnsplashPhoto) => void; // Типізуємо onClick
};

export default function ImageGallery({ images, onClick }: Props) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}
