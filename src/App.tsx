import './App.css'
import {useRoutes} from 'react-router-dom'
import router from './router'

function App() {

  const outLet = useRoutes(router)

  return (
    <div className='App'>
      {/* <Link to="/home">Home</Link><br/><br/>
      <Link to="/about">About</Link><br/><br/> */}

      {/* 占位符组件，类似于窗口，用来展示组件的，类似于vue中的router-view */}
      {/* <Outlet></Outlet> */}
      {outLet}
    </div>

  )

}

export default App
