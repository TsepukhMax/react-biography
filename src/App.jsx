import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import {ways, differences} from './data'
import MyWay from './components/MyWay'
import Button from './components/button/button'

export default function App() {
  const [contentType, setContent] = useState(null);

  function handleClick(type){
    setContent(type);
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Мій підхід до навчання</h1>
          <ul>
            {ways.map((way) => <MyWay key={way.title} {...way} />)}
            {/* <MyWay title={ways[0].title} description={ways[0].description} />
            <MyWay {...ways[1]} />
            <MyWay {...ways[2]} />
            <MyWay {...ways[3]} />
            <MyWay {...ways[4]} /> */}
          </ul>
        </section>
        <section>
          <h3>Чим це навчання відрізняється від інших?</h3>
          <Button isSelected={contentType === 'html'} buttonClick={() => handleClick('html')}>HTML</Button>
          <Button isSelected={contentType === 'css'}buttonClick={() => handleClick('css')}>SCC</Button>
          <Button isSelected={contentType === 'js'}buttonClick={() => handleClick('js')}>JavaScript</Button>

          {!contentType && <p>Натисни на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </>
  )
}
