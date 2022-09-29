import { Button, styled, Typography } from "@mui/material";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SettingsIcon from "@mui/icons-material/Settings";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
// import styled from "@emotion/styled/types/base";

function Test() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "black",
    margin: "50px",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  return (
    <div>
      <Button className="hehe" variant="text" startIcon={<ShortTextIcon />}>
        Text
      </Button>
      <Button variant="contained" startIcon={<SettingsIcon />} color="error">
        Settings
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<DoneOutlineIcon />}
      >
        CheckMark
      </Button>

      <Typography variant="h2" component="p">
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>Test Button</BlueButton>
      <BlueButton>2nd Test Button</BlueButton>
    </div>
  );
}

export default Test;
