import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";

interface BookVaccineDialogProps {
  isOpen: boolean;
  onClose(): void;
}

const BookVaccineDialog: FC<BookVaccineDialogProps> = ({ isOpen, onClose }) => {
  const handleClose = onClose;

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Book Vaccine Appointment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookVaccineDialog;
