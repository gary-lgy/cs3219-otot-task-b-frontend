import {
  AppBar,
  Box,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

const NavBar: React.FC = () => {
  const classes = useStyles();

  let history = useHistory();
  const gotoNewQuotePage = () => {
    history.push("/new");
  };

  const gotoHomePage = () => {
    history.push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box className={classes.title}>
          <Button color="inherit" onClick={gotoHomePage}>
            <Typography variant="h6">Quotes</Typography>
          </Button>
        </Box>
        <IconButton color="inherit" onClick={gotoNewQuotePage}>
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(NavBar);
