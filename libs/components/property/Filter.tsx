import React, { useState } from "react";
import {
    Stack,
    Typography,
    Checkbox,
    Button,
    OutlinedInput,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Tooltip,
    IconButton,
} from "@mui/material";
import { propertySquare } from "../../config";
import RefreshIcon from "@mui/icons-material/Refresh";

const Filter = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [showMore, setShowMore] = useState<boolean>(false);
    const [propertyPrice, setPropertyPrice] = useState({
        start: 0,
        end: 250000,
    });

    return (
        <Stack className={"filter-main"}>
            <Stack className={"find-your-home"} mb={"40px"}>
                <Typography className={"title-main"}>Find Your Home</Typography>
                <Stack className={"input-box"}>
                    <OutlinedInput
                        value={searchText}
                        type={"text"}
                        className={"search-input"}
                        placeholder={"What are you looking for?"}
                        onChange={(e: any) => setSearchText(e.target.value)}
                    />
                    <img src={"/img/icons/search_icon.png"} alt={""} />
                    <Tooltip title="Reset">
                        <IconButton>
                            <RefreshIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>

            <Stack className={"find-your-home"} mb={"30px"}>
                <p className={"title"} style={{ textShadow: "0px 3px 4px #b9b9b9" }}>
                    Location
                </p>
                <Stack
                    className={"property-location"}
                    style={{ height: showMore ? "253px" : "115px" }}
                >
                    {["SEOUL", "BUSAN", "DAEGU"].map((location: string) => {
                        return (
                            <Stack className={"input-box"} key={location}>
                                <Checkbox
                                    id={location}
                                    className="property-checkbox"
                                    color="default"
                                    size="small"
                                    value={location}
                                    checked={false}
                                />
                                <label htmlFor={location} style={{ cursor: "pointer" }}>
                                    <Typography className="property-type">{location}</Typography>
                                </label>
                            </Stack>
                        );
                    })}
                </Stack>
            </Stack>

            <Stack className={"find-your-home"} mb={"30px"}>
                <p className={"title"} style={{ textShadow: "0px 3px 4px #b9b9b9" }}>
                    Property Type
                </p>
                <Stack className={"property-type"}>
                    {["APARTMENT", "HOUSE", "VILLA"].map((type: string) => {
                        return (
                            <Stack className={"input-box"} key={type}>
                                <Checkbox
                                    id={type}
                                    className="property-checkbox"
                                    color="default"
                                    size="small"
                                    value={type}
                                    checked={false}
                                />
                                <label htmlFor={type} style={{ cursor: "pointer" }}>
                                    <Typography className="property-type">{type}</Typography>
                                </label>
                            </Stack>
                        );
                    })}
                </Stack>
            </Stack>

            <Stack className={"find-your-home"} mb={"30px"}>
                <p className={"title"}>Rooms</p>
                <Stack className={"button-group"}>
                    {["Any", "1", "2", "3", "4", "5+"].map((room: string) => (
                        <Button
                            key={room}
                            className={"room-btn"}
                            sx={{
                                borderRadius: 0,
                                border: "1px solid #b9b9b9",
                            }}
                        >
                            {room}
                        </Button>
                    ))}
                </Stack>
            </Stack>

            <Stack className={"find-your-home"} mb={"30px"}>
                <p className={"title"}>Bedrooms</p>
                <Stack className={"button-group"}>
                    {["Any", "1", "2", "3", "4", "5+"].map((bed: string) => (
                        <Button
                            key={bed}
                            className={"room-btn"}
                            sx={{
                                borderRadius: 0,
                                border: "1px solid #b9b9b9",
                            }}
                        >
                            {bed}
                        </Button>
                    ))}
                </Stack>
            </Stack>

            <Stack className={"find-your-home"} mb={"30px"}>
                <p className={"title"}>Options</p>
                <Stack className={"property-options"}>
                    {["Barter", "Rent"].map((option: string) => (
                        <Stack className={"input-box"} key={option}>
                            <Checkbox
                                id={option}
                                className="property-checkbox"
                                color="default"
                                size="small"
                                value={option}
                                checked={false}
                            />
                            <label htmlFor={option} style={{ cursor: "pointer" }}>
                                <Typography className="property-type">{option}</Typography>
                            </label>
                        </Stack>
                    ))}
                </Stack>
            </Stack>

            <Stack className={"find-your-home"} mb={"30px"}>
                <Typography className={"title"}>Square meter</Typography>
                <Stack className={"square-year-input"}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Min</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={0}
                            label="Min"
                        >
                            {propertySquare.map((square: number) => (
                                <MenuItem value={square} key={square}>
                                    {square}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <div className="central-divider"></div>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Max</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={500}
                            label="Max"
                        >
                            {propertySquare.map((square: number) => (
                                <MenuItem value={square} key={square}>
                                    {square}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Filter;
