import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Typography,
  Container,
  Alert,
  CardHeader,
  Button,
  CardContent,
  CardActions,
  Card,
  Box,
  FormHelperText,
  OutlinedInput,
  FormControl,
  useFormControl,
} from "@mui/material";

/* Helper text below button to inform of case sensitivity */
function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "*Case Sensitive";
    }
    return "*Case Sensitive";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

/* Form for RSVP code lookup */
export default function RSVPForm({ invalid }) {
  const router = useRouter();
  const code_id = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [isCode, setCode] = useState();

  // Display error box if code was not found in [code].js
  if (Object.keys(code_id).length == 0) {
    invalid = false;
  } else {
    invalid = true;
  }

  function handleSubmit(event) {
    let url = `/findcode/${code.value}`;
    setIsLoading(true);
    event.preventDefault();

    setTimeout(function () {
      router.push(url);
    }, 1000);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ minWidth: 275, paddingTop: 5 }}>
        {isLoading == true ? (
          <Typography
            style={{
              textAlign: "center",
              fontFamily: "Merienda",
              fontSize: "28px",
              whiteSpace: "normal",
              color: "#0F5044",
              paddingTop: "6px",
            }}
          >
            Finding Your Invitation...
          </Typography>
        ) : (
          <>
            <Card variant="outlined">
              <CardHeader
                title="Enter the RSVP code on your invitation"
                style={{
                  backgroundColor: "#0E2948",
                  color: "white",
                  textAlign: "center",
                }}
              />
              <CardContent variant="outlined" sx={{ minWidth: 275 }}>
                <Box
                  sx={{ width: "auto", align: "center", textAlign: "center" }}
                >
                  <FormControl sx={{ width: "auto" }}>
                    <form onSubmit={handleSubmit}>
                      <OutlinedInput
                        placeholder="RSVP Code"
                        type="text"
                        name="code"
                        id="code"
                      />
                      <MyFormHelperText />
                    </form>
                  </FormControl>
                </Box>
              </CardContent>
              <CardActions sx={{ display: `flex`, justifyContent: `center` }}>
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  sx={{ backgroundColor: "#0F5044" }}
                  onClick={handleSubmit}
                >
                  FIND MY INVITATION
                </Button>
              </CardActions>
              <Typography
                textAlign="right"
                fontSize={12}
                paddingTop={2}
                paddingRight={2}
                paddingBottom={1}
              >
                If you have issues contact Dani or Jon
              </Typography>
              {invalid == true && (
                <Alert severity="error">Code not found</Alert>
              )}
            </Card>
          </>
        )}
      </Box>
    </Container>
  );
}
