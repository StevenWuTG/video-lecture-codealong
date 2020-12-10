import React from "react";



class Header extends React.Component {

  //initialize
  // constructor(props){
  //   super(props)
  //   this.state = {color: "crimson"}
  // }
  state = {color: "black"}

  // instructors = ()=> {
  //     return this.props.instructors.map(function (instructor_name) {
  //         return <Bline name={instructor_name} />;
  //     });
  // }

  clickHandler = () => {
    console.log("H1 clicked")
    // this.state.color = "blue"

    if (this.state.color == "black"){
      this.setState({color: "blue"})
    } else {
      this.setState({color: "black"})

    }

  }

  render() {
   
    return (
      <div>
        <h1 onClick={this.clickHandler} style={{"border-style": "dashed", "border-color": `${this.state.color}` }}>Welcome to Our App! </h1>
       
      </div>
    );
  }
}

export default Header;
