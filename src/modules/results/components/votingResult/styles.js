import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  resultItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(0.5, 0),
  },
  box: {
    display: "flex",
    alignItems: "center",
  },
  linearProgressContainer: {
    width: "100%",
    margin: theme.spacing(0, 2),
  },
  linearProgress: {
    width: theme.spacing(50),
    height: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
  },
}));
