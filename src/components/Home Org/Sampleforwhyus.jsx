import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, color: "bg-blue-500" },
  { id: 2, color: "bg-green-500" },
  { id: 3, color: "bg-yellow-500" },
  { id: 4, color: "bg-red-500" },
  { id: 5, color: "bg-purple-500" },
  { id: 6, color: "bg-orange-500" },
  { id: 7, color: "bg-pink-500" },
];

const Sampleforwhyus = () => {
  const [selectedCard, setSelectedCard] = useState(4);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={`mx-4 h-64 w-64 rounded-lg ${card.color} ${
            selectedCard !== card.id ? "" : "scale-110"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCardClick(card.id)}
          transition={{ duration: 0.3 }}
          animate={{
            scale: selectedCard === card.id ? 1.2 : 1,
            zIndex: selectedCard === card.id ? 2 : 1,
            x: selectedCard === card.id ? 0 : (selectedCard - card.id) * 50,
          }}
        >
          <p
            className={`text-center font-bold text-white ${
              selectedCard === card.id ? "text-2xl" : "text-lg"
            }`}
          >
            {card.id}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Sampleforwhyus; // i wanted the cliked cards to be  centerd
