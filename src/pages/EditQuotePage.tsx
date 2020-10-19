import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import { editQuote, getQuote } from "../api/quotes";
import { QuoteForm } from "../components/QuoteForm";
import { CenteredSpinner } from "../components/Spinner";
import { Quote } from "../types";

type Props = RouteComponentProps<{ quoteId: string }>;

const EditQuotePage: React.FC<Props> = (props) => {
  const quoteId = props.match.params.quoteId;

  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getQuote(quoteId).then((result) => {
      if (!result.success) {
        enqueueSnackbar(`Something went wrong: ${result.message}`, {
          variant: "error",
        });
        return;
      }
      setQuote(result.data.quote);
      setIsLoading(false);
    });
  }, [enqueueSnackbar, quoteId]);

  const history = useHistory();
  const handleSubmit = async (authorName: string, content: string) => {
    try {
      await editQuote(quoteId, content, authorName);
      history.push("/");
      enqueueSnackbar("Quote updated", { variant: "success" });
    } catch (err) {
      enqueueSnackbar(`Something went wrong: ${err.message}`, {
        variant: "error",
      });
    }
  };

  if (quote === null || isLoading) {
    return <CenteredSpinner text="Loading..." />;
  }

  return (
    <QuoteForm
      handleSubmit={handleSubmit}
      header="Edit quote"
      action="Edit"
      initialAuthorName={quote.authorName}
      initialContent={quote.content}
    />
  );
};

export default withRouter(EditQuotePage);
