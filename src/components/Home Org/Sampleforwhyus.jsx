// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const cards = [
//   { id: 1, color: "bg-blue-500" },
//   { id: 2, color: "bg-green-500" },
//   { id: 3, color: "bg-yellow-500" },
//   { id: 4, color: "bg-red-500" },
//   { id: 5, color: "bg-purple-500" },
//   { id: 6, color: "bg-orange-500" },
//   { id: 7, color: "bg-pink-500" },
// ];

// const Sampleforwhyus = () => {
//   const [selectedCard, setSelectedCard] = useState(4);

//   const handleCardClick = (cardId) => {
//     setSelectedCard(cardId);
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       {cards.map((card) => (
//         <motion.div
//           key={card.id}
//           className={`mx-4 h-64 w-64 rounded-lg ${card.color} ${
//             selectedCard !== card.id ? "" : "scale-110"
//           }`}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => handleCardClick(card.id)}
//           transition={{ duration: 0.3 }}
//           animate={{
//             scale: selectedCard === card.id ? 1.2 : 1,
//             zIndex: selectedCard === card.id ? 2 : 1,
//             x: selectedCard === card.id ? 0 : (selectedCard - card.id) * 50,
//           }}
//         >
//           <p
//             className={`text-center font-bold text-white ${
//               selectedCard === card.id ? "text-2xl" : "text-lg"
//             }`}
//           >
//             {card.id}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Sampleforwhyus; // i wanted the cliked cards to be  centerd
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content, number }) => (
  <div
    className="h-full w-full rounded-2xl p-8 text-justify transition-opacity"
    style={{
      backgroundColor: `hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%))`,
    }}
  >
    <div className="mb-3 text-center text-2xl font-bold text-black opacity-75 transition-opacity">
      {number}
    </div>
    <h2 className="mb-3 text-center text-2xl font-bold text-black opacity-75 transition-opacity">
      {title}
    </h2>
    <p className="transition-opacity" style={{ opacity: "var(--active)" }}>
      {content}
    </p>
  </div>
);

const Sampleforwhyus = () => {
  const [active, setActive] = useState(2);
  const count = CARDS;

  return (
    <div className="perspective-500 transform-style-preserve-3d relative h-96 w-96">
      {active > 0 && (
        <button
          className="z-2 absolute left-0 top-1/2 h-10 w-10 -translate-y-1/2 transform cursor-pointer select-none fill-current text-black"
          onClick={() => setActive((i) => i - 1)}
        >
          <IoIosArrowBack />
        </button>
      )}
      {[...new Array(CARDS)].map((_, i) => (
        <div
          key={i}
          className="absolute h-full w-full rotate-0 transform blur-none transition-all"
          style={{
            transform: `rotateY(calc(var(--offset) * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4)) translateZ(calc(var(--abs-offset) * -30rem)) translateX(calc(var(--direction) * -5rem))`,
            filter: `blur(calc(var(--abs-offset) * 1rem))`,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          <Card
            title={"Card " + (i + 1)}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="z-2 absolute right-0 top-1/2 h-10 w-10 -translate-y-1/2 transform cursor-pointer select-none fill-current text-black"
          onClick={() => setActive((i) => i + 1)}
        >
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};

export default Sampleforwhyus;


// import React, { useState } from "react";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";

// const CARDS = 10;
// const MAX_VISIBILITY = 3;

// const Card = ({ title, content }) => (
//   <div className="card">
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </div>
// );

// const Sampleforwhyus = () => {
//   const [active, setActive] = useState(2);
//   const count = CARDS;

//   return (
//     <div
//       className="perspective-500 transform-style-preserve-3d
//   relative h-96 w-52"
//     >
//       {active > 0 && (
//         <button
//           className="z-2 absolute top-1/2 flex cursor-pointer select-none items-center justify-center text-5xl text-white"
//           onClick={() => setActive((i) => i - 1)}
//         >
//           <IoIosArrowBack />
//         </button>
//       )}
//       {[...new Array(CARDS)].map((_, i) => (
//         <div
//           key={i}
//           className=" perspective-500 transform-style-preserve-3d
//   relative h-96 w-52"
//           style={{
//             "--active": i === active ? 1 : 0,
//             "--offset": (active - i) / 3,
//             "--direction": Math.sign(active - i),
//             "--abs-offset": Math.abs(active - i) / 3,
//             pointerEvents: active === i ? "auto" : "none",
//             opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
//             display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
//           }}
//         >
//           <Card
//             title={"Card " + (i + 1)}
//             content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//           />
//         </div>
//       ))}
//       {active < count - 1 && (
//         <button className="nav right" onClick={() => setActive((i) => i + 1)}>
//           <IoIosArrowForward />
//         </button>
//       )}
//     </div>
//   );
// };

// export default Sampleforwhyus;
