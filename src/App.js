import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var emojiDictionary = {
    "🍕": "Pizza",
    "🍔": "Burger",
    "🍟": "French Fries",
    "🌭": "Hot Dog",
    "🍿": "Pop-Corn",
    "🥨": "Pretzel",
    "🍞": "Bread",
    "🥐": "Croissant",
    "🥯": "Donut",
    "🥪": "Sandwich"
  };
  var foodInDatabase = Object.keys(emojiDictionary);

  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry The Food's Not In The Menu";
    }
    setMeaning(meaning);
  }
  function onChangeHandler(food) {
    var meaning = emojiDictionary[food];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>What's That Snack</h1>

      <input class="inp" onChange={inputChangeHandler}></input>
      <h3 style={{ padding: "2rem" }}>Menu</h3>
      {foodInDatabase.map(function (food) {
        return (
          <span
            class="food"
            onClick={() => onChangeHandler(food)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {food}
          </span>
        );
      })}
      <div style={{ padding: "2rem", fontSize: "2rem", fontWeight: "bolder" }}>
        {meaning}
      </div>
    </div>
  );
}
