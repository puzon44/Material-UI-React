import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import AnchorIcon from "@mui/icons-material/Anchor";
import { Mail } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "35%",
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "flex",
  gap: "35px",
  alignItems: "center",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar position="sticky" sx={{ background: "#06283D" }}>
      <StyleToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          M-UI test
        </Typography>
        <AnchorIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Searchbar>
          <InputBase placeholder="Search...." />
        </Searchbar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon color="white" />
          </Badge>
          <Avatar
            sx={{ width: "30", height: "30" }}
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: "30", height: "30" }}
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="span">Username</Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
