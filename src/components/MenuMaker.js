import React from 'react'
// import Menu from './Menu'
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import EditIcon from '@material-ui/icons/Edit';
import './MenuMakerStyle.css';
import DeleteIcon from '@material-ui/icons/Delete';
const { PureComponent } = React;

const Table = ({ users = [], updateUser, deleteUser }) => {
    return (
        <>
        
       <div className="table" style = {{margin : '80px 0'}}>
          <div className="table-header">
             <div className="row">
                <div className="column">Item</div>
                <div className="column">Price</div>
                <div className="column">Time</div>
                <div className="column">Options</div>
             </div>
          </div>
          <div className="table-body">
             {users.map((user, key) => {
                return (
                   <div className={`row ${user.updating ? "updating" : ""}`}>
                      <div className="column">{user.firstName}</div>
                      <div className="column">{user.lastName}</div>
                      <div className="column">{user.email}</div>
                      <div className="column">
                         <button
                            className="icon"
                            onClick={() => updateUser(key)}
                         >
                             <EditIcon style = {{color: 'blue'  }}/>
                         </button>
                         <button className="icon">
                         <DeleteIcon onClick={() => deleteUser(key)} style = {{color: 'red'  }}/>
                         </button>
                      </div>
                   </div>
                );
             })}
          </div>

          {/* <form noValidate autoComplete="off" className = "Menu-upload-form">
                <TextField id="outlined-basic" label="Food item Name" variant="outlined" />
                <TextField id="outlined-basic" label="Price" variant="outlined" /><TextField
          id="standard-number"
          label="Time (minutes)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className="foodImage-Upload">
            <div>
                
            </div>
        </div>        
        
            </form> */}
            
       </div>
       
       </>
    );
 };
 const Form = ({ formState, onChange, onSubmit }) => {
   return (
      <form noValidate autoComplete="off" className="form Menu-upload-form" onSubmit={onSubmit}>
         <fieldset>
            <TextField  name="firstName" id="outlined-basic" label="Item Name" variant="outlined" value={formState.firstName}
               onChange={onChange} />
            <TextField name="lastName" id="outlined-basic" label="Price" variant="outlined" value={formState.lastName}
               onChange={onChange} />
            <TextField name="email" id="outlined-basic" label="Time (in min)" variant="outlined" value={formState.email}
               onChange={onChange} />
            <input accept="image/*" id="icon-button-file" type="file" style = {{}}/>
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                    </IconButton>
                </label>
            {/* <Field   
               
            />
            <Field
                            
            />
            <Field  
               
            /> */}

         </fieldset>
         <button>{formState.mode}</button>
      </form>
   );
};


// const Form = ({ formState, onChange, onSubmit }) => {
//    return (
//       <form className="form" onSubmit={onSubmit}>
//          <fieldset>
//             <Field
//                name="firstName"
//                label="Item Name"
//                value={formState.firstName}
//                onChange={onChange}
//             />
//             <Field
//                name="lastName"
//                label="Price"
//                value={formState.lastName}
//                onChange={onChange}
//             />
//             <Field
//                name="email"
//                label="Time (in min)"
//                value={formState.email}
//                onChange={onChange}
//             />
//          </fieldset>
//          <button>{formState.mode}</button>
//       </form>
//    );
// };

 class MenuApp extends PureComponent {
    state = {
       formState: {
          id: '',
          firstName: "",
          lastName: "",
          email: "",
          mode: "submit"
       },
       users: [
          {
             id: 0,
             firstName: "Chiken MoMo",
             lastName: "180",
             email: "25min",
             updating: false
          }
       ]
    };
 
    resetFormState = () => {
       this.setState({
          formState: {
             firstName: "",
             lastName: "",
             email: "",
             mode: "submit",
             id: ""
          }
       });
    };
 
    onChange = event => {
       this.setState({
          formState: {
             ...this.state.formState,
             [event.target.name]: event.target.value
          }
       });
    };
 
    onSubmit = event => {
       const { users, formState } = this.state;
       event.preventDefault();
       const firstName = event.target.querySelector("input[name='firstName']")
          .value;
       const lastName = event.target.querySelector("input[name='lastName']")
          .value;
       const email = event.target.querySelector("input[name='email']").value;
       if (formState.mode === "submit") {
          this.setState({
             users: [
                ...this.state.users,
                {
                   firstName,
                   lastName,
                   email,
                   updating: false,
                   id: this.state.users[this.state.users.length - 1].id + 1
                }
             ]
          });
       } else if (formState.mode === "edit") {
          const index = users.find((user)=> user.id === formState.id).id;
          users[index] = {
                   firstName,
                   lastName,
                   email,
                   updating: false,
                   id: users[index].id
                }
          this.setState({
             users: [...users]
          });
       }
 
       this.resetFormState();
    };
 
    updateUser = key => {
       let { users } = this.state;
       users[key].updating = true;
 
       this.setState({
          formState: { ...this.state.users[key], mode: "edit" },
          users
       });
    };
 
    deleteUser = key => {
       let { users } = this.state;
       users.splice(key, 1);
       this.setState({
          users: [...users]
       });
    };
 
    render() {
       const { users, formState } = this.state;
       return (
          <div>
             <Form
                formState={formState}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
             />
             <Table
                users={users}
                updateUser={this.updateUser}
                deleteUser={this.deleteUser}
             />
          </div>
       );
    }
 }


 const Field = ({ label = "", name = "", value = "", onChange }) => {
    return (
       <div className="field">
          <label htmlFOR={name}>{label}</label>
          <input type="text" name={name} value={value} onChange={onChange} />
       </div>
    );
 };


export default MenuApp ;

