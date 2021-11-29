import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  const [isDark, setDark] = useState(false);

  function handleClick() {
    setDark(isDark => !isDark);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDark ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
