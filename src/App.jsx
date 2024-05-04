import "./App.css";

import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import QrCodeGenerator from "./components/qr-code";

function App() {
  return (
    <div className="App">
      <Accordion />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <StarRating noOfStars={10} />
      <RandomColor />
      <QrCodeGenerator />
    </div>
  );
}

export default App;
