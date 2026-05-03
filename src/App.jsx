import { useState } from "react";
import "./App.css";

export default function UnlikelyAnimalFriendsPage() {
  const animals = [
    "Bumble bee",
    "Duck",
    "Shark",
    "Butterfly",
    "Fox",
    "Whale",
    "Otter",
    "Frog",
    "Cat",
    "Raccoon",
    "Penguin",
    "Snail",
  ];

  const places = [
    "In a cave",
    "At the beach",
    "In a bakery",
    "In space",
    "At a tea party",
    "On a mountain",
    "Inside a lighthouse",
    "In a flower field",
    "At the library",
    "In the rain",
  ];

  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const [prompt, setPrompt] = useState({
    animal1: "Bumble bee",
    animal2: "Duck",
    place: "In a cave",
  });

  const generatePrompt = () => {
    setPrompt({
      animal1: randomItem(animals),
      animal2: randomItem(animals),
      place: randomItem(places),
    });
  };

  return (
    <div className="page">
      <section className="hero">
        <div className="logo-section">
          <div className="logo-icons">
            <div className="icon shark">🦈</div>
            <div className="icon duck">🐤</div>
            <div className="heart">🩷</div>
          </div>

          <h1 className="title">
            Unlikely
            <br />
            Animal
            <br />
            Friends
          </h1>
        </div>

        <div className="generator">
          <h2>Generate your prompt</h2>

          <div className="cards">
            <PromptCard label="Animal" value={prompt.animal1} />
            <PromptCard label="Animal" value={prompt.animal2} />
            <PromptCard label="Place" value={prompt.place} />
          </div>

          <button onClick={generatePrompt} className="generate-btn">
            Generate an unlikely prompt
          </button>
        </div>
      </section>

      <section className="about">
        <div className="about-inner">
          <h3>About</h3>

          <p>
            Unlikely Animal Friends is an idea generator for artists,
            storytellers, and curious minds. A place where strange,
            adorable, and whimsical friendships come to life in the most
            unlikely situations.
          </p>

          <p>
            Create cosy little worlds filled with imagination, curiosity, and
            unexpected connections. Would a shark drink tea with a duck?
            Could a butterfly go fishing with a dog?
          </p>

          <p>
            Whether you're looking for inspiration, creating new characters,
            or simply want something that makes you smile, Unlikely Animal
            Friends is a space built around creativity, whimsy, and wonder.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Terms of service</a>
          <a href="#">Privacy policy</a>
          <a href="#">About</a>
          <a href="#">Generate ideas</a>
          <a href="#">Ko-fi</a>
        </div>

        <p>Design by Marwa</p>
      </footer>
    </div>
  );
}

function PromptCard({ label, value }) {
  return (
    <div className="prompt-card">
      <p className="label">{label}</p>
      <p className="value">{value}</p>
    </div>
  );
}
