// App.tsx
import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects.tsx'
import Resume from './pages/Resume.tsx'
import Contact from './pages/Contact.tsx'
import theme from './theme'
import './index.css'
import ParticlesBackground from './components/ParticlesBackground'
import ProjectDetails from './components/ProjectDetails.tsx'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        {/* Apply animated background globally */}
       {/* <Box className="animated-bg" minH="100vh" w="100%">*/}
        <Box minH="100vh" w="100%" position="relative" bg="transparent">
          <ParticlesBackground />
          <Navbar />
          <Box px={4} bg="transparent">
            <Routes>
              <Route path="/" element={<Box p={0} bg="transparent"><Home /></Box>} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/:projectId" element={<ProjectDetails />} />
            </Routes>
          </Box>
          </Box>
       {/* </Box>*/}
      </Router>
    </ChakraProvider>
  )
}

export default App
