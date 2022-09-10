import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
} from "@mui/material";
import HpLoadingButton from "../../../shared/ui/HPLoadingButton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  modalsTitle: {
    fontSize: "18px!important",
    marginBottom: "15px!important",
    backgroundColor: "#3c4858",
    color: "white",
    fontWeight: "normal!important",
  },
}));

export interface IConfirmDialogDefaultValues {
  open: boolean;
  loading?: boolean;
  data: {
    id: number | null;
    active?: boolean;
    email?: string | null;
    name?: string | null;
    status?: null | string;
    additionalProps?: any;
  };
}

interface IConfirmDialogProps {
  title?: string | null;
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  fullWidth?: boolean;
  onAgree: () => void;
  children: JSX.Element | string;
  maxWidth?: any;
}

const ConfirmDialog = ({
  title,
  isOpen,
  onClose,
  isLoading = false,
  onAgree,
  children,
  fullWidth = true,
  maxWidth = "sm",
}: IConfirmDialogProps): JSX.Element => {
  const handleClose = () => {
    if (!isLoading) {
      onClose();
    }
  };
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      onClose={() => (isLoading ? handleClose() : null)}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      TransitionComponent={Grow}
    >
      <DialogTitle id="alert-dialog-title" className={classes.modalsTitle}>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {onAgree && (
          <HpLoadingButton
            isLoading={isLoading}
            color="primary"
            variant="outlined"
            onClick={onAgree}
          >
            Yes
          </HpLoadingButton>
        )}
        {onClose && (
          <Button
            disabled={isLoading}
            color="primary"
            variant="contained"
            onClick={onClose}
          >
            No
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
