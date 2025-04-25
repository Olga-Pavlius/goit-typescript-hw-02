import React, { Suspense, useEffect, useState } from "react";

import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErroeMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import Searchbar from "../SearchBar/SearchBar";
import { fetchFotoWithTopic, UnsplashPhoto } from "../FetchFoto/FetchFoto";
import toast from "react-hot-toast/headless";

const LazyImageModal = React.lazy(() => import("../ImageModal/ImageModal"));

const App: React.FC = () => {
  const [fotos, setFoto] = useState<UnsplashPhoto[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectFoto, setSelectFoto] = useState<UnsplashPhoto | null>(null);

  const openModal = (photo: UnsplashPhoto) => {
    setSelectFoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectFoto(null);
  };

  useEffect(() => {
    if (!query) return;

    const fetchFoto = async () => {
      try {
        setError(false);
        setLoading(true);

        const data = await fetchFotoWithTopic(query, page);
        setFoto((prev) => [...prev, ...data.results]);
      } catch {
        setError(true);
        toast.error("This didn't work.");
      } finally {
        setLoading(false);
      }
    };

    fetchFoto();
  }, [query, page]);

  const handleSearch = (topic: string) => {
    setPage(1);
    setQuery(topic);
    setFoto([]);
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={fotos} onClick={openModal} />
      )}
      {loading && <Loader loading={loading} />}
      {fotos.length !== 0 && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}

      <Suspense fallback={null}>
        <LazyImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          photo={selectFoto}
        />
      </Suspense>
    </>
  );
};

export default App;
