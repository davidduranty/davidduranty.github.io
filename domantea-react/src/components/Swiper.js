import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const Swiper = () => {
  const listRef = useRef();
  const [teas, setTea] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getData = () => {
    axios.get("http://localhost:3004/thes").then((res) => setTea(res.data));
  };

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
    getData();
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 4;
      });
    } else {
      const isLastSlide = currentIndex === teas.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 2);
      }
    }
  };

  return (
    <div>
      <div className="stars-title">
        <h1>MEILLEURES VENTES DU MOIS</h1>
      </div>
      <div className="caroussel-container">
        <span className="left" onClick={() => scrollToImage("prev")}>
          &#8678;
        </span>
        <ul className="caroussel-vente" ref={listRef}>
          {teas.map((tea) => (
            <Card key={tea.id} tea={tea} />
          ))}
        </ul>
        <span className="right" onClick={() => scrollToImage("next")}>
          &#8680;
        </span>
      </div>
      <div className="selection-title">
        <h1>S&#201;LECTION DU MOMENT</h1>
      </div>
      <div className="swiper-selection"></div>
      <div className="magazine-title">
        <h1>MAGAZINE</h1>
      </div>
      <div className="swiper-magazine"></div>
    </div>
  );
};

export default Swiper;
