"use client";
import { useState } from "react";

export function Faq() {
  const [showDiv, setShowDiv] = useState(false);

  function toggleDiv() {
    setShowDiv(!showDiv);
  }
  return (
    <div>
      <button
        className="w-full px-4 text-sm sm:text-base sm:px-8 py-4 bg-azul text-white font-medium text-start"
        onClick={toggleDiv}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
        nihil nulla
      </button>
      {showDiv && (
        <div className="px-8 pb-4 bg-azul text-white text-sm">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            nulla suscipit distinctio veniam autem dolorum accusamus laborum
            repellat quisquam, reprehenderit molestias. Dicta voluptas enim
            aliquid nam corrupti ullam alias debitis.
          </p>
        </div>
      )}
    </div>
  );
}
