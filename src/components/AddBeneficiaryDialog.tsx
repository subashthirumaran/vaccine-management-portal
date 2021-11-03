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

interface AddBeneficiaryDialogProps {
  isOpen: boolean;
  onClose(): void;
}

const AddBeneficiaryDialog: FC<AddBeneficiaryDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const { control, handleSubmit } = useForm();
  const handleClose = onClose;

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth={true} maxWidth="md">
      <DialogTitle>Add Benficiary</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
              >
                <Controller
                  name="first"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        {...field}
                        label="First Name"
                        sx={{ width: "265px" }}
                      />
                    </Box>
                  )}
                />
                <Controller
                  name="middle"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        {...field}
                        label="Middle Name"
                        sx={{ width: "265px" }}
                      />
                    </Box>
                  )}
                />
                <Controller
                  name="last"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        {...field}
                        label="Last Name"
                        sx={{ width: "265px" }}
                      />
                    </Box>
                  )}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Controller
                  name="dob"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Box sx={{ mb: 3 }}>
                      <DesktopDatePicker
                        label="Date of Birth"
                        inputFormat="dd/MM/yyyy"
                        {...field}
                        renderInput={(params) => (
                          <TextField {...params} sx={{ width: "400px" }} />
                        )}
                      />
                    </Box>
                  )}
                />
                <Controller
                  name="gender"
                  control={control}
                  defaultValue="male"
                  render={({ field }) => (
                    <Box sx={{ mb: 3 }}>
                      <FormControl>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select
                          labelId="gender-label"
                          id="gender"
                          label="gender"
                          {...field}
                          sx={{ width: "400px" }}
                        >
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  )}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Controller
                  name="idType"
                  control={control}
                  defaultValue="male"
                  render={({ field }) => (
                    <Box sx={{ mb: 3 }}>
                      <FormControl>
                        <InputLabel id="idType-label">ID Type</InputLabel>
                        <Select
                          labelId="idType-label"
                          id="idType"
                          label="ID Type"
                          {...field}
                          sx={{ width: "400px" }}
                        >
                          <MenuItem value="aadhar">Aadhar</MenuItem>
                          <MenuItem value="passport">Passport</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  )}
                />
                <Controller
                  name="idNumber"
                  control={control}
                  defaultValue="aadhar"
                  render={({ field }) => (
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        {...field}
                        label="ID Number"
                        sx={{ width: "400px" }}
                      />
                    </Box>
                  )}
                />
              </Box>

              <Controller
                name="addressLine1"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      {...field}
                      label="Address Line 1"
                      sx={{ width: "100%" }}
                    />
                  </Box>
                )}
              />
              <Controller
                name="addressLine2"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      {...field}
                      label="Address Line 2"
                      sx={{ width: "100%" }}
                    />
                  </Box>
                )}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        {...field}
                        label="City"
                        sx={{ width: "400px" }}
                      />
                    </Box>
                  )}
                />
                <Controller
                  name="state"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        {...field}
                        label="State"
                        sx={{ width: "400px" }}
                      />
                    </Box>
                  )}
                />
              </Box>
            </form>
          </LocalizationProvider>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBeneficiaryDialog;
