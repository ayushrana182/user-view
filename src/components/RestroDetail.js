import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import './componentStyles.css'

function RestroDetail() {
    return (
        <div className = "restro-container" style = {{marginTop: 0}}>
            <h4>Restaurent name</h4>
            <FormControl fullWidth
            //  className={classes.margin} 
             variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Restaurent Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <br/>
        <br/>
        <div className="align-center">
            <textarea name="restro-description" id="restro-description" placeholder = "Describe your restaurent"cols="100" rows="4"></textarea>
        </div>
        <br/>
        <br/>
        <div className="align-center btn save-btn">
            <button className="btn save-btn">Save and Proceed &#8680;</button>
        </div>
        </div>
        
    )
}

export default RestroDetail

 