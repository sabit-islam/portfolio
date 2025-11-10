import { Box, Text, Link } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import { motion, useDragControls } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import BootScreen from '../components/Bootscreen.tsx'



const MotionBox = motion(Box)

const Terminal = () => {
  const [logs, setLogs] = useState<string[]>(["> You have joined the dark side. maybe type 'help' for commands 👀."])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)
  const inputRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()
  const [booting, setBooting] = useState(true)


useEffect(() => {
  inputRef.current?.focus()

  const handleGlobalKeyDown = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return

    if (e.key === 'Enter') {
      handleCommand()
    } else if (e.key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1))
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        setHistoryIndex((prev) => {
          const newIndex = prev === null ? history.length - 1 : Math.max(prev - 1, 0)
          setInput(history[newIndex])
          return newIndex
        })
      }
    } else if (e.key === 'ArrowDown') {
      if (history.length > 0 && historyIndex !== null) {
        const newIndex = Math.min(historyIndex + 1, history.length - 1)
        setInput(history[newIndex])
        setHistoryIndex(newIndex)
      }
    } else if (e.key.length === 1) {
      setInput((prev) => prev + e.key)
    }
  }

  window.addEventListener('keydown', handleGlobalKeyDown)

  return () => {
    window.removeEventListener('keydown', handleGlobalKeyDown)
  }
}, [input, history, historyIndex])


const handleCommand = () => {
  let response = ''
  switch (input.trim().split(' ')[0]) {
    case 'help':
      response = 'Available commands: help, about, clear'
      break
    case 'about':
      response = 'This is a fake terminal easter egg built by Sabit Islam.'
      break
    case '':
      response = ''
      break
    case 'clear':
      setLogs([])
      setInput('')
      return
    case 'cd':
      
    default:
      response = `Command not found: ${input}`
      break
  }

  setLogs((prev) => [...prev, `> ${input}`, response])
  setHistory((prev) => [...prev, input])
  setInput('')
  setHistoryIndex(null)
}

return (
  <Box bg="gray.900" maxH="100vh" p={8} display="flex" justifyContent="center" alignItems="center">
<MotionBox
  drag
  dragControls={dragControls}
  dragListener={false}
  dragMomentum={false}
  dragElastic={0.05}
  w="100%"
  maxW="1000px"
  h="600px"       
  borderRadius="lg"
  overflow="hidden"
  boxShadow="lg"
  border="1px solid #444"
  cursor="default"
  bg="black"      
>
      {/* Top Bar */}
      <Box
        as={motion.div}
        onPointerDown={(e) => dragControls.start(e)}
        bg="gray.800"
        p={2}
        display="flex"
        gap={2}
        alignItems="center"
        px={4}
        borderBottom="1px solid #333"
        cursor="grab"
      >
        <Link as={RouterLink} to="/">
        <Box w="3" h="3" borderRadius="full" bg="red.500" />
        </Link>
        <Box w="3" h="3" borderRadius="full" bg="yellow.400" />
        <Box w="3" h="3" borderRadius="full" bg="green.500" />
      </Box>

      {/* Terminal Content Area */}
      {booting ? (
        <BootScreen onComplete={() => setBooting(false)} />
      ) : (
        <Box
          bg="black"
          color="green.200"
          px={6}
          py={4}
          fontFamily="'Menlo', 'Monaco', 'SFMono-Regular', 'Courier New', monospace"
          fontSize="sm"
          lineHeight="1.6"
          boxShadow="inset 0 0 20px #00ff0033"
          h="100%"
          w="100%"
        >
          {logs.map((log, i) => (
            <Text key={i}>{log}</Text>
          ))}
          <Box
            ref={inputRef}
            tabIndex={0}
            _focus={{ outline: 'none' }}
            mt={2}
          >
            <Text as="span" color="green.100">
              &gt; {input}
              <Box as="span" className="cursor">█</Box>
            </Text>
          </Box>
        </Box>
      )}
    </MotionBox>
  </Box>
)

}

export default Terminal
