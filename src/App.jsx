import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (

    <div className="App">
      {/* Header */}
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      {/* Pages */}
      <Outlet />
    </div>

  )
}

export default App;
