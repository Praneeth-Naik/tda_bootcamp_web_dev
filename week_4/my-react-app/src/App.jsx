import React from 'react';
import Header from './Header.jsx';
import SideBar from './SideBar.jsx';
import Content from './Content.jsx';

function App() {
  return (
    <>
      <div className='main-body'>      
        <header><Header /></header>
        <aside><SideBar/></aside>
        <main><Content/></main>
      </div>  
    </>
  );
}

export default App;
