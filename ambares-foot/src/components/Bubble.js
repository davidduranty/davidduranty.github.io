// import React from "react";

// const Bubble = () => {
//   const bubbleMaker = () => {
    
//     const bubble = document.createElement("span");
//     const size = Math.random() * 200 + 100 + "px";
//     const plusMinus = Math.random() > 0.5 ? 1 : -1;

//     bubble.classList.add("bubble");

//     document.body.appendChild(bubble);

//     bubble.textContent = "ES Ambarès";
//     bubble.style.height = size;
//     bubble.style.width = size;

//     bubble.style.top = Math.random() * 100 + 50 + "%";
//     bubble.style.left = Math.random() * 100 + "%";
//     bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

//     setTimeout(() => {
//       bubble.remove();
//     }, 8000);
//   };

//   setInterval(bubbleMaker, 300);
//   return (
//     <div>
//       {/* <span className="bubble"></span> */}
//     </div>
//   );
// };

// export default Bubble;
