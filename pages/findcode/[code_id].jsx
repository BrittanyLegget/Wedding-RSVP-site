import React, { useState } from "react";
import clientPromise from "../../lib/mongodb";
import RSVPForm from "../../components/RSVPForm";
import Spinner from "../../components/Spinner";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Box,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Stack,
  Backdrop,
  Modal,
  Fade,
} from "@mui/material";

export default function GuestsByCode({ guests }) {
  const [Updating, setUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Click handler function to post RSVP status to db
  async function ClickHandler(enteredData) {
    setIsLoading(true);
    let data = {};

    // Create an object to hold all data elements needing to be passed as req
    var obj = {};
    obj.e = enteredData.e;
    obj.g = enteredData.g;
    obj.v = enteredData.v.target.value;
    console.log("sending request");

    try {
      //Post
      const response = await fetch("/api/response", {
        method: "POST",
        body: JSON.stringify(obj, response),
        headers: {
          "Content-Type": "application/json",
        },
      });
      data = await response.json();
    } catch (error) {
      console.log(error);
      return setUpdating(false);
    }
    //Once data has been posted, we need to force reload the page to see changes
    if (data) {
      window.location.reload();
    }
  }

  return (
    <Container maxWidth="md">
      {guests.length == 0 ? (
        <RSVPForm invalid={false} />
      ) : (
        <>
          <Typography
            style={{
              textAlign: "center",
              fontFamily: "Merienda",
              fontSize: "18px",
              whiteSpace: "normal",
              paddingTop: "4px",
            }}
          >
            <br></br>
            All events will take place at The Inn at Diamond Woods <br></br>
            96096 Territorial Rd Monroe, OR 97456 <br></br>Our ceremony and
            reception will be outdoors, please dress accordingly in semi-formal
            attire
            <br></br>We can’t wait to see you, but please arrive no earlier than
            2:15PM
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              fontSize: "12px",
              whiteSpace: "normal",
              paddingTop: "4px",
            }}
          >
            If you have questions please contact Dani or Jon
          </Typography>

          <Box sx={{ minWidth: 275, paddingTop: 4, paddingBottom: 5 }}>
            <Card variant="outlined">
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isLoading}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={isLoading}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Spinner />
                  </Box>
                </Fade>
              </Modal>
              {guests &&
                guests.map((g, index) => {
                  return (
                    <div className="card" key={index}>
                      <CardHeader
                        title={g.event}
                        subheader={
                          <Typography sx={{ color: "white" }}>
                            {g.Date}
                            <br></br>
                            {g.event == "Reception" ? "* Cash Bar Only" : ""}
                            {g.event == "Ceremony"
                              ? "* We can’t wait to see you, but please arrive no earlier than 2:15PM"
                              : ""}
                          </Typography>
                        }
                        style={{
                          backgroundColor: "#0E2948",
                          color: "white",
                          textAlign: "left",
                          fontWeight: "extra-bold",
                        }}
                      />
                      {g.guests.map((e, idx) => (
                        <div key={idx}>
                          <CardContent variant="outlined">
                            <Typography
                              textAlign="center"
                              fontSize={22}
                              fontWeight="bold"
                            >
                              {e.guest}
                            </Typography>
                            <Stack
                              direction={{ xs: "column", sm: "row" }}
                              spacing={{ xs: 1, sm: 2, md: 4, lg: 8 }}
                              alignItems="center"
                              justifyContent="center"
                            >
                              <CardActions>
                                <FormControl>
                                  <RadioGroup
                                    row
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={e.attending}
                                    spacing={10}
                                    onClick={(v) => {
                                      ClickHandler({ g, e, v });
                                      setUpdating(true);
                                    }}
                                  >
                                    <FormControlLabel
                                      checked={e.attending == 1}
                                      value={1}
                                      labelPlacement="start"
                                      color="success"
                                      control={<Radio color="success" />}
                                      label="Attending"
                                    />
                                    <FormControlLabel
                                      checked={e.attending == 0}
                                      value={0}
                                      labelPlacement="start"
                                      color="default"
                                      control={<Radio />}
                                      label="Not Attending"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </CardActions>
                            </Stack>
                            {e.attending == 1 ? (
                              <Typography
                                align="center"
                                color="#0F5044"
                                fontFamily="Merienda"
                                paddingTop={1}
                                paddingBottom={3}
                              >
                                We look forward to seeing you!
                              </Typography>
                            ) : (
                              <>
                                {e.attending == 0 ? (
                                  <Typography
                                    align="center"
                                    color="#0F5044"
                                    fontFamily="Merienda"
                                    paddingTop={1}
                                    paddingBottom={3}
                                  >
                                    We will miss you!
                                  </Typography>
                                ) : (
                                  <></>
                                )}
                              </>
                            )}
                          </CardContent>
                        </div>
                      ))}
                    </div>
                  );
                })}
            </Card>
          </Box>
        </>
      )}
    </Container>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("Wedding");

  //Get code from url parameter
  const query = context.query.code_id;

  let guests = await db.collection("RSVP").find({ code: query }).toArray();
  guests = JSON.parse(JSON.stringify(guests));
  console.log(guests);

  return {
    props: { guests },
  };
}
