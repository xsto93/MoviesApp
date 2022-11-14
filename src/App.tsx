import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { QueryClientProvider, QueryClient } from 'react-query'

import Navbar from './shared/components/navbar/Navbar'
import MoviesRated from './views/movies-rated/movies-rated'
import MoviesSearch from './views/movies-search/movies-search'

import './App.css'

function App (): JSX.Element {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar title='MoviesApp' />
        <main className='main__layout'>
          <Routes>
            <Route path="/search" element={<MoviesSearch />} />
            <Route path="/mylist" element={<MoviesRated />} />
            <Route path="*" element={<Navigate to="/search" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
