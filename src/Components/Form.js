import React from 'react'

class Form extends React.Component{
    state = {
        name: "",
        mod: ""
    }

    changeHandler = (e) => {
        
        this.setState({ [e.target.name]: e.target.value})

        // if (e.target.name === "name"){
        //     this.setState({name: e.target.value})

        // } else if(e.target.name === "mod") {
        //     this.setState({mod: e.target.value})
        // }
    }

    render(){
        return (
            <form onSubmit={(e)=> {
    
                e.preventDefault()
                
                this.props.submitHandler({name: e.target.name.value})
                this.setState({name: "", mod: ""})
    
                console.log(e)
                // debugger
            }}>
                <input type="text" name="name" placeholder="Instructor name" value={this.state.name} onChange={this.changeHandler}></input>
                <input type="number" name="mod" placeholder="Mod number" value={this.state.mod} onChange={this.changeHandler}></input>
                <button type="submit">Submit</button>
            </form>
        )

    }
    
}

export default Form