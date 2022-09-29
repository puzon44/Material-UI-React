import { Box } from "@mui/system";
import React from "react";
import Post from "./Post";

export default function Feed() {
  return (
    <Box flex={3} p={2}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
