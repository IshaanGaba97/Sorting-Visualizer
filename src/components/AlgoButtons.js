import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import SelectionSort from "./algos/SelectionSort";
import BubbleSort from "./algos/BubbleSort";
import MergeSort from "./algos/MergeSort";
import QuickSort from "./algos/QuickSort";
import InsertionSort from "./algos/InsertionSort";

export default function AlgoButtons({
  toggleDisable,
  isPhone,
  defTheme,
  swap,
  delayFunc,
  setDisable,
}) {
  const options = ["Selection", "Bubble", "Insertion", "Merge", "Quick"];
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    if (options[selectedIndex] === "Selection") {
      SelectionSort({ setDisable, swap, delayFunc });
    } else if (options[selectedIndex] === "Bubble") {
      BubbleSort({ setDisable, swap, delayFunc });
    } else if (options[selectedIndex] === "Insertion") {
      InsertionSort({ setDisable, swap, delayFunc });
    } else if (options[selectedIndex] === "Merge") {
      MergeSort({ setDisable, swap, delayFunc });
    } else if (options[selectedIndex] === "Quick") {
      QuickSort({ setDisable, swap, delayFunc });
    }
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        disabled={toggleDisable}
        size={isPhone === true ? "small" : "large"}
        variant="outlined"
        color={defTheme === "light" ? "primary" : "secondary"}
        ref={anchorRef}
        aria-label="split button"
      >
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          variant="outlined"
          color={defTheme === "light" ? "primary" : "secondary"}
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
