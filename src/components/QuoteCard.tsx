import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import QuoteIcon from "@material-ui/icons/FormatQuote";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
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
  handleDelete: () => Promise<boolean>;
};

const QuoteCard: React.FC<Props> = ({ quote, handleEdit, handleDelete }) => {
  const { authorName, content } = quote;
  const classes = useStyles();

  const [deleting, setDeleting] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onDelete = async () => {
    setDeleting(true);
    const key = enqueueSnackbar("Deleting...");

    const deleteSuccessful = await handleDelete();

    closeSnackbar(key);
    if (!deleteSuccessful) {
      setDeleting(false);
    }
  };

  return (
    <Card raised>
      <Box>
        <QuoteIcon fontSize="large" />
      </Box>
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
        <IconButton onClick={onDelete} disabled={deleting}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withRouter(QuoteCard);
