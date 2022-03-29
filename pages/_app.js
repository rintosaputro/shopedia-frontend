import '../styles/globals.css'
import '../styles/application.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import '@popperjs/core'
import { Provider, useDispatch } from 'react-redux';
import store from '../redux/store'
import { getProfile } from '../redux/actions/user';
import { getWishLlists } from '../redux/actions/wishlist';

const MyComponent = ({children}) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      dispatch(getProfile)
      dispatch(getWishLlists)
    }
  }, [dispatch])

  return <>{children}</>
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Provider store={store}>
      <MyComponent>
        <Component {...pageProps} />
      </MyComponent>
    </Provider>
  )
}

export default MyApp
