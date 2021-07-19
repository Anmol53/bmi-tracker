import React from "react";
import styled from "styled-components";
import InputSection from "../Components/InputSection";
import WeeklyGraph from "../Components/WeeklyGraph";
import Records from "./Records";

const StyledMain = styled.main`
    width: 100vw;
    min-height: 100vw;
    overflow-x: hidden;
`;

const StyledHeader = styled.header`
    text-align: center;
    padding: 1rem 0;
`;

const GraphContainer = styled.div`
    padding: 1rem 0;
    display: grid;
    place-items: center;
`;

export default function Dashboard() {
    return (
        <StyledMain>
            <StyledHeader>
                <h1>BMI Tracker</h1>
            </StyledHeader>
            <InputSection />
            <GraphContainer>
                <WeeklyGraph />
            </GraphContainer>
            <Records />
        </StyledMain>
    );
}
