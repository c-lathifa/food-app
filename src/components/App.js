import { Provider } from 'react-redux'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import appStore from '../utils/appStore'

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="box-border">
        <Header />
        <Outlet />
      </div>
    </Provider>
  )
}

export default App
