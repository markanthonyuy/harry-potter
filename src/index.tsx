/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Route, Router } from '@solidjs/router'
import { Character } from './routes/Character/Character'
import { Home } from './routes/Home/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  )
}

const queryClient = new QueryClient()

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/character/:id" component={Character} />
      </Router>
    </QueryClientProvider>
  ),
  root!
)
