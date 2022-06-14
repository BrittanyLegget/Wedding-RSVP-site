import clientPromise from "../lib/mongodb";
import {
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function BasicTable({ guests }) {
  return (
    <Container maxWidth="md">
      <Box sx={{ minWidth: 275, paddingTop: 4, paddingBottom: 5 }}>
        <TableContainer component={Paper} paddingTop={20}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Code</TableCell>
                <TableCell align="right">event</TableCell>
                <TableCell align="right">guest</TableCell>
                <TableCell align="right">Attending</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guests &&
                guests.map((g, index) => {
                  return (
                    <>
                      {g.guests.map((e, idx) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {g.code}
                          </TableCell>
                          <TableCell align="right">{g.event}</TableCell>

                          <TableCell align="right">{e.guest}</TableCell>
                          <TableCell align="right">
                            {e.attending == 1 ? (
                              <CheckCircleIcon sx={{ color: "green" }} />
                            ) : (
                              <>
                                {e.attending == 0 ? (
                                  <RemoveCircleIcon sx={{ color: "red" }} />
                                ) : (
                                  <></>
                                )}
                              </>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("Wedding");

  //Get code from url parameter
  const query = context.query.code_id;

  let guests = await db.collection("RSVP").find().toArray();
  guests = JSON.parse(JSON.stringify(guests));
  console.log(guests);
  return {
    props: { guests },
  };
}
