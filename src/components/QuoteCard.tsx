import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Quote } from "../types";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    margin: theme.spacing(2),
  },
}));

type Props = RouteComponentProps<void> & {
  quote: Quote;
  handleEdit: () => void;
  handleDelete: () => void;
};

const QuoteCard: React.FC<Props> = ({ quote, handleEdit, handleDelete }) => {
  const { authorName, content } = quote;
  const classes = useStyles();

  return (
    <Card raised>
      <CardContent className={classes.cardContent}>
        <Typography variant="h2" gutterBottom>
          {`${content}`}
        </Typography>
        <Typography
          color="textSecondary"
          align="right"
        >{`- ${authorName}`}</Typography>
      </CardContent>

      <CardActions>
        <IconButton onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withRouter(QuoteCard);
