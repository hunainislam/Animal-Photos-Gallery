"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <div>
      <RevealWrapper
        origin="left"
        reset={true}
        distance="80px"
        duration={2000}
        delay={200}
      >
        {/* <!-- carousel --> */}
        <div className="carousel">
          {/* <!-- list item --> */}
          <div className="list">
            <div className="item">
              <Image
                src="/image/img1.jpg"
                alt="no image"
                width={1200}
                height={1200}
              />
              <div className="content">
                <div className="author">
                  Malik <span className="text-[#f1683a]">Hunain</span>
                </div>
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">ANIMAL</div>
                <div className="des">
                  Moose, known for their large size and unique antlers, are one
                  of the most iconic animals in northern forests and cold
                  climates. Found in regions like Canada, Alaska, and parts of
                  Europe, these herbivores are skilled swimmers and can dive to
                  eat aquatic plants. Their impressive antlers, grown by males,
                  can span up to six feet, helping them attract mates and
                  establish dominance. Moose are solitary animals, often spotted
                  wandering through forests or near water sources, adapting well
                  to the cold with thick fur and strong, long legs for
                  navigating snowy terrain.
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </div>
  );
}
