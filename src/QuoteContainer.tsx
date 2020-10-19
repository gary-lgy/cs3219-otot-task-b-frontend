import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { QuoteCard } from "./QuoteCard";
import { Quote } from "./types";

const useStyles = makeStyles((theme) => ({
  quote: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const QuoteContainer: React.FC = () => {
  const classes = useStyles();

  const [quote, setQuote] = useState<Quote | null>({
    authorName: "Linus Torvalds",
    content: "Talk is cheap, show me the code",
  });

  if (quote === null) {
    return <></>;
  }

  return (
    <div className={classes.quote}>
      <QuoteCard author={quote.authorName} body={quote.content} />
    </div>
  );
};
