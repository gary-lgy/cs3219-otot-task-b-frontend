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
import QuoteIcon from "@material-ui/icons/FormatQuote";
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
        <QuoteIcon />
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
