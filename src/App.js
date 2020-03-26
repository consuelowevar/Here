//App.js
import React, { Component } from 'react';
// import {DisplayMapClass} from './DisplayMapClass';
import Welcome from './Views/Welcome'

class App extends Component {
    render() {
      return (
        // <Router>
        //     <Switch>
        //       <Route exact path="/">
                <Welcome />
        //       </Route>
        //       <Route path="/Home">
        //         <MyNavBar />
        //       </Route>
        //     </Switch>
        // </Router>
      );
    }
  }
  
  export default App;



// function App() {
// return (
//    <Welcome />
//     { /*<DisplayMapClass /> */ }

// );
// }
// export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Esta es nuestra aplicación para el coronavirus
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
