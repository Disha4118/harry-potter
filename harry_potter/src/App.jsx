import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Books from './Books'
import Spell from './Spell'
import Characters from './Characters'
import Houses from './Houses'
import Navbar from './Navbar'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
    <Router>
      <Navbar />
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
