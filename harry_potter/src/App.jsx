import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Books from './Books'
import Spell from './Spell'
import Characters from './Characters'
import Houses from './Houses'
import Navbar from './Navbar'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create QueryClient OUTSIDE component to prevent recreation on re-renders
const queryClient = new QueryClient();

/**
 * Main App component that sets up routing and React Query
 * - QueryClientProvider enables React Query for data fetching and caching
 * - Router handles navigation between different pages
 * - Navbar persists across all routes
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Dev tools for debugging React Query cache and queries */}
      <ReactQueryDevtools initialIsOpen={false} />
    <Router>
      {/* Navigation bar appears on all pages */}
      <Navbar />
      {/* Define application routes */}
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/spell" element={<Spell />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/houses" element={<Houses />} />
      </Routes>
    </Router>
    </QueryClientProvider>
  )
}

export default App
