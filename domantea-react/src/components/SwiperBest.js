import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const SwiperBest = () => {
  const listRef = useRef();
  const [teas, setTea] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(3);

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
    if (direction === "next") {
      setCurrentIndex((current) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : current - 1;
      });
    } else {
      const isLastSlide = currentIndex === teas.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((current) => current + 1);
      }
    } 
  };

  return (
    <div>
      <div className="title">
        <h1>MEILLEURES VENTES DU MOIS</h1>
      </div>
      <div className="caroussel-container">
        <span className="left" onClick={() => scrollToImage("prev")}>
          &#8678;
        </span>
        <ul className="caroussel" ref={listRef}>
          {teas.map((tea) => (
            <Card key={tea.id} tea={tea} />
          ))}
        </ul>
        <span className="right" onClick={() => scrollToImage("next")}>
          &#8680;
        </span>
      </div>
      {/* <div className="magazine-title">
        <h1>MAGAZINE</h1>
      </div>
      <div className="swiper-magazine"></div> */}
    </div>
  );
};

export default SwiperBest;
