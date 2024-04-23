import { useState } from "react";
import data from "./data";
import "./accordion-styles.css";
export default function Accordion() {
  const [selected, setSelected] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);

  function handleSingleSelection(id) {
    if (multiSelection) {
      setSelected((prevSelection) => {
        if (prevSelection.includes(id)) {
          return prevSelection.filter((i) => i !== id);
        } else {
          return [...prevSelection, id];
        }
      });
    } else {
      setSelected(selected[0] === id ? [null] : [id]);
    }
  }
  function handleMultiSelection() {
    if (multiSelection) setSelected([selected[selected.length - 1]]);
    setMultiSelection((prevSelection) => !prevSelection);
  }
  return (
    <div className="wrapper">
      <button onClick={handleMultiSelection}>
        {multiSelection ? "Disable" : "Enable"} MultiSelection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="accordion-item"
                onClick={() => handleSingleSelection(item.id)}
              >
                <div className="title">
                  <h3>{item.question}</h3>
                  <span>{selected.includes(item.id) ? "🔼" : "🔽"}</span>
                </div>
                {selected.map((i, index) => {
                  return i === item.id ? (
                    <p key={index}>{item.answer}</p>
                  ) : null;
                })}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
