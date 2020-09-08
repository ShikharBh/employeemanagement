import React, { Component } from 'react';   

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" href="#">Home </a>
                <a class="nav-link" href="#">Add</a>
                
              </div>
            </div>  
          </nav>
         );
    }
}
 
export default Navbar;