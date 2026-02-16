import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSpells} from './utils/SpellSlice'
import SpellCard from './SpellCard'

/**
 * Spell component displays Harry Potter spells with pagination
 * Uses Redux for state management
 */
function Spell() {
  const dispatch = useDispatch()
  // Get spells state from Redux store
  const { spells, loading, error } = useSelector((state) => state.spell)
  // Local state to track current page number
  const [page, setPage] = React.useState(1);

  // Fetch spells whenever page changes
  useEffect(() => {
    dispatch(fetchSpells(page))
  }, [dispatch, page])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-purple-400">Loading spells...</p>
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
           Harry Potter Spells
        </h1>
        
        {/* Grid of spell cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {spells?.map((spell) => (
            <SpellCard key={spell.spell} spell={spell} />
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center gap-3 mt-8">
          {/* Previous button - disabled on first page */}
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-purple-600 text-white rounded disabled:bg-gray-700 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {/* Current page display */}
          <span className="px-4 py-2 bg-gray-800 text-white rounded">Page {page}</span>
          {/* Next button - resets to page 1 after page 13 */}
          <button
            onClick={() => setPage((prev) => (prev >= 13 ? 1 : prev + 1))}
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            {page >= 13 ? 'Reset' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Spell;