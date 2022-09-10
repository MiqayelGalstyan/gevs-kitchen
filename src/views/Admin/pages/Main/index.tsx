import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const AdminMain = (): JSX.Element => {
  return (
    <React.Fragment>
      <Box
        p={2}
        component={Paper}
        marginTop={3}
        marginBottom={2}
        minHeight={350}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">Welcome, Admin</Typography>
      </Box>
    </React.Fragment>
  );
};

export default AdminMain;
