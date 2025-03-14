import React, { useState } from "react";
import "../styles/LyricSection.css";
import axios from "axios";

const API_URL = "https://lyric-match-backend-29un.onrender.com"; 

const LyricSection = () => {
  const [lyric, setLyric] = useState("");
  const [song, setSong] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [error, setError] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false); 

  // Fetch a random lyric
  const fetchLyric = async () => {
    setIsCorrect(null);
    setError(null);
    setShowAnswer(false); 
    try {
      const response = await axios.get(`${API_URL}/generate-lyric`);
      setLyric(response.data.lyric);
      setSong(response.data.song);
    } catch (err) {
      console.error("Error fetching lyric:", err.response || err.message);
      setError("Error fetching lyrics. Try again later.");
    }
  };

  // Check user's guess
  const checkAnswer = async () => {
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/check-answer`, {
        userGuess,
        song,
      });
      setIsCorrect(response.data.correct);
    } catch (err) {
      console.error("Error checking answer:", err);
      setError("Error checking answer. Try again later.");
    }
  };

  return (
    <section className="lyric-section">
      <div className="lyric-left">
        <button className="submit-btn" onClick={fetchLyric}>
          🎤 Get a Random Lyric
        </button>

        {lyric && <div className="lyric-display">{lyric}</div>}

        {lyric && (
          <>
            <input
              className="guess-input"
              type="text"
              placeholder="Guess the song..."
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
            />
            <div>
            <button className="submit-btn" onClick={checkAnswer}>
              Check Answer
            </button>

            <button 
              className="show-answer-btn" 
              onClick={() => setShowAnswer(true)}
            >
              Show Answer
            </button>
            </div>

            {showAnswer && <p className="correct-answer"> Answer: {song}</p>}

            {isCorrect !== null && (
              <p className={`answer-feedback ${isCorrect ? "correct" : "wrong"}`}>
                {isCorrect ? "✅ Correct!" : "❌ Wrong, try again!"}
              </p>
            )}
          </>
        )}

        {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
};

export default LyricSection;
