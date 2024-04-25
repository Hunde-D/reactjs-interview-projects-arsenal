import { useState } from "react";
import "./groceryBud-styles.css";

export default function GroceryBud() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [grocery, setGrocery] = useState("");

  function handleChange(e) {
    setGrocery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (grocery) {
      setGroceryItems((prevGroceryItems) => [...prevGroceryItems, grocery]);
      setGrocery("");
    }
  }
  function deleteItem(index) {
    const newGroceryItems = groceryItems.filter((item, i) => i !== index);
    setGroceryItems(newGroceryItems);
  }

  return (
    <div className="grocery-wrapper">
      <h1>Grocery Bud</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="grocery"
          value={grocery}
          onChange={handleChange}
        />
        <button>Add Item</button>
      </form>
      <div>
        {groceryItems.length > 0
          ? groceryItems.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={index}
                    name={item}
                    value={item}
                    onChange={handleChange}
                  />
                  <label htmlFor={index}>{item}</label>
                  <button onClick={() => deleteItem(index)}>Delete</button>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
