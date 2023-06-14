import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import App from './App'
import client from './gql/client'
import { PokemonDataProvider } from './context/PokemonDataContext'

const GlobalStyle = createGlobalStyle`
  html {
    color-scheme: light dark;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <PokemonDataProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PokemonDataProvider>
  </ApolloProvider>,
)
