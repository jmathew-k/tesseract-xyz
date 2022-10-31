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
                        NFT infrastructure<br></br>for the Internet
                    </h1>
                    <div className={styles.text}>
                    Bring True Ownership Of Virtual Assets, Verifiable Scarcity, And Open Standard For Interoperability To Your Digital Experience
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
                        srcSet="/images/content/eth-server-dark@2x.png 2x"
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
