import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../Styles/HomeContent.css";

const HomeContent = () => {
  return (
    <div className="home-content">
      <Image
        src={"/bg.jpg"}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
        className="background-image"
      />

      <div className="content-overlay">
        <h1 className="title">Welcome to Watch World</h1>
        <h2 className="subtitle">Your one-stop shop for the best watches</h2>
        <Link href={"/Watches"}
           className="shop-now-button">Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;

