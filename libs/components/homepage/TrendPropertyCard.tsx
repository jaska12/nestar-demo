import React from "react";
import { Stack, Box } from "@mui/material";

const TrendPropertyCard = () => {
    return (
        <Stack className="trend-card-box">
            <Box className="card-img">
                <span>$10</span>
            </Box>
            <Box className="info">
                <strong className="title">Kingston Buildings</strong>
                <p className="desc">no description</p>
                <div className="options">
                    <div>
                        <span>2 bed</span>
                    </div>
                    <div>
                        <span>5 rooms</span>
                    </div>
                    <div>
                        <span>150 m2</span>
                    </div>
                </div>
                <div className="bott">
                    <span>Rent</span>
                    <div className="view-like">
                        <div className="view">
                            <span>100</span>
                        </div>
                        <div className="like">
                            <span>100</span>
                        </div>
                    </div>
                </div>
            </Box>
        </Stack>
    );
};

export default TrendPropertyCard;
