import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { createQuote } from "../api/quotes";
import { QuoteForm } from "../components/QuoteForm";

const NewQuotePage: React.FC = () => {
  const history = useHistory();
  const handleSubmit = async (authorName: string, content: string) => {
    await createQuote(content, authorName);
    // TODO: notification?
    history.push("/");
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
