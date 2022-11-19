const BASE_URL = 'https://api.themoviedb.org/3'

export async function get (path: string): Promise<any> {
  const url = new URL(`${BASE_URL}${path}`)
  return await fetch(url).then(
    async (result) => await result.json()
  )
}

export async function post (path: string, body: any): Promise<any> {
  const url = new URL(`${BASE_URL}${path}`)
  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (response) => await response.json())
}
