import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <Link href={"/moose"} className="text-[#f1683a]">
            Moose
          </Link>
          <Link href={"/deer"}>Deer</Link>
          <Link href={"/elephent"} className="text-[#f1683a]">
            Elephent
          </Link>
          <Link href={"/leapord"}>Leapord</Link>
        </nav>
      </header>
    </div>
  );
}
