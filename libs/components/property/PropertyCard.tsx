import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PropertyCard = () => {
    return (
        <Stack className="card-config">
            <Box
                className={"top"}
                style={{
                    backgroundImage: `url('/img/banner/header1.svg')`,
                }}
            >
                <div className={"status"}>
                    <img src="/img/icons/electricity.svg" alt="" />
                    <span>TOP</span>
                </div>
                <div className={"price"}>$250000</div>
            </Box>
            <Box className={"info"}>
                <strong className={"title"}>Kingstone Apartments</strong>
                <p className={"desc"}>Busan, City Center 200 - 5</p>
                <div className={"options"}>
                    <div>
                        <img src="/img/icons/bed.svg" alt="" />
                        <span>2 bed</span>
                    </div>
                    <div>
                        <img src="/img/icons/room.svg" alt="" />
                        <span>7 room</span>
                    </div>
                    <div>
                        <img src="/img/icons/expand.svg" alt="" />
                        <span>170 m2</span>
                    </div>
                </div>
                <Stack className="type-buttons">
                    <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
                        Rent
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
                        Barter
                    </Typography>
                </Stack>
                <Stack className="buttons">
                    <IconButton color="default">
                        <RemoveRedEyeIcon />
                    </IconButton>
                    <Typography className="view-cnt">100</Typography>
                    <IconButton color="default">
                        <FavoriteIcon color="primary" />
                    </IconButton>
                    <Typography className="view-cnt">20</Typography>
                </Stack>
            </Box>
        </Stack>
    );
};

export default PropertyCard;
