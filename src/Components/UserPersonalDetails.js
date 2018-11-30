import React , { Component } from 'react'
import MUiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class UserPersonalDetails extends Component{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values , handleChange } = this.props
        return(
            <MUiThemeProvider>
                <React.Fragment>
                    <AppBar title = 'Enter User Details'/>
                    <TextField 
                        hintText = 'Enter your Occupation'
                        floatingLabelText = 'Occupation'
                        onChange = {handleChange('occupation')}
                        defaultValue = {values.occupation}    
                    />

                    <br />

                    <TextField
                        hintText = 'Enter your bio'
                        floatingLabelText = 'Bio'
                        onChange = {handleChange('bio')}
                        defaultValue = {values.bio}
                    />

                    <br />

                    <RaisedButton 
                        label = "Continue"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.continue}
                    />

                    <RaisedButton 
                        label = "Back"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.back}
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

export default UserPersonalDetails