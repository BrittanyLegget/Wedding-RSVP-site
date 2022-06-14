import {
  CardHeader,
  CardContent,
  Box,
  Card,
  ImageList,
  ImageListItem,
} from "@mui/material";

export default function PetsCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardHeader
          title="Pets:"
          style={{
            backgroundColor: "#0E2948",
            color: "white",
            textAlign: "left",
          }}
        />
        <CardContent variant="outlined">
          <ImageList
            sx={{ width: "auto", height: "auto" }}
            variant="standard"
            cols={1}
            rowHeight="auto"
            width="auto"
            gap={8}
          >
            <ImageListItem>
              <img src="/pets.jpg" loading="lazy" />
            </ImageListItem>
          </ImageList>
        </CardContent>
      </Card>
    </Box>
  );
}
