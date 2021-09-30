import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.spacing(1.5),
    backgroundColor: "#fcf6e8",
    "&:hover": {
      backgroundColor: "#f5efce",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2.5),
  },
  media: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: theme.spacing(21),
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1.5),
  },
  image: {
    width: "90%",
    height: "90%",
  },
  voteButton: {
    backgroundColor: "#0d8ebd",
    "&:hover": {
      backgroundColor: "#20c3e8",
    },
  },
}));
