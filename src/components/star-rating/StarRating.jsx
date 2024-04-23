import { useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import "./starRating-styles.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currStar) {
    setRating(currStar);
  }
  function handleOnMove(currStar) {
    setHover(currStar);
  }
  function handleOnLeave() {
    setHover(rating);
  }
  return (
    <div className="star-wrapper">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleOnMove(index)}
            onMouseLeave={() => handleOnLeave(index)}
            size={40} // the star icon size
          />
        );
      })}
    </div>
  );
}

StarRating.propTypes = {
  noOfStars: PropTypes.number,
};
