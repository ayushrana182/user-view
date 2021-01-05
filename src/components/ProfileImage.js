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
				<div className="container">
					<h1 className="heading">Complete your Profile</h1>
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
        <form id="standard-full-width" fullWidth noValidate autoComplete="off" className = "">
          <TextField id="outlined-basic" label="Restaurent Name" variant="outlined" style = {{width: '60vw'}}/>
          <br/>
          <div className="description-section">
            {/* <label for="restro-description" className = "">Restaurent Description</label> */}
            <textarea id="restro_review" name="w3review" rows="4" cols="80" placeholder = "Describe your restaurant  here">
            
              </textarea>
              <br/>
              {/* <input type="submit" value="Submit"/> */}
            <button type = "submit"value="Submit" className = "restro-btn">Submit</button>
          </div>
        </form>
        
			</div>
		);
	}
}

export default App;