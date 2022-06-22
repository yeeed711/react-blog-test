import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div class="banner">
      <img
        src={`${process.env.PUBLIC_URL}/assets/post-background6.jpg`}
        alt=""
      />
      <div class="max-width">
        <div class="banner-contents">
          <p class="today">
            May <em>25</em> Wednesday
          </p>
        </div>
      </div>
    </div>
  );
}
