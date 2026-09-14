import React from "react";
import { Stack, Box } from "@mui/material";

const TopAgentCard = () => {
    return (
        <Stack className="top-agent-card">
            <Box
                className={"agent-img"}
                style={{
                    backgroundImage: `url('/img/profile/girl.svg')`,
                }}
            ></Box>
            <strong>Martin</strong>
            <span>Agent</span>
        </Stack>
    );
};

export default TopAgentCard;
