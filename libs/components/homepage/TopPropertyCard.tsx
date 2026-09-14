import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopPropertyCard = () => {
    return (
        <Stack className="top-card-box">
            <Box
                className={"card-img"}
                style={{
                    backgroundImage: `url('/img/banner/types/apartment.webp')`,
                }}
            >
                <div>$420000</div>
            </Box>
            <Box className={"info"}>
                <strong className="title">Busan City Hall Apartments</strong>
                <p className="desc">Good wills</p>
                <div className="options">
                    <div>
                        <span>3 bed</span>
                    </div>
                    <div>
                        <span>7 rooms</span>
                    </div>
                    <div>
                        <span>220 m2</span>
                    </div>
                </div>
                <div className="bott">
                    <span>Rent</span>
                    <div className="view-like">
                        <div className="view">
                            <RemoveRedEyeIcon />
                            <span>50</span>
                        </div>
                        <div className="like">
                            <FavoriteIcon />
                            <span>250</span>
                        </div>
                    </div>
                </div>
            </Box>
        </Stack>
    );
};

export default TopPropertyCard;
