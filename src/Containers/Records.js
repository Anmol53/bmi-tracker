import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Record from "../Components/Record";

const RecordsContainer = styled.div`
    margin: 5rem auto;
    max-width: 1080px;
    padding: 1rem;
`;

const StyledHeader = styled.header`
    text-align: center;
    padding: 1rem 0;
`;

const CardsContainer = styled.ul`
    list-style: none;
    margin: 2rem 0;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export default function Records({ data }) {
    return (
        <RecordsContainer>
            <StyledHeader>
                <h1>Last Records</h1>
            </StyledHeader>
            <CardsContainer>
                {data.map((ele) => (
                    <li>
                        <Record data={ele} />
                    </li>
                ))}
            </CardsContainer>
        </RecordsContainer>
    );
}
Records.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
};
