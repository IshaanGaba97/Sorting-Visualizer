import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Button,
  ButtonGroup,
  Slider,
  Typography,
} from "@mui/material";
import AlgoButtons from "./AlgoButtons";

export default function CenterDiv({ isPhone, defTheme }) {
  const [myArr, setMyArr] = useState([]);
  const [reRender, setReRender] = useState(0);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(20);
  const [delay, setDelay] = useState(150);
  const [toggleDisable, setToggleDisable] = useState(false);

  const setDisable = (isDisable) => {
    setToggleDisable(isDisable);
  };

  function delayFunc() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, delay);
    });
  }

  function ff(f) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, f);
    });
  }

  const swap = async (a, b) => {
    let temp = a.style.height;
    a.style.height = b.style.height;
    b.style.height = temp;
  };

  const clearArr = () => {
    setLoading(true);
    setMyArr([]);
  };

  const updateArr = async () => {
    await clearArr();
    let lengths = [];
    let len = [];
    for (let i = 0; i < value; i++) {
      len.push(1);
      lengths.push(Math.floor(Math.random() * (68 - 20 + 1)) + 20 + "vh");
    }
    setMyArr(lengths);
    setLoading(false);
  };

  const updateValueFunc = (newValue) => {
    setValue(newValue);
  };

  const handleSizeSliderChange = async (event, newValue) => {
    await updateValueFunc(newValue);
  };

  const updateDelayFunc = (newValue) => {
    setDelay(newValue);
  };

  const handleDelaySliderChange = async (event, newValue) => {
    await updateDelayFunc(newValue);
  };

  useEffect(() => {
    updateArr();
    // eslint-disable-next-line
  }, [reRender, value]);

  return (
    <>
      <Container fixed style={{ marginTop: "2em" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: isPhone === true ? "column" : "row",
          }}
        >
          <Box sx={{ width: "100%", marginX: isPhone === true ? "" : "10px" }}>
            <Typography gutterBottom>Size: {value}</Typography>
            <Slider
              disabled={toggleDisable}
              size={isPhone === true ? "small" : "large"}
              min={isPhone === true ? 5 : 10}
              step={5}
              max={isPhone === true ? 100 : 250}
              defaultValue={value}
              color={defTheme === "light" ? "primary" : "secondary"}
              onChange={handleSizeSliderChange}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography gutterBottom>Speed: {delay}ms</Typography>
            <Slider
              disabled={toggleDisable}
              size={isPhone === true ? "small" : "large"}
              min={20}
              step={10}
              max={200}
              defaultValue={delay}
              color={defTheme === "light" ? "primary" : "secondary"}
              onChange={handleDelaySliderChange}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: isPhone === true ? "column" : "row",
          }}
        >
          <Button
            disabled={toggleDisable}
            sx={{ marginY: isPhone === true ? "10px" : "" }}
            size={isPhone === true ? "small" : "large"}
            onClick={() => setReRender(reRender + 1)}
            variant="outlined"
            color={defTheme === "light" ? "primary" : "secondary"}
          >
            Generate New
          </Button>
          <AlgoButtons
            toggleDisable={toggleDisable}
            isPhone={isPhone}
            defTheme={defTheme}
            swap={swap}
            delayFunc={delayFunc}
            setDisable={setDisable}
          />
        </Box>
        {!loading && (
          <Box
            sx={{
              height: "70vh",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {myArr.map((len, idx) => (
              <Box
                style={{
                  height: len,
                  backgroundColor: defTheme === "light" ? "#ca8cc5" : "#173a5e",
                }}
                className="bar"
                key={idx}
                sx={{
                  width: "100%",
                  border: "1px solid black",
                }}
              ></Box>
            ))}
          </Box>
        )}
      </Container>
    </>
  );
}
