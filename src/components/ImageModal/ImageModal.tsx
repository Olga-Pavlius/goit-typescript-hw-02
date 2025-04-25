import { useEffect } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import css from "./ImageModal.module.css";
import { UnsplashPhoto } from "../FetchFoto/FetchFoto";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  photo: UnsplashPhoto | null;
};

export default function ImageModal({ isOpen, onClose, photo }: Props) {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  if (!isOpen || !photo) return null;

  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <img src={photo.urls.regular} alt={photo.description || "Unsplash Photo"} />
      <p className={css.text}>{photo.description}</p>
      <p className={css.text}>Likes: {photo.likes}</p>
      <p className={css.text}>Author: {photo.user.name}</p>
      <IoClose onClick={onClose} className={css.icon} />
    </Modal>
  );
}
