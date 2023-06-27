"use client";

import { useState } from "react";

export default function Button() {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      onMouseOver={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="flex gap-3 item-center group cursor-pointer"
    >
      <h2 className="group-hover:text-room-gray uppercase tracking-[0.6em] transition-all">Shop now</h2>
      <div className="translate-y-[5px]">
      <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
          fill={onHover ? "rgba(150, 150, 150, 1)" : "#000"}
          fill-rule="nonzero"
        />
      </svg>
      </div>
    </div>
  );
}
