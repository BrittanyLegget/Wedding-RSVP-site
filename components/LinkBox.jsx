import { Box, Stack, Card, CardContent } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import RedeemIcon from "@mui/icons-material/Redeem";
import PhotoIcon from "@mui/icons-material/Photo";
import MuiNextLink from "./MUINextLink";

export default function LinkBoxCard() {
  return (
    <Box sx={{ width: "100%" }}>
      <Card variant="outlined">
        <CardContent
          variant="outlined"
          style={{ backgroundColor: "#0F5044", color: "white" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            paddingLeft={3}
            paddingRight={3}
            paddingTop={2}
          >
            <MuiNextLink
              activeClassName="active"
              href="/findCode"
              sx={{ color: (theme) => theme.palette.common.white }}
            >
              <ListItemIcon>
                <MailIcon
                  sx={{ color: (theme) => theme.palette.common.white }}
                  paddingLeft={30}
                />
              </ListItemIcon>

              <ListItemText
                primary="RSVP"
                sx={{ color: (theme) => theme.palette.common.white }}
              />
            </MuiNextLink>

            <MuiNextLink
              activeClassName="active"
              href="/registry"
              target="_blank"
              sx={{ color: (theme) => theme.palette.common.white }}
            >
              <ListItemIcon>
                <RedeemIcon
                  sx={{ color: (theme) => theme.palette.common.white }}
                />
              </ListItemIcon>

              <ListItemText
                primary="Registry"
                sx={{ color: (theme) => theme.palette.common.white }}
              />
            </MuiNextLink>
            <MuiNextLink
              activeClassName="active"
              href="/photos"
              sx={{ color: (theme) => theme.palette.common.white }}
            >
              <ListItemIcon>
                <PhotoIcon
                  sx={{ color: (theme) => theme.palette.common.white }}
                  m={10}
                />
              </ListItemIcon>

              <ListItemText
                primary="Photos"
                sx={{ color: (theme) => theme.palette.common.white }}
              />
            </MuiNextLink>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
