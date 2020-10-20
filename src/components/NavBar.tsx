import {
  AppBar,
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

const useStyles = makeStyles((theme) => ({
  fillerDiv: {
    flexGrow: 1,
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  quoteIcon: {
    marginRight: theme.spacing(1),
  },
}));

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
    <>
      <AppBar>
        <Toolbar>
          <Button
            color="inherit"
            onClick={gotoHomePage}
            disableRipple
            disableFocusRipple
            disableElevation
            className={classes.button}
          >
            <QuoteIcon className={classes.quoteIcon} />
            <Typography variant="h6">Quotes</Typography>
          </Button>
          <div className={classes.fillerDiv}></div>
          <IconButton color="inherit" onClick={gotoNewQuotePage}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default withRouter(NavBar);
