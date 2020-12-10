import React from "react";
import Bline from "./Bline";

// function Header(props) {
//     return (
//         <div>
//       <h1>Welcome to Our App! </h1>
//       {instructors}
//     </div>
//   );
// }

class Header extends React.Component {

    instructors = ()=> {
        return this.props.instructors.map(function (instructor_name) {
            return <Bline name={instructor_name} />;
          });
    }


  render() {
    
    // let instructors = this.props.instructors.map(function (instructor_name) {
    //   return <Bline name={instructor_name} />;
    // });

    return (
      <div>
        <h1>Welcome to Our App! </h1>
        {this.instructors()}
      </div>
    );
  }
}

export default Header;
