import './App.css'

import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MainWindow from './pages/MainWindow'
import { SplashScreen } from './components/SplashScreen/SplashScreen'

function App() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
      <HashRouter>
        <Routes>
          <Route path="/*" element={<MainWindow />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
