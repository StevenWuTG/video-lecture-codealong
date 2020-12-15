import React from 'react'
import Instructor from '../Components/Instructor'
import Form from '../Components/Form'

class InstructorContainer extends React.Component {
    state = {
        instructors: [{id:1, name:"Steven", mod: 3},{id:2, name:"Caryn", mod: 1}, {id:3, name:"Greg", mod: 2}, {id:4, name:"Tashawn", mod: 4}]
    }

    
    submitHandler = (obj) => {
        console.log("old state", this.state.instructors)
        
        let newArray = [ ...this.state.instructors, obj ]
        this.setState({ instructors: newArray })
        console.log("new state", newArray)
        
        
    }
    
    render(){
        

        let instructors = this.state.instructors.map(instructorObj => <Instructor key={instructorObj} instructor={instructorObj} appClickHandler={this.props.appClickHandler}/>)
        return (
            <>
            <Form submitHandler={this.submitHandler}/>
            {instructors}
            </>
        )

    }

}

export default InstructorContainer 