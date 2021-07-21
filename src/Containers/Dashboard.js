import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputArea from "../Components/InputArea";
import WeeklyGraph from "../Components/WeeklyGraph";
import Records from "./Records";

const StyledMain = styled.main`
    width: 100vw;
    min-height: 100vh;
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

// Get BMI Records from Local Storage
const getLocalItmes = () => {
    const bmiRecords = localStorage.getItem("bmiRecords");

    if (bmiRecords) {
        return JSON.parse(bmiRecords);
    }
    return [];
};

// Format date in "Mmm dd, yyyy" format
const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
};

// Return bmi status
const getBmiStatus = (bmi) => {
    let status = "";
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }
    return status;
};

export default function Dashboard() {
    const [bmiRecords, setBmiRecords] = useState(getLocalItmes());

    const addNewRecord = ({ weight, height }) => {
        // Calculate BMI
        const newBmi =
            Math.round((weight / ((height / 100) * (height / 100))) * 100) /
            100;
        // Remove today's old record if already measured today and add new record
        const newBMIRecords = [
            ...bmiRecords.filter((e) => e.name !== formatDate(new Date())),
            {
                name: formatDate(new Date()),
                uv: newBmi,
                weight,
                height,
                status: getBmiStatus(newBmi),
            },
        ];
        // Sort data acording to date
        newBMIRecords.sort(
            (e1, e2) =>
                new Date(e1.name).valueOf() - new Date(e2.name).valueOf()
        );
        // Keep only last 7 days data
        setBmiRecords([...newBMIRecords.slice(-7)]);
    };

    // Update BMI Records in Local Storage
    useEffect(() => {
        localStorage.setItem("bmiRecords", JSON.stringify(bmiRecords));
    }, [bmiRecords]);

    return (
        <StyledMain>
            <StyledHeader>
                <h1>BMI Tracker</h1>
            </StyledHeader>
            <InputArea setOutput={addNewRecord} />
            <GraphContainer>
                <WeeklyGraph data={bmiRecords} />
            </GraphContainer>
            <Records data={[...bmiRecords].reverse()} />
        </StyledMain>
    );
}
