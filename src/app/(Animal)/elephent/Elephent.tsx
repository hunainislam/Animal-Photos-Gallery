"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ElephentComponent() {
  const router = useRouter();

  const mooseNavigation = () => {
    router.push("/moose");
  };
  const deerNavigation = () => {
    router.push("/deer");
  };
  const elephentNavigation = () => {
    router.push("/elephent");
  };
  const leapordNavigation = () => {
    router.push("/leapord");
  };

  return (
    <div className="carousel">
      <div className="list">
        <div className="item">
          <Image
            src="/image/img3.jpg"
            alt="no image"
            width={1200}
            height={1200}
          />
          <div className="content">
            <div className="author">
              Malik <span className="text-[#f1683a]">Hunain</span>
            </div>
            <div className="title">ELEPHENT</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              The elephant is a majestic and powerful animal, known for its
              large size, strength, and intelligence. With thick, gray skin and
              long, curved tusks, it moves gracefully despite its weight.
              Elephants are social creatures, often found in herds, and they
              share strong bonds with one another. Using their trunks, they
              communicate, gather food, and even show affection. Their gentle
              nature and wisdom make them a cherished symbol of loyalty and
              strength in many cultures.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div
          className="item"
          onClick={mooseNavigation}
          style={{ cursor: "pointer" }}
        >
          <Image
            src={"/image/img1.jpg"}
            alt="no image"
            width={1200}
            height={1200}
          />
          <div className="content">
            <div className="title">Moose</div>
          </div>
        </div>
        <div
          className="item"
          onClick={deerNavigation}
          style={{ cursor: "pointer" }}
        >
          <Image
            src={"/image/img2.jpg"}
            alt="no image"
            width={1200}
            height={1200}
          />
          <div className="content">
            <div className="title">Deer</div>
          </div>
        </div>
        <div
          className="item"
          onClick={elephentNavigation}
          style={{ cursor: "pointer" }}
        >
          <Image
            src={"/image/img3.jpg"}
            alt="no image"
            width={1200}
            height={1200}
          />
          <div className="content">
            <div className="title">Elephent</div>
          </div>
        </div>
        <div
          className="item"
          onClick={leapordNavigation}
          style={{ cursor: "pointer" }}
        >
          <Image
            src={"/image/img4.jpg"}
            alt="no image"
            width={1200}
            height={1200}
          />
          <div className="content">
            <div className="title">Leapord</div>
          </div>
        </div>
      </div>
    </div>
  );
}
