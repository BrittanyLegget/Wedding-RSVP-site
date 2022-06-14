import { CardHeader, CardContent, Typography, Card } from "@mui/material";
import { Box } from "@mui/material";

export default function AboutUsCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardHeader
          title="About Us:"
          style={{ backgroundColor: "#0E2948", color: "white" }}
        />
        <CardContent variant="outlined">
          <Typography>
            We met at Sunset Lanes in Beaverton, OR at a mutual friend’s going
            away party in early 2015. We started dating a year later and soon
            moved to Klamath Falls to finish school at Oregon Institute of
            Technology. In 2019 we both graduated with degrees in Health
            Informatics and Civil Engineering. A year and a half ago we bought a
            house in Klamath Falls and have built a home together with our two
            cats; Boots and Diamond. Dani works from home as the Business
            Intelligence Manager for a healthcare organization and Jon is a
            Civil Engineer for a consultng firm in Klamath Falls. We got engaged
            New Years Day 2021!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
