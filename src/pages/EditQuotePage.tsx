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

  useEffect(() => {
    getQuote(quoteId).then((result) => {
      if (!result.success) {
        // TODO: error
        return;
      }
      setQuote(result.data.quote);
      setIsLoading(false);
    });
  }, [quoteId]);

  const history = useHistory();
  const handleSubmit = async (authorName: string, content: string) => {
    await editQuote(quoteId, content, authorName);
    // TODO: notification?
    history.push("/");
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
