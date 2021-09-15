import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "100px",
    backgroundColor: "#4EE081",
    marginLeft: "20px",
  },
}));

const SearchBar = ({
  search,
  onSearchChange,
  onFirstFilterChange,
  onSecondFilterChange,
  firstFilter,
  secondFilter,
  genres,
  platforms,
}) => {
  const classes = useStyles();

  function handleSearchChange(e) {
    onSearchChange(e.target.value);
  }

  function handleFirstFilterChange(e) {
    onFirstFilterChange(e.target.value);
  }

  function handleSecondFilterChange(e) {
    onSecondFilterChange(e.target.value);
  }

  return (
    <div className="search">
      <TextField
        className={classes.root}
        id="outlined-secondary"
        label="Search..."
        variant="filled"
        color="primary"
        value={search}
        onChange={handleSearchChange}
      />
      <Select
        className={classes.root}
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        onChange={handleFirstFilterChange}
        value={firstFilter}
      >
        {genres.map((genre) => (
          <MenuItem value={genre.toLowerCase()} key={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>
      <Select
        className={classes.root}
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        onChange={handleSecondFilterChange}
        value={secondFilter}
      >
        {platforms.map((platform) => (
          <MenuItem value={platform.toLowerCase()} key={platform}>
            {platform}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SearchBar;
