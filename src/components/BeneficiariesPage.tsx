import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const BeneficiariesPage = () => {
  const dispatch = useDispatch();
  const {
    uiControls: { bookVaccineDialog, addBeneficiaryDialog },
  } = useSelector((state: RootState) => state);

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
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
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
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
