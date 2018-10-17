

// class About extends React.Component {
//   handleChange = event => {
//     this.setState({ newTodo: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.router.push({
//   });
//   };
// }


import React from 'react'
import { Redirect } from 'react-router-dom'
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      output:"null"
    }
    this.redirectHanlder = this.redirectHanlder.bind(this);
  }
  redirectHanlder() {
    let userOutput = document.getElementById("output").value;
    this.setState({
        redirect:true,
        output:userOutput,
    });
    console.log(this.state);
}
render() {
  let { redirect } = this.state;
  return (redirect ? <Redirect to={{
      pathname: "/",
      state: { "output": this.state.output}
  }
  } /> :
      <div>
          <h2>About</h2 >
          <form onSubmit={this.redirectHanlder}>
              <label>
                  <label>type：</label><input id="output" placeholder="type in" ></input>
              </label>
              <input type="submit" value="submit" />
          </form>
          {/* <button onClick={this.redirectHanlder}>jump to page 2</button> */}
      </div >);
}
  // state = {
  //   redirect: false
  // }
  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }
  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     this.props.history.push({pathname: '/', state: {day: 7}})
  //   }
  // }
  // handleChange = event => {
  //    this.setState({day: 7});
  //  };

  // handleSubmit = (event) => {
  //    event.preventDefault();
  //    console.log(this.props);
  //    this.props.history.push({pathname:'/', state:{day: 7}});
  //  };

  // render () {
  //   return (
  //      <div>
  //       {this.renderRedirect()}
  //         <form onSubmit={this.handleSubmit}>
  //         <input
  //           type="text"
  //           value={this.props}
  //           onChange={this.handleChange}
  //         />
  //         <button onClick={this.handleSubmit}> + </button>
  
  //       </form>
  //       <button onClick={this.setRedirect}>Redirect</button>
  //      </div>
  //   )
  // }
}
export default About;
