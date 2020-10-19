import {
  Box,
  Button,
  Card,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: theme.spacing(2),
  },
  header: {
    textAlign: "center",
  },
  form: {
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

export const QuoteForm: React.FC<{
  header: string;
  action: string;
  initialAuthorName?: string;
  initialContent?: string;
  handleSubmit: (authorName: string, content: string) => void;
}> = ({ handleSubmit, header, action, initialAuthorName, initialContent }) => {
  const classes = useStyles();

  const [authorName, setAuthorName] = useState(initialAuthorName || "");
  const [content, setContent] = useState(initialContent || "");

  return (
    <Card className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        {header}
      </Typography>

      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          label="Author name"
          required
          fullWidth
          onChange={(event) => setAuthorName(event.target.value)}
          value={authorName}
        />
        <TextField
          label="Body"
          multiline
          fullWidth
          required
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSubmit(authorName, content)}
            className={classes.button}
          >
            {action}
          </Button>
        </Box>
      </form>
    </Card>
  );
};
