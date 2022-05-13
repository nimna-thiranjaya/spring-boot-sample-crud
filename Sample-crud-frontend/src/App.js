// import React from 'react';
// import StudentList from './components/StudentList'
// import {BrowserRouter as Router,Route} from 'react-router-dom'
// function App(){
//   return(
//     <StudentList></StudentList>
  
//   );
// }
// export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
            <Route exact path="/home" component={StudentList} />
            <Route path="/add" component={AddStudent} />
            <Route path="/edit/:id" component={AddStudent} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
