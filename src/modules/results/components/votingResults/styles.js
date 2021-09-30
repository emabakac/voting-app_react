import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(4, 0),
  },
  resultsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));
