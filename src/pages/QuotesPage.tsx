import { Box, makeStyles, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { deleteQuote, getQuotes } from "../api/quotes";
import QuoteCard from "../components/QuoteCard";
import { CenteredSpinner } from "../components/Spinner";
import { Quote } from "../types";

const useStyles = makeStyles((theme) => ({
  quotesBox: {
    width: "80%",
    margin: "0 auto",
    "& > *": {
      marginBottom: theme.spacing(4),
    },
  },
  centerBox: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const QuotesPage: React.FC = () => {
  const classes = useStyles();

  const [quotes, setQuotes] = useState<Quote[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const handleEdit = (id: number | string) => {
    history.push(`/edit/${id}`);
  };
  const handleDelete = async (id: number | string) => {
    try {
      await deleteQuote(id);
      enqueueSnackbar("Quote deleted");
      // Force the page to refresh
      setIsLoading(true);
      return true;
    } catch (err) {
      enqueueSnackbar(`Something went wrong: ${err.message}`, {
        variant: "error",
      });
      return false;
    }
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    getQuotes().then((result) => {
      setIsLoading(false);
      if (!result.success) {
        enqueueSnackbar(`Something went wrong: ${result.message}`, {
          variant: "error",
        });
        return;
      }
      setQuotes(result.data.quotes);
    });
  }, [enqueueSnackbar, isLoading, setIsLoading]);

  if (quotes === null || isLoading) {
    return <CenteredSpinner text="Loading..." />;
  }

  if (!quotes.length) {
    return (
      <Box className={classes.centerBox}>
        <Typography variant="h4" align="center">
          No quotes yet.
        </Typography>
        <Link to="/new">
          <Typography variant="h5" align="center">
            Create one
          </Typography>
        </Link>
      </Box>
    );
  }

  return (
    <Box className={classes.quotesBox}>
      {quotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          quote={quote}
          handleEdit={() => handleEdit(quote.id)}
          handleDelete={() => handleDelete(quote.id)}
        />
      ))}
    </Box>
  );
};

export default withRouter(QuotesPage);
