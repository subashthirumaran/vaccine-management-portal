import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  Link,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  setAddBeneficiaryDialog,
  setBookVaccineDialog,
} from "../store/uiControls.slice";
import AddBeneficiaryDialog from "./AddBeneficiaryDialog";
import BookVaccineDialog from "./BookVaccineDialog";
import { PageWrapper } from "./styles";

function createData(
  name: string,
  dob: string,
  gender: string,
  idNumber: String,
  address: string,
  appointment1: string,
  appointment2: string
) {
  return {
    name,
    dob,
    gender,
    idNumber,
    address,
    appointment1,
    appointment2,
  };
}

const BeneficiariesPage = () => {
  const dispatch = useDispatch();
  const {
    uiControls: { bookVaccineDialog, addBeneficiaryDialog },
  } = useSelector((state: RootState) => state);

  const rows: any = [
    createData(
      "Subash Chandran T",
      "02-11-1993",
      "Male",
      "123456789112",
      "7, 3rd Cross, Vidhya Vihar, Pilani, Rajasthan",
      "Booked",
      "Not Booked"
    ),
  ];

  return (
    <PageWrapper>
      <Box sx={{ p: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ fontSize: 32, fontWeight: 500 }}>Beneficiaries</Box>
          <Box>
            <Button
              variant="outlined"
              sx={{ mr: 4 }}
              size="large"
              onClick={() => dispatch(setAddBeneficiaryDialog(true))}
            >
              Add Beneficiary
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => dispatch(setBookVaccineDialog(true))}
            >
              Book Vaccine Appointment
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: 9 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Date of Birth</TableCell>
                  <TableCell align="right">Gender</TableCell>
                  <TableCell align="right">ID Number</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">First Dose</TableCell>
                  <TableCell align="right">Second Dose</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.dob}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">{row.idNumber}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">
                      <Tooltip
                        leaveDelay={3000}
                        title={
                          <Box sx={{ px: 3, py: 2 }}>
                            <Box sx={{ fontSize: 16, fontWeight: "bold" }}>
                              Covishield{" "}
                              {/* <Box
                                sx={{
                                  display: "inline",
                                  fontStyle: "italic",
                                  fontSize: 12,
                                }}
                              >
                                1st Dose
                              </Box> */}
                            </Box>
                            <Box sx={{ mt: 1 }}>
                              03 November 2021, 9 AM - 6 PM
                            </Box>
                            <Box sx={{ mt: 1 }}>
                              BITS Campus, Vidya Vihar, Pilani
                            </Box>
                          </Box>
                        }
                      >
                        <Button> {row.appointment1}</Button>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="right">{row.appointment2}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <AddBeneficiaryDialog
        isOpen={addBeneficiaryDialog}
        onClose={() => dispatch(setAddBeneficiaryDialog(false))}
      />
      <BookVaccineDialog
        isOpen={bookVaccineDialog}
        onClose={() => dispatch(setBookVaccineDialog(false))}
      />
    </PageWrapper>
  );
};

export default BeneficiariesPage;
