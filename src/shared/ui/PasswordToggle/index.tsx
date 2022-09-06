import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { MouseEventHandler } from "react";

interface IPasswordToggleProps {
  togglePassword: MouseEventHandler<HTMLButtonElement>;
  isPasswordVisible: boolean;
}

export const PasswordToggle = ({
  togglePassword,
  isPasswordVisible,
}: IPasswordToggleProps) => {
  return (
    <InputAdornment position="end">
      <IconButton
        onClick={togglePassword}
        aria-label="toggle password visibility"
      >
        {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
};
