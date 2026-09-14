import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import TopPropertyCard from "./TopPropertyCard";

const TopProperties = ({ initialInput = [1, 2, 3, 4, 5, 6, 7], ...props }: any) => {
    const [topProperties, setTopProperties] = useState<number[]>(initialInput || [1, 2, 3, 4, 5, 6, 7]);

    return (
        <Stack className={"top-properties"}>
            <Stack className={"container"}>
                <Stack className={"info-box"}>
                    <Box className={"left"}>
                        <span>Top properties</span>
                        <p>Check out our top properties</p>
                    </Box>
                </Stack>
                <Stack className={"card-box"}>
                    <Swiper
                        className={"top-property-swiper"}
                        slidesPerView={"auto"}
                        spaceBetween={25}
                    >
                        {topProperties?.map((property, index) => {
                            return (
                                <SwiperSlide key={index} className={"top-property-slide"}>
                                    <TopPropertyCard />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default TopProperties;
