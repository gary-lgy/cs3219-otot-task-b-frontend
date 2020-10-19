import { useSnackbar } from "notistack";
import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { createQuote } from "../api/quotes";
import { QuoteForm } from "../components/QuoteForm";

const NewQuotePage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();
  const handleSubmit = async (authorName: string, content: string) => {
    try {
      await createQuote(content, authorName);
      history.push("/");
      enqueueSnackbar("New quote created", { variant: "success" });
    } catch (err) {
      enqueueSnackbar(`Something went wrong ${err.message}`, {
        variant: "error",
      });
    }
  };

  return (
    <QuoteForm
      handleSubmit={handleSubmit}
      header="Create new quote"
      action="Create"
    />
  );
};

export default withRouter(NewQuotePage);
