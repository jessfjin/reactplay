//we must import react to use it in our app
// given the duty budndle up the js
import React from 'react';

import HelloWorld from './HelloWorld';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {

   render() {
      return (
         <div>

         <Header/>
         
         <div className='jumbotron'>
            <HelloWorld/>
         </div>
        
         <Article/>

         <div className='jumbotron'>
         <Footer/>
         </div>

         </div>
      );
   }
}

export default Main;

