import React from "react";
import { createRoot } from "react-dom/client";
import Ballpit from "./Ballpit";

// Mount into a div that exists in index.html / profiles.html
const mountEl = document.getElementById("ballpit-bg");

if (mountEl) {
  createRoot(mountEl).render(
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: -1,
        pointerEvents: "none" // makes sure your buttons/links still work
      }}
    >
      <Ballpit
        count={200}
        gravity={0.7}
        friction={0.8}
        wallBounce={0.95}
        followCursor={true}
      />
    </div>
  );
}
