import React, { useRef } from "react";
import Main from "./Main";
import Learn from "./Learn";
import Trend from "./Trend";
import Popular from "../../components/Popular";
import Download from "./Download";
import News from "../../components/News";
import Steps from "./Steps";

const Home = () => {
    const scrollToRef = useRef(null);

    return (
        <>
            <Main scrollToRef={scrollToRef} />
            {/* <Learn scrollToRef={scrollToRef} /> */}
            
            <Popular classSection="section-bg section-mb0" />
            <Download />

            <News classSection="section-bg" />
            <Trend />
            <Steps />

        </>
    );
};

export default Home;
