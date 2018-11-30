import React , { Component } from 'react'
import MUiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class Success extends Component{

    render(){
        const { values , handleChange } = this.props
        return(
            <MUiThemeProvider>
                <React.Fragment>
                    <AppBar title = 'Enter User Details'/>
                    <h1>Thank You for your Submission</h1>
                    <p>Further Instructions will be communicated to you with email</p>
                </React.Fragment>
            </MUiThemeProvider>
        )
    }
}



export default Success