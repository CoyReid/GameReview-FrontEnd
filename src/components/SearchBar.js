import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import { TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "100px"
    },
  }));


const SearchBar = () => {
    const classes = useStyles();

    return (
        <div className="search">
            <TextField className={classes.root}
        id="outlined-secondary"
        label="Outlined secondary"
        variant="outlined"
        color="secondary"
      />
             <Select className="searchi"
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value="10"
        //   onChange={handleChange}
          input={0}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Select className="searchi"
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value="10"
        //   onChange={handleChange}
          input={0}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </div>
    )
}

export default SearchBar
