import React, { Component } from 'react';
import './componentStyles.css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import TextField from '@material-ui/core/TextField';
export class App extends Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };



	render() {
    const { profileImg} = this.state
    
		return (
			<div className="page">
				{/* <div className="restro-container"> */}
        <div className="dp-image">
          <div className="restro-container">
            <div className="img-holder">
              <img width = '250px' height = '250px' src={profileImg} alt="" id="img" className="img" />
            </div>
            <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
            <div className="label">
                <label className="image-upload" htmlFor="input">
                <CloudUploadIcon/> Resturent Logo
            </label>
            </div>
          </div>
          {/* <form id="standard-full-width" fullWidth noValidate autoComplete="off" className = "">
            <TextField id="outlined-basic" label="Restaurent Name" variant="outlined" className = "rest-name"/>
            <br/>
            <div className="description-section">
              <textarea id="restro_describe" name="w3review" rows="4" cols="80" placeholder = "Describe your restaurant  here">
              
                </textarea>
                <br/>
              <button type = "submit"value="Submit" className = "restro-btn">Submit</button>
            </div>
          </form> */}
        </div>

        {/* </div> */}
        
			</div>
		);
	}
}

export default App;