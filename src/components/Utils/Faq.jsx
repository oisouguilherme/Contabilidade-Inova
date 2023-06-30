"use client";
import { useState } from "react";

export function Faq() {
  const [showDiv, setShowDiv] = useState(false);

  function toggleDiv() {
    setShowDiv(!showDiv);
  }
  return (
    <div className="border-b-2">
      <button
        className="w-full px-4 text-sm sm:text-base sm:px-6 py-4 bg-azul text-white font-medium text-start flex gap-4 items-center"
        onClick={toggleDiv}
      >
        <svg
          className="hidden sm:block"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
        nihil nulla?
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
