import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    background: linear-gradient(
        210deg,
        rgba(224, 224, 224, 0.1) 0,
        rgba(36, 34, 34, 0.01) 97%
    );
    padding: 1rem;
    box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
        -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    transition: 0.4s;
    border-radius: 20px;
    &:hover {
        transform: scale(0.9, 0.9);
        box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
            -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
    }
    h2,
    h3 {
        font-size: 0.9rem;
        margin: 0.1rem 0px;
    }
`;

export default function Record({ data }) {
    return (
        <StyledCard>
            <h1>{`BMI: ${data.uv}`}</h1>
            <h2>{`Weight: ${data.weight} KG`}</h2>
            <h2>{`Height: ${data.height} cm`}</h2>
            <h3>{`Recorded on: ${data.name}`}</h3>
        </StyledCard>
    );
}
Record.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        uv: PropTypes.number,
        weight: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
};
