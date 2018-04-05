import React from 'react';
import Nav from './_nav.jsx';
import Footer from './_footer.jsx';

class Main extends React.Component {
   render() {
      return (
        <div>
            <Nav />
            <div className="container main-container">
                {React.cloneElement(this.props.children, this.props)}
            </div>
            <Footer />
        </div>
      );
   }
}

export default Main;