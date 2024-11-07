"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ListThumnail() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/moose");
  };
  return (
    <div>
      <div
        className="thumbnail"
        onClick={handleNavigation}
        style={{ cursor: "pointer" }}
      >
        <div className="item">
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
        <div className="item">
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
        <div className="item">
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
        <div className="item">
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
