import { Container, Stack } from "@mui/material";
import AboutUsCard from "../components/AboutUs";
import Countdown from "../components/Countdown";
import WeddingPartyCard from "../components/WeddingParty";
import Pets from "../components/Pets";
import DetailsCard from "../components/Details";
import LinkBoxCard from "../components/LinkBox";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Countdown />
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1 }}
        paddingTop={1}
      >
        <Stack
          direction="column"
          spacing={{ xs: 1 }}
          sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}
        >
          <LinkBoxCard />
          <DetailsCard />
          <Pets />
        </Stack>
        <Stack
          direction="column"
          spacing={{ xs: 1 }}
          sx={{ width: { xs: "100%", sm: "100%", md: "60%" } }}
        >
          <WeddingPartyCard />
          <AboutUsCard />
        </Stack>
      </Stack>
    </Container>
  );
}
