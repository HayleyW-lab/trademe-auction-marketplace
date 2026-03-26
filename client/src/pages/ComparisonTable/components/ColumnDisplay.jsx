import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./ColumnDisplay.module.css";
import addProductBtn from "../../../assets/add-product-icon.png";

function ColumnDisplay({ data }) {
  const navigate = useNavigate();
  const [comparisonSlots, setComparisonSlots] = useState([
    null,
    null,
    null,
    null,
  ]);

  function handleGoToSearch(slotIndex) {
    navigate("/searchresults", {
      state: { slotIndex: slotIndex },
    });
  }

  function handleRemoveItem(slotIndex) {
    const updatedSlots = [...comparisonSlots];

    setComparisonSlots(updatedSlots);
  }

  return (
    <div>
      <div className={styles.headerTitles}>
        <p className={styles.comparisonTablePaths}>
          Home / Marketplace / Comparison Table / Wooden Desks
        </p>
        <h1 className={styles.comparisonTableHeader1}>
          COMPARISON TABLE: <span className={styles.desks}>WOOODEN DESKS</span>
        </h1>
      </div>
      <div className={styles.comparisonContainer}>
        {comparisonSlots.map((slot, index) => (
          <div key={index} className={styles.comparisonCard}>
            {slot === null ? (
              <button
                className={styles.addProductBtn}
                onClick={() => handleGoToSearch(index)}
              >
                {" "}
                {<img src={addProductBtn} alt="add product" />} <br />
                Add Product
              </button>
            ) : (
              <div className={styles.removeBtnContainer}>
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemoveItem(index)}
                >
                  {" "}
                  X{" "}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColumnDisplay;
