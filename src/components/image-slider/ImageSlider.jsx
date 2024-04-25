import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./imageSlider-styles.css";

export default function ImageSlider({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  async function fetchImage() {
    try {
      setLoading(true);
      let urlData = `${url}?page=${page}&limit=${limit}`;
      const response = await fetch(urlData);
      const data = await response.json();
      if (response.ok) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      console.log("this is the error", err);
      setLoading(false);
    }
  }

  function handlePrev() {
    setCurrentSlide((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  }
  function handleNext() {
    setCurrentSlide((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  }
  useEffect(() => {
    fetchImage();
  }, [url]);

  if (loading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <div className="image-slider">
      {/* <h1>Image Slider</h1> */}
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((img, index) => {
            return (
              <img
                key={img.id}
                src={img.download_url}
                alt={img.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

ImageSlider.propTypes = {
  url: PropTypes.string,
  page: PropTypes.string,
  limit: PropTypes.string,
};
