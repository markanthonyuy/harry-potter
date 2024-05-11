import { A, useParams } from '@solidjs/router'
import { Match, Switch, Suspense } from 'solid-js'
import { getData } from '../../fetcher/getData'
import { TCharacter } from '../../types/character'
import styles from './Character.module.css'
import { Loading } from '../../components/Loading/Loading'
import { createQuery } from '@tanstack/solid-query'

export const Character = () => {
  const { id = '' } = useParams()

  const query = createQuery<TCharacter[]>(() => ({
    queryKey: [`getData-${id}`],
    queryFn: async () => getData(id),
  }))

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Match when={query.error}>
          <span>Error</span>
        </Match>
        <Match when={query.data?.length}>
          <div class={styles.character}>
            <div class={styles.image}>
              {query.data?.at(0)?.image && (
                <img
                  src={query.data?.at(0)?.image}
                  alt={query.data?.at(0)?.name}
                />
              )}
            </div>
            <div class={styles.info}>
              <p>
                Name: <b>{query.data?.at(0)?.name || '-'}</b>
              </p>
              <p>
                Gender: <b>{query.data?.at(0)?.gender || '-'}</b>
              </p>
              <p>
                House: <b>{query.data?.at(0)?.house || '-'}</b>
              </p>
              <p>
                Hair Color: <b>{query.data?.at(0)?.hairColour || '-'}</b>
              </p>
              <p>
                Eye Color: <b>{query.data?.at(0)?.eyeColour || '-'}</b>
              </p>
              <p>
                Birthday: <b>{query.data?.at(0)?.dateOfBirth || '-'}</b>
              </p>
              <p>
                Patronus: <b>{query.data?.at(0)?.patronus || '-'}</b>
              </p>
              <p>
                Ancestry: <b>{query.data?.at(0)?.ancestry || '-'}</b>
              </p>
              <p>
                Species: <b>{query.data?.at(0)?.species || '-'}</b>
              </p>
              <p>
                Wand: <b>{query.data?.at(0)?.wand.core || '-'}</b>
              </p>
              <hr />
              <p>
                Actor: <b>{query.data?.at(0)?.actor || '-'}</b>
              </p>
              <A href="/">Back Home</A>
            </div>
          </div>
        </Match>
      </Switch>
    </Suspense>
  )
}
