import './App.css';

import React, { Component } from 'react' // rcc
// import { render } from 'react-dom';
import Navbar from './Navbar';
import   Newscomp from './Newscomp';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  render() {  
    
    // <Routes>
    // <Route path="/" element={<App />}>
    //   <Route index element={<Home />} />
    //   <Route path="teams" element={<Teams />}>
    //     <Route path=":teamId" element={<Team />} />
    //     <Route path="new" element={<NewTeamForm />} />
    //     <Route index element={<LeagueStandings />} />
    //   </Route>
    // </Route>
  // </Routes>
    return (
      <div >
      <Router>
   
      <Navbar/>
      <Routes>
       
      <Route path="/"element={<Newscomp pageSize={this.pageSize} country="in" category="general"/>} >  
         <Route exact path="/entertainment"element={<Newscomp pageSize={this.pageSize} country="in" category="entertainment"/>}/>
         
         <Route exact path="/business"element={<Newscomp pageSize={this.pageSize} country="in" category="business"/>}/>
         <Route exact path="/health"element={<Newscomp pageSize={this.pageSize} country="in" category="health"/>} />
         <Route exact path="/sports"element={<Newscomp pageSize={this.pageSize} country="in" category="sports"/>} />
         <Route exact path="/science"element={< Newscomp pageSize={this.pageSize} country="in" category="science"/>} />
         <Route exact path="/technology"element={<Newscomp pageSize={this.pageSize} country="in" category="technology"/>} />
          </Route>
          </Routes>
     
    </Router>
        
   
      </div>
    )
  }
}




