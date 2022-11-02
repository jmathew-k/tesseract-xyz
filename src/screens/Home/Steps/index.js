import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";

const items = [
  {
    title: "Connect APIs",
    image2x: "/images/content/connect.png",
    image: "/images/content/connect.png",
    content:
      "Create an API key and connect Tesseract NFT Stack",
  },
  {
    title: "Upload Media",
    image2x: "/images/content/upload.png",
    image: "/images/content/upload.png",
    content:
      "One-click upload your NFT Data/Media to IPFS",
  },
  {
    title: "Integrate NFT Contracts",
    image2x: "/images/content/contract.png",
    image: "/images/content/contract.png",
    content:
      "Set contract parameters for NFT minting/trading",
  },
  {
    title: "Deploy Application",
    image2x: "/images/content/monitor.png",
    image: "/images/content/monitor.png",
    content:
      "Deploy & monitor Web3 services with Tesseract dashboard",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>How does it work?</h2>
          <div className={styles.info}>
          The Tesseract Platform provides end-to-end tooling to incorporate NFTs in your application
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.preview}>
                <img
                  srcSet={`${x.image2x} 2x`}
                  src={x.image}
                  alt={`Step ${index + 1}`}
                />
              </div>
              <div className={styles.number}>Step {index + 1}</div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
