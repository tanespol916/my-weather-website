import {Route , Routes} from 'react-router-dom'
import HomePage from './pages/home';
import Page from './pages/page';
function App() {


  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/page' element={<Page/>}></Route>
    </Routes>
  )
}

export default App
