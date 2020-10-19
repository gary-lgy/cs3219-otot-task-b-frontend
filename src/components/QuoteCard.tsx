import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    margin: theme.spacing(2),
  },
}));

export const QuoteCard: React.FC<{ body: string; author: string }> = ({
  body,
  author,
}) => {
  const classes = useStyles();

  return (
    <Card raised>
      <CardContent className={classes.cardContent}>
        <Typography variant="h2" gutterBottom>
          {`${body}`}
        </Typography>
        <Typography
          color="textSecondary"
          align="right"
        >{`- ${author}`}</Typography>
      </CardContent>
    </Card>
  );
};
