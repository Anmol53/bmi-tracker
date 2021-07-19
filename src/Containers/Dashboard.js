import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputArea from "../Components/InputArea";
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
    const [bmi, setBmi] = useState(0);
    const [bmiRecords, setBmiRecords] = useState([]);

    const updateBMI = (newBmi) => {
        setBmi(newBmi);
    };

    const formatDate = (date) => {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    useEffect(() => {
        setBmiRecords([
            ...bmiRecords,
            { name: formatDate(new Date()), uv: bmi },
        ]);
    }, [bmi]);

    return (
        <StyledMain>
            <StyledHeader>
                <h1>BMI Tracker</h1>
            </StyledHeader>
            <InputArea setOutput={updateBMI} />
            <GraphContainer>
                <WeeklyGraph data={bmiRecords} />
            </GraphContainer>
            <Records />
        </StyledMain>
    );
}
