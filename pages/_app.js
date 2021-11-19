import { Provider } from 'react-redux'
import Header from '../components/Header/Header'
import store from '../redux'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </div>
  )
}

export default MyApp
