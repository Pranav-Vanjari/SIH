import React, { useState } from "react";
import WordCloud from "./wordcloud";
import WordPage from "./wordSummary";
import "./wordSummary.css";

function FinalWordCloud() {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordClick = (word) => setSelectedWord(word);
  const closeModal = () => setSelectedWord(null);

  return (
    <div className="wordcloud-container">
      <WordCloud onWordClick={handleWordClick} />
      {selectedWord && <WordPage word={selectedWord} onClose={closeModal} />}
    </div>
  );
}

export default FinalWordCloud;
