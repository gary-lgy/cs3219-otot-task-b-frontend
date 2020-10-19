import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

export const QuoteCard: React.FC<{ body: string; author: string }> = ({
  body,
  author,
}) => {
  return (
    <Card>
      <CardContent>
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
