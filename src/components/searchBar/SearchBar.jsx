import React, { useEffect, useState } from "react"
import "./SearchBar.css"

const SearchBar = ({ onSearchSubmit, clearResults }) => {
  const [term, setTerm] = useState("")
  const removeExtraSpace = (s) => s.trim().split(/ +/).join(" ")
  const [debouncedTerm, setDebouncedTerm] = useState(removeExtraSpace(term))

  // update 'term' value after 800 ms from the last update of 'debouncedTerm'
  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 800)
    return () => clearTimeout(timer)
  }, [debouncedTerm])

  // submit a new search
  useEffect(() => {
    if (debouncedTerm !== "") {
      onSearchSubmit(debouncedTerm)
    } else {
      clearResults()
    }
  }, [debouncedTerm])

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search user by name. . ."
        onChange={(e) => setDebouncedTerm(e.target.value)}
        value={debouncedTerm}
      />
    </div>
  )
}

export default SearchBar
