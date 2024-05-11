import {
  createResource,
  For,
  Match,
  Suspense,
  Switch,
  type Component,
} from 'solid-js'

import styles from './Home.module.css'
import { Card } from '../../components/Card/Card'
import { Cards } from '../../components/Cards/Cards'
import { getAllData } from '../../fetcher/getAllData'
import { Loading } from '../../components/Loading/Loading'
import { createQuery } from '@tanstack/solid-query'
import { TCharacter } from '../../types/character'

export const Home: Component = () => {
  const query = createQuery<TCharacter[]>(() => ({
    queryKey: ['getAllData'],
    queryFn: getAllData,
  }))

  return (
    <div class={styles.app}>
      <h1>Harry Potter</h1>
      <p>
        Created by: <a href="https://markanthonyuy.com">Mark Uy</a>. Just trying
        Solidjs
      </p>

      <Suspense fallback={<Loading />}>
        <Switch>
          <Match when={query.error}>
            <span>Something when wrong</span>
          </Match>
          <Match when={query.data}>
            <Cards>
              <For each={query.data}>
                {(item) => (
                  <Card id={item.id} name={item.name} image={item.image} />
                )}
              </For>
            </Cards>
          </Match>
        </Switch>
      </Suspense>
    </div>
  )
}
