import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex-col w-full flex-center">
      <div className="container">
        <h1 className="text-center head_text ">
          Summarize Articles With
          <br className="" />
          <span className="text-center orange_gradient">Superpowers</span>
        </h1>
        <p className="text-center desc"> Simplify your reading with Summy, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.</p>
      </div>
    </section>
  );
};

export default Hero;
