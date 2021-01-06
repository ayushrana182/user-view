import React from 'react';
import { useState } from 'react';
import 'react-dropdown/style.css';
import { MenuItem } from '@material-ui/core';
import { FormControl, InputLabel, Select } from '@material-ui/core';

const DropdownMenu = () => {
  const [values, setValues] = useState(['1', '2', '3', '4', '5', '6']);
  const [selected, setSelected] = useState('1');

  function handleChange(event) {
    setSelected(event.target.value);
  }
  return (
    <FormControl>
      <Select
        value={selected}
        onChange={handleChange}
        inputProps={{
          name: 'Quantity',
        }}
      >
        {values.map((value, index) => {
          return (
            <MenuItem value={value} key={index}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropdownMenu;
