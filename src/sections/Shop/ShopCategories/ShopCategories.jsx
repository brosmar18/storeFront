import * as React from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { gameCategories } from "../../../constants";
import Select from "@mui/material/Select";
import "./ShopCategories.scss";

const ShopCategories = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className="shopCategories">
      <FormControl fullWidth>
        <InputLabel>Categories</InputLabel>
        <Select value={age} label="Category" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {gameCategories.map((item) => (
            <MenuItem key={`game-categories-${item.id}`}>
              {item.category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="shopCategories__products"></div>
    </section>
  );
};

export default ShopCategories;
