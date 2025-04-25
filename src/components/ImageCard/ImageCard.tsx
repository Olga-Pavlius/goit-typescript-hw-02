import { UnsplashPhoto } from "../FetchFoto/FetchFoto";  

type Props = {
  image: UnsplashPhoto; 
};

export default function ImageCard({
  image: {
    alt_description,
    urls: { small },
  },
}: Props) {
  return (
    <>
      <img src={small} alt={alt_description} />
    </>
  );
}
