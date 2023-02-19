import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { DataContext } from "../../dataContext";
import { filter } from "../../utils/filter";

const Filter = ({ setData }) => {
  const [price, setPrice] = React.useState(0);
  const [property, setProperty] = React.useState(0);
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState(moment());
  var data = React.useContext(DataContext);

  React.useEffect(() => {
    console.log("Price: ", price);
    console.log("Property: ", property);
    console.log("Location: ", location);
    console.log("Date: ", moment(date).format("ll"));
    // console.log(date.diff(moment("02-23-2023"), "days"));
    console.log(moment(date).unix());
  });

  const handleSubmit = () => {
    const filters = {
      price: price,
      property: property,
      location: location,
      date: date,
    };
    const result = filter(data, filters);
    console.log("Result: FILTERED: ", result);
    if (result) {
      setData(result);
    }
  };

  return (
    <div className="flex flex-row h-20 w-212 xl:w-288 mt-8 items-center bg-white rounded-xl justify-between p-6 shadow-md">
      <div>
        <TextField
          sx={{ mr: 1, minWidth: 120 }}
          id="outlined"
          label="Location"
          size="small"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="focus:border-[#ac3e3e]"
        />
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            disablePast
            label="Move-in Date"
            value={moment(date).format("ll")}
            onChange={(e) => {
              setDate(moment(e));
            }}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
        </LocalizationProvider>
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="price">Price</InputLabel>
          <Select
            labelId="price"
            id="price"
            value={price}
            label="Price"
            onChange={(e) => setPrice(e.target.value)}
          >
            <MenuItem value={0}>None</MenuItem>
            <MenuItem value={1}>$500-$1000</MenuItem>
            <MenuItem value={2}>$1001-$1500</MenuItem>
            <MenuItem value={3}>$1501-$2000</MenuItem>
            <MenuItem value={4}>$2000+</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="propertyType">Property Type</InputLabel>
          <Select
            labelId="propertyType"
            id="propertyType"
            value={property}
            label="Property Type"
            onChange={(e) => setProperty(e.target.value)}
          >
            <MenuItem value={0}>None</MenuItem>
            <MenuItem value={1}>Apartments</MenuItem>
            <MenuItem value={2}>Bungalow</MenuItem>
            <MenuItem value={3}>Houses</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        className="bg-[#6800d9] hover:bg-[#5b00bc]"
        onClick={() => handleSubmit()}
      >
        Search
      </Button>
    </div>
  );
};

export default Filter;
