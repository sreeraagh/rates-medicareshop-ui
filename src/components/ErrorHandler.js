import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Fallback = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <Grid container>
        <Stack>
          <Typography variant="h3" color="primary">
            OOPS!
          </Typography>
          <Typography variant="h6" color="text.primary">
            Something went wrong
          </Typography>
        </Stack>
        <Button color="secondary" variant="contained" onClick={handleClose}>
          Okay
        </Button>
      </Grid>
    </Dialog>
  );
};
