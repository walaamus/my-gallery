import React from 'react' ;
import profilePhoto from  './profilePhoto.png';
import './user.css';

const User = () => {
    return (
        <div className="user">
             <center><img class ="userimg" src ={profilePhoto} /></center>
             <h1>Rodney Cotton</h1>
             <h2>Helsinki , finland</h2>
        </div>
    )   
     

}



export default User ;