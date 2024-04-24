"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";

// const heroImages = [
//   { imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
//   { imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
//   { imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
//   { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
//   { imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
// ];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel " style={{ paddingRight: "20%" }}>
      <div style={{ width: "480px" }}>
        <iframe
          src="https://giphy.com/embed/l46Cy1rHbQ92uuLXa"
          width="680"
          height="460"
        ></iframe>
      </div>
    </div>
  );
};

export default HeroCarousel;
