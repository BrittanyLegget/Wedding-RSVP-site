import { Card, CardContent, Typography, Box, Container } from "@mui/material";

export default function Registry() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ minWidth: 275, paddingTop: 5 }}>
        <Card variant="outlined">
          <CardContent variant="outlined">
            <Typography>
              This is where the registry page goes. The registry can either be
              embedded or linked out to the registry site.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
