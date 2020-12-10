import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header";
import AnimeContainer from "./Containers/AnimeContainer";
import InstructorContainer from "./Containers/InstructorContainer";

class App extends React.Component {
  state = { instructor: {} };

  appClickHandler = (instructor_obj) => {
    console.log("%c In app!", "color: red", instructor_obj);
    this.setState({ instructor: instructor_obj });
  };

  render() {
    return (
      <>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor} />
      </>
    );
  }
}

export default App;
