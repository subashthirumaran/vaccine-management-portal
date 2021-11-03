import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

interface BookVaccineDialogProps {
  isOpen: boolean;
  onClose(): void;
}

const BookVaccineDialog: FC<BookVaccineDialogProps> = ({ isOpen, onClose }) => {
  const { control } = useForm();
  const handleClose = onClose;

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>Book Vaccine Appointment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form>
              <Controller
                name="Date"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Box sx={{ mb: 3, mt: 3 }}>
                    <DesktopDatePicker
                      label="Date"
                      inputFormat="dd/MM/yyyy"
                      {...field}
                      renderInput={(params) => (
                        <TextField {...params} sx={{ width: "100%" }} />
                      )}
                    />
                  </Box>
                )}
              />
              <Controller
                name="beneficiary"
                control={control}
                defaultValue="subash"
                render={({ field }) => (
                  <Box sx={{ mb: 3 }}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="beneficiary-label">
                        Beneficiary
                      </InputLabel>
                      <Select
                        labelId="beneficiary-label"
                        id="beneficiary"
                        label="beneficiary"
                        {...field}
                        sx={{ width: "100%" }}
                      >
                        <MenuItem value="subash">Subash Chandran T</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )}
              />

              <Controller
                name="vaccine"
                control={control}
                defaultValue="covaxin"
                render={({ field }) => (
                  <Box sx={{ mb: 3 }}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="vaccine-label">Vaccine</InputLabel>
                      <Select
                        labelId="vaccine-label"
                        id="vaccine"
                        label="Vaccine"
                        {...field}
                        sx={{ width: "100%" }}
                      >
                        <MenuItem value="covaxin">Covaxin</MenuItem>
                        <MenuItem value="Covishield">Covishield</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )}
              />

              <Controller
                name="dose"
                control={control}
                defaultValue="first"
                render={({ field }) => (
                  <Box sx={{ mb: 3 }}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="dose-label">Dose</InputLabel>
                      <Select
                        labelId="dose-label"
                        id="dose"
                        label="dose"
                        {...field}
                        sx={{ width: "100%" }}
                      >
                        <MenuItem value="first">1st</MenuItem>
                        <MenuItem value="second">2nd</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )}
              />
              <Controller
                name="vaccineCenter"
                control={control}
                defaultValue="first"
                render={({ field }) => (
                  <Box sx={{ mb: 3 }}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="vaccineCenter-label">
                        Vaccine Center
                      </InputLabel>
                      <Select
                        labelId="vaccineCenter-label"
                        id="vaccineCenter"
                        label="Vaccine Center"
                        {...field}
                        sx={{ width: "100%" }}
                      >
                        <MenuItem value="pilani">Pilani</MenuItem>
                        <MenuItem value="goa">Goa</MenuItem>
                        <MenuItem value="hyderabad">Hyderabad</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )}
              />

              <Controller
                name="vaccineCenterAddress"
                control={control}
                defaultValue="BITS Campus, Vidhya Vihar, Pilani"
                render={({ field }) => (
                  <Box>
                    <TextField
                      {...field}
                      label="Address"
                      sx={{ width: "100%" }}
                    />
                  </Box>
                )}
              />
            </form>
          </LocalizationProvider>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ mb: 2 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Book Appointment</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookVaccineDialog;
