import React , { Component } from 'react'
import MUiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class UserFormDetails extends Component{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { values , handleChange } = this.props
        return(
            <MUiThemeProvider>
                <React.Fragment>
                    <AppBar title = 'Enter User Details'/>
                    <TextField 
                        hintText = 'Enter your first name'
                        floatingLabelText = 'First Name'
                        onChange = {handleChange('firstName')}
                        defaultValue = {values.firstName}    
                    />

                    <br />

                    <TextField
                        hintText = 'Enter your second name'
                        floatingLabelText = 'Last Name'
                        onChange = {handleChange('lastName')}
                        defaultValue = {values.lastName}
                    />

                    <br />

                    <TextField
                        hintText = 'Enter your email here'
                        floatingLabelText = 'email'
                        onChange = {handleChange('email')}
                        defaultValue = {values.email}
                    />

                    <br />

                    <RaisedButton 
                        label = "Continue"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.continue}
                    />

                </React.Fragment>
            </MUiThemeProvider>
        )
    }
}

const styles = {
    button : {
        margin : 15
    }
}

export default UserFormDetails