import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from './utils/Slice'
import Card from './card'

/**
 * Books component displays all Harry Potter books
 * Uses Redux for state management
 */
function Books() {
  // useDispatch hook to dispatch Redux actions
  const dispatch = useDispatch()
  // useSelector hook to access Redux state
  const { books, loading, error } = useSelector((state) => state.books)

  // Fetch books when component mounts
  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-purple-400">Loading books...</p>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-red-400">Error: {error}</p>
      </div>
    )
  }

  // Render books grid
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-400">
           Harry Potter Books
        </h1>
        
        {/* Grid of book cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {books.map((book) => (
            <Card key={book.title} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Books