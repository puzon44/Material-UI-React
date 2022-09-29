import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export default function Post() {
  return (
    <Card sx={{ marginBottom: "25px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "Green" }} aria-label="#">
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Material UI cards"
        subheader="September 29, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.unsplash.com/photo-1664393485705-b3ca8a8eebb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic cum
          eveniet aliquid eum magni iure earum tenetur molestiae pariatur
          doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ab iure nostrum error impedit. Reprehenderit cumque nostrum
          perferendis illo quaerat quo!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
