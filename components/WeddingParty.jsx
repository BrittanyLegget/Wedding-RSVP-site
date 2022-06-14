import {
  CardHeader,
  CardContent,
  Card,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const CardContentNoPadding = styled(CardContent)(`
 
  &:last-child {
    padding-bottom: 0;
  }
`);

export default function WeddingPartyCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardHeader
          title="Wedding Party:"
          style={{
            backgroundColor: "#0E2948",
            color: "white",
            textAlign: "left",
          }}
        />
        <CardContentNoPadding variant="outlined">
          <ImageList
            sx={{ width: "auto", height: "auto" }}
            variant="standard"
            cols={3}
            rowHeight="auto"
            width="auto"
            gap={8}
          >
            <ImageListItem>
              <img src="/brettney.jpg" loading="lazy" />
              <ImageListItemBar title="Brettney" position="below" />
            </ImageListItem>

            <ImageListItem>
              <img src="/Britt.jpg" loading="lazy" />
              <ImageListItemBar title="Brittany" position="below" />
            </ImageListItem>

            <ImageListItem>
              <img src="/faith.jpg" loading="lazy" />
              <ImageListItemBar title="Faith" position="below" />
            </ImageListItem>

            <ImageListItem>
              <img src="/Kevin.jpeg" loading="lazy" />
              <ImageListItemBar title="Kevin" position="below" />
            </ImageListItem>

            <ImageListItem>
              <img src="/Travis.jpeg" loading="lazy" />
              <ImageListItemBar title="Travis" position="below" />
            </ImageListItem>

            <ImageListItem>
              <img src="/cole.jpeg" loading="lazy" />
              <ImageListItemBar title="Cole" position="below" />
            </ImageListItem>
          </ImageList>
        </CardContentNoPadding>
      </Card>
    </Box>
  );
}
