import { Box, makeStyles } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import EditQuotePage from "./pages/EditQuotePage";
import NewQuotePage from "./pages/NewQuotePage";
import QuotesPage from "./pages/QuotesPage";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: theme.spacing(8),
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <SnackbarProvider maxSnack={5}>
      <Router basename={process.env.REACT_APP_BASENAME}>
        <NavBar />
        <Box className={classes.body}>
          <Switch>
            <Route exact path="/">
              <QuotesPage />
            </Route>
            <Route exact path="/new">
              <NewQuotePage />
            </Route>
            <Route exact path="/edit/:quoteId">
              <EditQuotePage />
            </Route>
          </Switch>
        </Box>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
