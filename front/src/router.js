import {Routes, Route} from 'react-router-dom'
import App from './App'
import {Authentication as Auth} from './components/Authentication'

export const Router = () => {

    return(
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/auth' element={<Auth />} />
        </Routes>
    )
}