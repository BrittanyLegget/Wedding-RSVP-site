import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import MuiNextLink from "./MUINextLink";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "./BackToTop";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: `Home`, path: `/` },
  { title: `RSVP`, path: `/findCode` },
  { title: `Registry`, path: `/registry` },
  { title: `Photos`, path: `/photos` },
];

export default function HeaderBar() {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Container
              maxWidth="xlg"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink
                  activeClassName="active"
                  href="/"
                  sx={{
                    color: (theme) => theme.palette.common.white,
                  }}
                >
                  <PeopleAlt fontSize="large" />
                </MuiNextLink>
                <MuiNextLink
                  activeClassName="active"
                  href="/"
                  sx={{
                    color: (theme) => theme.palette.common.white,
                  }}
                >
                  <b>Wedding Space</b>
                </MuiNextLink>
              </IconButton>

              <Navbar navLinks={navLinks} />

              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
}
