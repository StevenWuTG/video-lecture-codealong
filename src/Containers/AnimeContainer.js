import React from "react";
import Instructor from "../Components/Instructor";

function AnimeContainer(props) {
    console.log("props for anime container", props)
//   let instructors = props.instructors.map((instructorObj) => (
//     <Instructor instructor={instructorObj} />
//   ));
  return(

    <>
    <h1>Anime Container</h1>
    <Instructor instructor={props.instructor}/>
    
    </>
)
}

export default AnimeContainer;
