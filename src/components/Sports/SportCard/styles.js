import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "#fcf6e8",
    "&:hover": {
      backgroundColor: "#f7e9cb",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  },
  img: {
    objectFit: "cover",
  },
  media: {
    /*display: "flex",
    justifyContent: "center",*/
    paddingTop: '56.25%',
    /*padding: "10px",*/
    border: "1.5px solid gray",
    borderRadius: "10px",
    objectFit: "cover",
  },
});
