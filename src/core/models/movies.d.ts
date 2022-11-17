
interface BelongsToCollection {
  backdrop_path: string
  id: number
  name: string
  poster_path: string
}

interface Genres {
  id: number
  name: string
}

interface ProductionCompanies {
  id: number
  logo_path: string
  name: string
  origin_country: strign
}

interface ProductionCountries {
  iso_3166_1: string
  name: string
}

interface SpokenLanguages {
  english_name: string
  iso_639_1: string
  name: string
}

export interface Movie {
  adult: Boolean
  backdrop_path: string
  belongs_to_collection?: BelongsToCollection[]
  budget: number
  genres: Genres[]
  homepage: string
  id: number
  imdb_id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies?: ProductionCompanies[]
  production_countries?: ProductionCountries[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages?: SpokenLanguages[]
  status: string
  tagline: string
  title: string
  video: Boolean
  vote_average: number
  vote_count: number

}
