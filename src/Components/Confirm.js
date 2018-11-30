import React , { Component } from 'react'
import MUiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List , ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class UserFormDetails extends Component{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render(){
        const { values : { firstName , lastName , email , occupation , bio } } = this.props
        return(
            <MUiThemeProvider>
                <React.Fragment>
                    <AppBar title = 'Enter User Details'/>
                    <List>  
                        <ListItem
                            primaryText = 'First Name'
                            secondaryText = { firstName }
                        />
                        <ListItem
                            primaryText = 'Last Name'
                            secondaryText = { lastName }
                        />
                        <ListItem
                            primaryText = 'Email'
                            secondaryText = { email }
                        />
                        <ListItem
                            primaryText = 'Occupation'
                            secondaryText = { occupation }
                        />
                        <ListItem
                            primaryText = 'Bio'
                            secondaryText = { bio }
                        />
                    </List>
                    <RaisedButton 
                        label = "Continue"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.continue}
                    />

                    <RaisedButton 
                        label = 'Back'
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.prev}
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