"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function DeerComponent() {
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
            src="/image/img2.jpg"
            alt="no image"
            width={1200}
            height={1200}
          />
          <div className="content">
            <div className="author">
              Malik <span className="text-[#f1683a]">Hunain</span>
            </div>
            <div className="title">DEER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Deer are graceful, herbivorous animals found in forests,
              grasslands, and mountains across the world. Known for their
              slender bodies, quick reflexes, and agility, they can escape
              predators swiftly. Male deer, called bucks, often grow antlers
              used for mating displays and territorial battles. With keen
              senses, deer communicate using sounds, scents, and body language,
              adapting well to various habitats.
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
            <div className="title">ELephent</div>
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
