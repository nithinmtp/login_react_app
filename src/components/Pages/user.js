import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "../../includes";
import Grid from '@material-ui/core/Grid'; 

import UserCard from "./userCard";

class User extends Component {
  
  render() {

    return (
      <Typography variant="body2" gutterBottom component="h2">
        <Grid container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
        >
        {this.props.login.user.map((item) =>
        <UserCard 
          key= {item.id}
          user = {item} 
         />
        )}
        </Grid>
      </Typography>
    );
  }
}

const mapStateToProps = state => {
  return state;
  }


export default connect(
  mapStateToProps
)(User);
