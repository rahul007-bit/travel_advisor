import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles";

const List = ({ places, childClicked, isLoading }) => {
  const classes = useStyles();
  const [type, setTypes] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [elRefs, setRefs] = useState([]);

  useEffect(() => {
    setRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions aroud You
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size={5} />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>type</InputLabel>
            <Select value={type} onChange={(e) => setTypes(e.target.value)}>
              <MenuItem value="restaurants">restaurants</MenuItem>
              <MenuItem value="Hotels">Hotels</MenuItem>
              <MenuItem value="Attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>all</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails
                  refProp={elRefs[i]}
                  place={place}
                  selected={Number(childClicked) === i}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
