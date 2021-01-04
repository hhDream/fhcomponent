import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hellow from './components/Hello';
import LikeButton from './components/LikeButton';
import useMousePosition from './hooks/useMousePosition';
import useUrlLoader from './hooks/useUrlLoader';
import MouseClick from './components/MouseHit';
interface IShowResult {
  message: string,
  status: string
}
interface IThemStyle {
  [key: string]: { color: string, background: string }
}

const themeStyle: IThemStyle = {
  'dark': {
    color: '#fff',
    background: '#000'
  },
  'light': {
    color: '#000',
    background: '#fff'
  }
}

export const ThemeContext = React.createContext(themeStyle.light)
function App() {
  const [show, setShow] = useState(true)
  const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random/1', show)
  const dogResult = data as IShowResult
  const position = useMousePosition()

  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={themeStyle.dark}>
          <button onClick={() => { setShow(!show) }}>是否显示</button>
          <Hellow message="鸿鹄" />
          <LikeButton></LikeButton>
          {show && <MouseClick></MouseClick>}
        X: {position.x}Y:{position.y}
          {loading ? '🐕读取中' : <img src={dogResult && dogResult.message} alt="" />}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
