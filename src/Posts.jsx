import React from 'react'  ;
import './posts.css' ;
import  photo1 from  './assets/photo1.png';
import  photo2 from  './assets/photo2.png';
import  photo3 from  './assets/photo3.png';
import  photo_4 from  './assets/photo_4.png';
import  photo5 from  './assets/photo5.png';
import  photo6 from  './assets/photo6.png';




const Posts =  () => {
    return (
        <div class ="containerg">
            <img class = "photo1" src = {photo1} />
            <img class = "photo2" src = {photo2} />
            <img class = "photo3" src = {photo3} />  
            <img class = "photo4" src = {photo_4} />  
            <img class = "photo5" src = {photo5} />  
            <img class = "photo6" src= {photo6} /> 
        </div>
    )
}   

export default Posts ; 
