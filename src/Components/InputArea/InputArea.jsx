import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import RangeSlider from "../RangeSlider";

const InputContainer = styled.div`
    padding: 4rem 0;
`;

const Sliders = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: grid;
    place-items: center;
    // background-color: red;
`;

const StyledButton = styled.button`
    background-color: #142850;
    outline: none;
    border: none;
    padding: 0.5rem 2rem;
    box-shadow: 0px 3px #27496d, 0 0 10px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s all;
    color: white;
    &:hover {
        // background-color: #27496d;
    }
    &:active {
        box-shadow: 0 0px #27496d;
        transform: translate(0px, 2px);
    }
`;

export default function InputArea({ setOutput }) {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const updateHeight = (e) => {
        const newHeight = e.target.value;
        setHeight(newHeight);
    };
    const updateWeight = (e) => {
        const newWeight = e.target.value;
        setWeight(newWeight);
    };
    const calculateBMI = () => {
        const bmi = (weight * 100 * 100) / (height * height);
        setOutput(bmi);
    };

    return (
        <InputContainer>
            <Sliders>
                <RangeSlider
                    label="Weight"
                    min={1}
                    max={150}
                    unit="KG"
                    onBlur={updateWeight}
                />
                <RangeSlider
                    label="Height"
                    min={50}
                    max={250}
                    unit="cm"
                    onBlur={updateHeight}
                />
            </Sliders>
            <ButtonContainer>
                <StyledButton type="submit" onClick={calculateBMI}>
                    Calculate BMI
                </StyledButton>
            </ButtonContainer>
        </InputContainer>
    );
}

InputArea.propTypes = {
    setOutput: PropTypes.func.isRequired,
};
