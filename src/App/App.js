import React from 'react';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import SGroup155 from './sectionGroup155/SGroup155';

import '../style/App.sass';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <SGroup155/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
