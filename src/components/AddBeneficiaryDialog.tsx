import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";

interface AddBeneficiaryDialogProps {
  isOpen: boolean;
  onClose(): void;
}

const AddBeneficiaryDialog: FC<AddBeneficiaryDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const handleClose = onClose;

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add Benficiary</DialogTitle>
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

export default AddBeneficiaryDialog;
