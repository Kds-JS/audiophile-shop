import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Container from 'Components/Container'

import { store } from 'redux/app/store';
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
    
  )
}
