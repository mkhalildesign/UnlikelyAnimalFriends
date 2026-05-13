import { useState } from "react";
import "./App.css";
import logo from './assets/uaf-logo-02.png';
import { animals, places } from './data.js';

export default function UnlikelyAnimalFriendsPage() {
  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const [prompt, setPrompt] = useState({
    animal1: "Bumble bee",
    animal2: "Duck",
    activity: "In a cave",
  });

  const generatePrompt = () => {
    const animal1 = randomItem(animals);
    let animal2 = randomItem(animals);

    while (animal2 === animal1) {
      animal2 = randomItem(animals);
    }

    setPrompt({
      animal1,
      animal2,
      activity: randomItem(places),
    });
  };

  return (
    <div className="page">
      <section className="hero">
        <div className="logo-section">
          <img src={logo} alt="Unlikely Animal Friends Logo" className="logo" style={{width: '33.33%', height: 'auto'}} />
        </div>
      </section>

      <section id="generator" className="generator">
        <h3>Generate your prompt</h3>

        <div className="cards">
          <PromptCard label="First animal" value={prompt.animal1} />
          <PromptCard label="Second animal" value={prompt.animal2} />
          <PromptCard label="Activity" value={prompt.activity} />
        </div>

        <button onClick={generatePrompt} className="generate-btn">
          Generate an unlikely prompt
        </button>
      </section>

      <section id="about" className="about">
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
          <a href="#about">About</a>
          <a href="#generator">Generate ideas</a>
          <a href="https://ko-fi.com/marwaberry">Ko-fi</a>
        </div>

        <p>Design by <a href="https://marwa.gorvan.com">Marwa</a></p>
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
