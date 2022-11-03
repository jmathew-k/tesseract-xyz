import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Main.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Cards from "./Cards";

const Main = ({ scrollToRef }) => {
    return (
        <div className={cn("section", styles.main)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <h1 className={cn("h1", styles.title)}>
                        NFT infrastructure<br></br>for the Web
                    </h1>
                    <div className={styles.text}>
                    <b>Tesseract</b> is the leading NFT infrastructure for builders and creators in Web3.
                    </div>
                    <Link className={cn("button", styles.button)} to="/sign-up">
                        Start now
                    </Link>
                    <ScrollButton
                        onScroll={() =>
                            scrollToRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className={styles.scroll}
                    />
                </div>
                <div className={styles.bg}>
                    <img
                        srcSet="/images/content/eth-server-dark.png 2x"
                        src="/images/content/eth-server-dark.png"
                        alt="Cards"
                    />
                </div>
                <Cards className={styles.cards} />
            </div>
        </div>
    );
};

export default Main;
