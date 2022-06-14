import { CardHeader, CardContent, Typography, Card } from "@mui/material";
import { Box } from "@mui/material";

export default function DetailsCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardHeader
          title="Details:"
          style={{
            backgroundColor: "#0E2948",
            color: "white",
            textAlign: "left",
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              bgcolor: "background.paper",
              maxWidth: "auto",
              borderRadius: 1,

              backgroundColor: "white",
            }}
          >
            <div className="container">
              <div className="item">
                <Typography sx={{ fontWeight: "bold" }}>Status:</Typography>
              </div>
              <div className="item">Engaged</div>
              <div className="item">
                <Typography sx={{ fontWeight: "bold" }}>Honeymoon:</Typography>
              </div>
              <div className="item">San Juan, WA</div>
              <div className="item">
                <Typography sx={{ fontWeight: "bold" }}>Pets:</Typography>
              </div>
              <div className="item">
                <Typography>Boots & Diamond</Typography>
              </div>
              <div className="item">
                <Typography sx={{ fontWeight: "bold" }}>Children:</Typography>
              </div>
              <div className="item">
                <Typography>Someday!</Typography>
              </div>
              <div className="item">
                <Typography sx={{ fontWeight: "bold" }}>TV:</Typography>
              </div>
              <div className="item">
                <Typography>This Is Us</Typography>
                <Typography>The Resident</Typography>
                <Typography>Lego Masters</Typography>
              </div>
              <div className="item">
                <Typography sx={{ fontWeight: "bold" }}>Movies:</Typography>
              </div>
              <div className="item">
                <Typography>Bridesmaids</Typography>
                <Typography>Fast & The Furious</Typography>
                <Typography>She&apos;s The Man</Typography>
              </div>
            </div>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
