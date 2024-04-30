import "./App.css";

import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import GroceryBud from "./components/grocery-bud/GroceryBud";
import DataLoader from "./components/load-more/DataLoader";
import TreeViewMenu from "./components/tree-view-menu/index";
import menus from "./menu-dataList";

function App() {
  return (
    <div className="App">
      <Accordion />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <RandomColor />
      <GroceryBud />
      <StarRating noOfStars={10} />
      <DataLoader url={"https://dummyjson.com/products"} limit={"6"} />
      <div className="tree-view-container">
        <TreeViewMenu menus={menus} />
      </div>
    </div>
  );
}

export default App;
