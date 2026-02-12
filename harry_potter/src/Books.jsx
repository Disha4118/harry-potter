import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from './utils/Slice'
import Card from './card'

function Books() {
  const dispatch = useDispatch()
  const { books, loading, error } = useSelector((state) => state.books)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-purple-400">Loading books...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-red-400">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-400">
           Harry Potter Books
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4">
          {books.map((book, index) => (
            <Card key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Books