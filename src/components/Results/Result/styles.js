import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  resultItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px 0",
  },
  box: {
    display: "flex",
    alignItems: "center",
  },
  linearProgressContainer: {
    width: "100%",
    margin: "0 16px",
  },
  linearProgress: {
    width: "400px",
    height: "15px",
    borderRadius: "5px",
  },
});
