import React from "react";
import Card from '@material-ui/core/Card';  
import CardContent from '@material-ui/core/CardContent';    
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'; 
 

const UserCard = (props) =>{
    
 return(
  <Grid item > 
    <Card >
    <CardContent>
    <Typography variant="body2" component="p">
     <label> Name </label>  :{props.user.name} <br/>
     <label> Id   </label>  :{props.user.id} <br/>
     <label> Age  </label>  :{props.user.age} <br/>
     <label>Gender</label>  :{props.user.gender} <br/>
     <label>Emails </label> :{props.user.email} <br/>
     <label>Contact</label> :{props.user.phoneNo} <br/> 
  </Typography>
  </CardContent>
   </Card>
   </Grid>  
 )}

export default UserCard;