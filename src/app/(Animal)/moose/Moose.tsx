"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function MooseComponent() {
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
            src="/image/img1.jpg"
            alt="no image"
            width={1200}
            height={1200}
          />
          <div className="content">
            <div className="author">
              Malik <span className="text-[#f1683a]">Hunain</span>
            </div>
            <div className="title">MOOSE</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Moose, known for their large size and unique antlers, are one of
              the most iconic animals in northern forests and cold climates.
              Found in regions like Canada, Alaska, and parts of Europe, these
              herbivores are skilled swimmers and can dive to eat aquatic
              plants. Their impressive antlers, grown by males, can span up to
              six feet, helping them attract mates and establish dominance.
              Moose are solitary animals, often spotted wandering through
              forests or near water sources, adapting well to the cold with
              thick fur and strong, long legs for navigating snowy terrain.
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
