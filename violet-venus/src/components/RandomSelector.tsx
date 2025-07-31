import React, { useState } from "react";
import quotes from "../quotes.ts";

function randomQuoteSelector() {
  const [selected, setSelected] = useState("Default quote");

  const selectRandom = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSelected(randomQuote);
  };

  return (
    <div>
      <button onClick={selectRandom}>New Quote</button>
      {selected && <p>{selected}</p>}
    </div>
  );
}

export default randomQuoteSelector;
