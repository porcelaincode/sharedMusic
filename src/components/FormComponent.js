import React, {Component} from 'react'
import {
    withStyles,
  } from '@material-ui/core/styles';

import {TextField, IconButton} from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const CssTextField = withStyles({
root: {
    '& .MuiInputBase-input':{
        color:"white",
        placeholderColor:"white",
        fontFamily: 'Quicksand',
        fontSize: "large",
    },
    '& label.Mui-focused': {
    color: 'white',
    },
    '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
    '& fieldset': {
        borderColor: 'white',
    },
    '&:hover fieldset': {
        borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
        borderColor: 'white',
    },
    },
    '&$focused': {
        color:"white",
    },
},
})(TextField);

export class FormComponent extends Component {
    state = { term: '' };
    
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.term === '') return;
        this.props.onFormSubmit(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form 
                style={{
                    margin:"0.2em",
                }} 
                noValidate 
                autoComplete="off" 
                onSubmit={this.handleSubmit}
            >
                <CssTextField 
                    id="custom-css-standard-input" 
                    label="Enter Artist"
                    value={this.state.term}
                    onChange={(e) => this.setState({term: e.target.value})}
                    variant="outlined"
                    style={{
                        width:"25ch",
                    }}
                />
                <IconButton
                    aria-label="Add Artist"
                    style={{
                        borderRadius: "0.3em",
                        marginLeft:"0.2em",
                        backgroundColor: "#ffffff33",
                    }}
                    type="submit"
                >
                    <AddRoundedIcon 
                        fontSize="large" 
                        style={{
                            color:"whitesmoke"
                        }}
                    />
                </IconButton>
            </form>
        )
    }
}

export default FormComponent
