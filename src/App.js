import React, { useCallback, useState } from "react"
import "./App.css"
import SearchBar from "./components/searchBar/SearchBar"
import Quote from "./components/quote/Quote"
// import axios from "axios"
import { requestQuotes } from "./components/RequestQuotes"

const App = () => {
  const [quotes, setQuotes] = useState([])

  const onSearchSubmit = useCallback(async (term) => {
    const quotesArray = await requestQuotes(term.toLowerCase())
    setQuotes(quotesArray)
  }, [])

  // const onSearchSubmit2 = async (term) => {
  //   const res = await fetch(
  //     `https://animechan.vercel.app/api/quotes/anime?title=${term}`
  //   )
  //   const quotesArray = await res.json()
  //   setQuotes(quotesArray)
  // }
  // console.log(quotes)

  const clearResults = () => setQuotes([])

  return (
    <div className="app">
      <h1 className="title">Realtime Search Bar</h1>

      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />

      {
        <div className="main-content">
          {quotes.map((quote, i) => {
            return <Quote quote={quote} key={i} />
          })}
        </div>
      }
    </div>
  )
}

export default App
