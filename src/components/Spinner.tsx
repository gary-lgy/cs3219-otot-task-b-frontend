import {
  Box,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  spinner: {
    marginBottom: theme.spacing(2),
  },
  centerBox: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

type Props = {
  text: string;
};

export const Spinner: React.FC<Props> = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.spinner} />
      <Typography variant="h5">{text}</Typography>
    </div>
  );
};

export const CenteredSpinner: React.FC<Props> = ({ text }) => {
  const classes = useStyles();
  return (
    <Box className={classes.centerBox}>
      <Spinner text={text} />
    </Box>
  );
};
