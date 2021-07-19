import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const LandscapeContainer = styled.div`
    aspect-ratio: 16 / 9;
    min-width: 50vw;
    width: 90vw;
    max-height: 50vh;
`;

export default function WeeklyGraph({ data }) {
    return (
        <LandscapeContainer>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </LandscapeContainer>
    );
}

WeeklyGraph.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
};
