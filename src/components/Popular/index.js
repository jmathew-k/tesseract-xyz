import React from "react";
import cn from "classnames";
import styles from "./Popular.module.sass";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Card from "./Card";

const items = [
  {
    title: "Blockchain stack is complex and time-consuming",
    content:
      "Grasping Solidity, Web3.js, GraphQL, nodes, IPFS, etc. is hard, time-consuming and usually needs a team to cover all of the skills.",
    button: "Learn More",
    image: "/images/content/blockchain-stack.png",
    image2x: "/images/content/blockchain-stack.png",
    url: "/buy-crypto",
  },
  {
    title: "NFT infrastructure is hard to manage & expensive",
    content:
      "Teams waste 25-50% of engineering resources managing nodes, developing indexers, overpay gas fees etc. as they try to reinvent the wheel.",
    button: "Learn More",
    image: "/images/content/nft-infra.png",
    image2x: "/images/content/nft-infra.png",
    url: "/exchange",
  },
  {
    title: "Slow go-to-market is the biggest risk",
    content:
      "Using heavily rate-limited, slow and incomplete APIs slow you down in an extremely competitive market, leading to losing users and revenue.",
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
          <h2 className={cn("h2", styles.title)}>
          Developing NFT Apps are Hard, Time-Consuming and Expensive
          </h2>
          <div className={styles.info}>
          Tesseract equips everything you need to start building on Web3
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
