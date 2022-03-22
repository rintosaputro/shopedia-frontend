import '../styles/globals.css'
import '../styles/application.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import '@popperjs/core'
import { Provider } from 'react-redux';
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
