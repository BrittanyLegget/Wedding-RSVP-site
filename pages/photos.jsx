import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  ImageList,
  ImageListItem,
} from "@mui/material";

//Add photos to the array
const photoArr = ["/engagement1.jpg", "/engagement2.jpg", "/engagement3.jpg"];

export default function PicturePage() {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ minWidth: 275, paddingTop: 5 }}>
          <Card variant="outlined">
            <CardContent variant="outlined">
              <Typography>
                This is where pictures can be displayed in a grid format. Just
                add them to the picture array in photos.jsx
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <Container maxWidth="lg">
            <Card variant="outlined">
              <ImageList
                variant="standard"
                cols={3}
                rowHeight="auto"
                width="auto"
                gap={8}
              >
                {photoArr &&
                  photoArr.map((p) => {
                    return (
                      <ImageListItem key={p}>
                        <img src={p} loading="lazy" />
                      </ImageListItem>
                    );
                  })}
              </ImageList>
            </Card>
          </Container>
        </Card>
      </Box>
    </>
  );
}
