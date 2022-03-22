import ReactDOM from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'
import Store from './store'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={Store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
