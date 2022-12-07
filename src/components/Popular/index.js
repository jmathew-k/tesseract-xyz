import React from "react";
import cn from "classnames";
import styles from "./Popular.module.sass";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Card from "./Card";

const items = [
  {
    title: "NFTs",
    content:
      "Create Powerful NFT solutions for Art, Music, Games, Brands etc.",
    button: "Learn More",
    image: "/images/content/blockchain-stack.png",
    image2x: "/images/content/blockchain-stack.png",
    url: "/buy-crypto",
  },
  {
    title: "Wallets",
    content:
      " Enable token storage and on-chain identities with wallets",
    button: "Learn More",
    image: "/images/content/nft-infra.png",
    image2x: "/images/content/nft-infra.png",
    url: "/exchange",
  },
  {
    title: "Marketplaces",
    content:
      "Let users freely trade NFTs by opening your own marketplace",
    button: "Learn More",
    image: "/images/content/go-to-market.png",
    image2x: "/images/content/go-to-market.png",
    url: "/learn-crypto",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Popular = ({ classSection }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
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
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: false,
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
        },
      },
    ],
  };

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h3 className={cn("h3", styles.title)}>
         Integrated suite of tools to build Web3 enabled Experiences
          </h3>
          <div className={styles.info}>
          <b>Tesseract</b> equips everything you need to start building with Tokens & NFTs
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            {items.map((x, index) => (
              <Card className={styles.card} item={x} key={index} />
            ))}
          </Slider>
        </div>
        <div className={styles.btns}>
          <Link className={cn("button", styles.button)} to="/contact">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;
