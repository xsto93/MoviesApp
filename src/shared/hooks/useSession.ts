import { useQuery } from 'react-query'
import { Session } from '../../core/models/movies'
import { getSessionId } from '../../core/services/movies.service'
import { refreshTime } from '../utils/constants'

export const useSession = (): Session | undefined => {
  const { data } = useQuery<Session>(['sessionId'], getSessionId, {
    refetchInterval: refreshTime,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  })

  return data
}
