import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-20 pt-3">
        <img src={logo} alt="sumz_logo" className="w-8 object-contain" />
        <h1 className="main_text">SummarizeAI</h1>
        <button
          type="button"
          onClick={() =>
            window.open("https://www.linkedin.com/in/therahman/", "_blank")
          }
          className="black_btn"
        >
          LinkedIn
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc pt-12">Tired of long articles? Meet SummizeAI !</h2>{" "}
      <h2 className="desc">
        It's like a magic wand for your reading. It takes those wordy articles
        and turns them into short, easy-to-read summaries. No more drowning in
        details! Just the important stuff, making reading a breeze for everyone.
      </h2>
    </header>
  );
};

export default Hero;
