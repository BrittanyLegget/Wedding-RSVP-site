import React, { useEffect, useState } from "react";
import { Card, Stack, Grid, CardContent, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const calculateTimeLeft = () => {
  const difference = +new Date(`05/28/2023`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    };
  }

  return timeLeft;
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}
        {""}
        <span style={{ marginLeft: ".8rem" }}></span>
      </span>
    );
  });

  return (
    <Grid
      container
      alignItems="stretch"
      columns={10}
      paddingTop={2}
      spacing={{ xs: 1 }}
    >
      <Grid item style={{ display: "flex" }} sm={10} md={4}>
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <CardContent style={{ backgroundColor: "#FFFFFF" }}>
            <Typography paddingTop={0} fontSize={40} sx={{ textAlign: "left" }}>
              Jon & Dani
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1 }}
              alignItems="center"
              justifyContent="center"
            >
              <ImageList
                sx={{ width: "auto", height: "auto", border: "none" }}
                variant="standard"
                cols={1}
                paddingBottom={0}
              >
                <ImageListItem>
                  <img src="/profile.jpg" width="100%" height="100%" />
                </ImageListItem>
              </ImageList>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item style={{ display: "flex" }} sm={10} md={6}>
        <Card
          style={{
            display: "flex",

            flexDirection: "column",

            boxShadow: "none",
          }}
          elevation={0}
          border="none"
        >
          <div id="box-search">
            <div className="thumbnail">
              <img className="countdown" src="/countdownImage.jpg" alt="" />

              <div className="caption" style={{ fontFamily: "Merienda" }}>
                {timerComponents}
                until we tie the knot!
              </div>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
