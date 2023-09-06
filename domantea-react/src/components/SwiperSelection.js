import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import CardMoment from "./CardMoment";

const SwiperSelection = () => {
  const listRefs = useRef();
  const [getMoment, setGetMoment] = useState([]);
  const [getCurrentIndex, setGetCurrentIndex] = useState(3);

  const getDataSelect = () => {
    axios
      .get("http://localhost:3004/moment")
      .then((el) => setGetMoment(el.data));
  };

  useEffect(() => {
    const listNodes = listRefs.current;
    const imgNodes = listNodes.querySelectorAll("li > img")[getCurrentIndex];

    if (imgNodes) {
      imgNodes.scrollIntoView({
        behavior: "smooth",
      });
    }
    getDataSelect();
  }, [getCurrentIndex]);

  const scrollToImages = (directions) => {
    if (directions === "prev") {
      setGetCurrentIndex((currents) => {
        const isFirstSlide = getCurrentIndex === 0;
        return isFirstSlide ? 0 : currents - 1;
      });
    } else {
      const isLastSlides = getCurrentIndex === getMoment.length - 1;
      if (!isLastSlides) {
        setGetCurrentIndex((currents) => currents + 1);
      }
    }
  };

  return (
    <div>
      <div className="title">
        <h1>S&#201;LECTION DU MOMENT</h1>
      </div>
      <div className="caroussel-container">
        <span className="left" onClick={() => scrollToImages("prev")}>
          &#8678;
        </span>
        <ul className="caroussel" ref={listRefs}>
          {getMoment.map((moment) => (
            <CardMoment key={moment.id} moment={moment} />
          ))}
        </ul>
        <span className="right" onClick={() => scrollToImages("next")}>
          &#8680;
        </span>
      </div>
    </div>
  );
};

export default SwiperSelection;
