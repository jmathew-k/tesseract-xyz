import React from "react";
import cn from "classnames";
import styles from "./News.module.sass";
import Image from "../Image";
import Slider from "react-slick";
import Icon from "../Icon";
import Card from "./Card";

const items = [
  {
    title: "Mint NFTs",
    content:
      "Mint NFTs at scale and reliably from your product without having to manage the complexity of blockchain",
    stage: "Core Functionality",
    image: "/images/content/tx-nft.png",
    image2x: "/images/content/tx-nft.png",
    url: "/learn-crypto-details",
  },
  {
    title: "Deploy Contracts",
    content:
      "Deploy, manage & monetize your fully owned contracts - build anything from collections to large-scale products",
    stage: "Core Functionality",
    image: "/images/content/web3-contract.png",
    image2x: "/images/content/web3-contract.png",
    url: "/learn-crypto-details",
  },
  {
    title: "Multi-Chain NFT Data",
    content:
      "Bring highest quality NFT data from multiple chains to your product effortlessly",
    stage: "Core Functionality",
    image: "/images/content/stack.png",
    image2x: "/images/content/stack.png",
    url: "/learn-crypto-details",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const News = ({ classSection }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="18" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="18" />
      </SlickArrow>
    ),
  };

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={styles.logo}>
            {/* <Image
              className={styles.pic}
              src="/images/tess-logo-light.png"
              srcDark="/images/tess-logo-dark.png"
              alt="Tesseract"
            /> */}
          </div>
          <h2 className={cn("h2", styles.title)}>
            Stay in the know on crypto with Tesseract
          </h2>
          <div className={styles.info}>
            A creative agency that lead and inspire
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="news-slider" {...settings}>
            {items.map((x, index) => (
              <Card className={styles.card} item={x} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default News;
