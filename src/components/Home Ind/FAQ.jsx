import React, { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="border-b">
      <motion.div
        initial={false}
        animate={{ borderBottom: isOpen ? "1px solid #e0e0e0" : "none" }}
        onClick={toggleAccordion}
        className="border-l-2 border-transparent"
      >
        <header className="flex cursor-pointer select-none items-center justify-between p-5 pl-8 pr-8">
          <span className="text-grey-darkest text-xl font-thin">{title}</span>
          <div className="border-grey flex h-7 w-7 items-center justify-center rounded-full border">
            <svg
              aria-hidden="true"
              className=""
              fill="none"
              height={24}
              stroke="#606F7B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </header>
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-grey-darkest pb-5 pl-8 pr-8">{children}</div>
        </motion.div>
      )}
    </article>
  );
};

const FAQ = () => {
  return (
    <main className="mx-auto w-3/5 p-8">
      <h1 className="mb-4">tailwind collapsible</h1>
      <section className="shadow">
        <AccordionItem title="Massa vitae tortor condimentum lacinia quis vel eros donec">
          <ul className="pl-4">
            <li className="pb-2">consectetur adipiscing elit</li>
            <li className="pb-2">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="pb-2">
              Viverra orci sagittis eu volutpat odio facilisis mauris
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Lorem ipsum dolor sit amet">
          <ul className="pl-4">
            <li className="pb-2">consectetur adipiscing elit</li>
            <li className="pb-2">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="pb-2">
              Viverra orci sagittis eu volutpat odio facilisis mauris
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Lorem dolor sed viverra ipsum">
          <ul className="pl-4">
            <li className="pb-2">consectetur adipiscing elit</li>
            <li className="pb-2">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="pb-2">
              Viverra orci sagittis eu volutpat odio facilisis mauris
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Egestas sed tempus urna">
          <ul className="pl-4">
            <li className="pb-2">consectetur adipiscing elit</li>
            <li className="pb-2">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="pb-2">
              Viverra orci sagittis eu volutpat odio facilisis mauris
            </li>
          </ul>
        </AccordionItem>
      </section>
    </main>
  );
};

export default FAQ;
