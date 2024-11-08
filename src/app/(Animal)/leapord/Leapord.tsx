"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function LeapordComponent() {
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
    <RevealWrapper
      origin="left"
      reset={true}
      distance="80px"
      duration={2000}
      delay={200}
    >
      <div className="carousel">
        <div className="list">
          <div className="item">
            <Image
              src="/image/img4.jpg"
              alt="no image"
              width={1200}
              height={1200}
            />
            <div className="content">
              <div className="author">
                Malik <span className="text-[#f1683a]">Hunain</span>
              </div>
              <div className="title">LEAPORD</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Leopards are powerful, adaptable big cats known for their
                agility, strength, and stunning, spotted coats. Found in diverse
                habitats across Africa and Asia, they are skilled climbers and
                often drag prey into trees to keep it safe from scavengers.
                Leopards are solitary and stealthy hunters, relying on keen
                eyesight and quiet movements to stalk and ambush their prey,
                making them one of the most elusive predators in the wild.
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
              <div className="description">Description</div>
            </div>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
}
