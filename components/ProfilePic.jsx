import {
  Stack,
  CardContent,
  Typography,
  Card,
  Box,
  ImageList,
  ImageListItem,
} from "@mui/material";

export default function ProfileCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card square={true}>
        <Card>
          <CardContent style={{ backgroundColor: "#FFFFFF" }}>
            <Typography paddingTop={0} fontSize={40} sx={{ textAlign: "left" }}>
              Jon & Dani
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={{}}>
              <ImageList
                sx={{ width: "auto", height: "auto", border: "none" }}
                variant="standard"
                cols={1}
              >
                <ImageListItem>
                  <img
                    src="/profile.jpg"
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                </ImageListItem>
              </ImageList>
            </Stack>
          </CardContent>
        </Card>
      </Card>
    </Box>
  );
}
