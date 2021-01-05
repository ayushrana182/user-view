import React from 'react'

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ScheduleIcon from '@material-ui/icons/Schedule';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const MenuItems = [
    {
        img : 'https://www.simplemost.com/wp-content/uploads/2016/03/AdobeStock_60912167-750x500.jpeg',
        itemName : 'Pasta',
        Price: 200,
        CookTime: '30 min'
    },
    {
        img : 'https://www.simplemost.com/wp-content/uploads/2016/03/AdobeStock_60912167-750x500.jpeg',
        itemName : 'Chowmean',
        Price: 130,
        CookTime: '30 min'
    },
    {
        img : 'https://www.simplemost.com/wp-content/uploads/2016/03/AdobeStock_60912167-750x500.jpeg',
        itemName : 'MoMo',
        Price: 170,
        CookTime: '30 min'
    },
    
]


const MenuCard = () => {
    
    return (
            <div className="restro-container">
            <table id="menu_items">
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Time <strong> <ScheduleIcon /></strong> </th>
                </tr>
                
            {MenuItems.map((MenuItems) => {
                const {img, itemName, Price, CookTime} = MenuItems;
                return(
                    <tr id="food_list">
                        <td >
                            <div className="food-Item">
                                <img src={img} alt=""/>
                                <p>{itemName}</p>
                            </div>
                        </td>
                        <td>
                            <p>{Price}</p>
                        </td>
                        <td>
                            <p>{CookTime}</p>
                        </td>
                        <div id="closebutton"><button>x</button></div>
                    </tr>
                )
            })}
            </table>

            <div className="menu-entry">
                
            <form noValidate autoComplete="off" className = "Menu-upload-form">
                <TextField id="outlined-basic" label="Food item Name" variant="outlined" />
                <input type="text" id="myInput" placeholder="Food item Name"></input>
                <TextField id="outlined-basic" label="Price" variant="outlined" />
                <TextField
          id="standard-number"
          label="Time (minutes)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className="foodImage-Upload">
            <div>
                <input accept="image/*" id="icon-button-file" type="file" style = {{}}/>
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                    </IconButton>
                </label>
            </div>
        </div>
        {/* 
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
            <label for="vehicle2"> I have a car</label><br>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
            <label for="vehicle3"> I have a boat</label>
         */}
        
            </form>
            <button className = "save-menu">
                <span onclick="newElement()" className="addBtn">Add</span>
            </button>
      
            </div>

        </div>

        
    )
}

export default MenuCard

