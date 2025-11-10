import { Box, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

interface BootScreenProps {
  onComplete: () => void
}

const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [randomLines, setRandomLines] = useState<string[]>([])
  const [showAsciiMessage, setShowAsciiMessage] = useState(false)
  const [readyForEnter, setReadyForEnter] = useState(false)
  const startTime = useRef(Date.now())

  const asciiArt = [
    "    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒░      ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓██████████████▓▒░░▒▓████████▓▒░ ",
    "    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ",
    "    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ",
    "    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░ ░▒▓█▓▒░     ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░   ",
    "    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ",
    "    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ",
    "      ░▒▓█████████████▓▒░░▒▓████████▓▒░▒▓████████▓▒░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░ ",
    "                         W E L C O M E   T O   S A B I T ' S   T E R M I N A L                       "
  ]

const generateRandomLine = (length: number = 140) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%^&*()-=+[]{}|;:,.<>?/~'
  return Array.from({ length })
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('')
}

  useEffect(() => {
    const render = () => {
      const elapsed = Date.now() - startTime.current

      if (!showAsciiMessage) {
        setRandomLines((prev) => {
          const newLine = generateRandomLine()
          const updated = [...prev, newLine]
          return updated.slice(-30)
        })
      }

      if (elapsed > 2000 && !showAsciiMessage) {
        setShowAsciiMessage(true)
      }

      if (elapsed > 4500 && !readyForEnter) {
        setReadyForEnter(true)
      }

      requestAnimationFrame(render)
    }

    render()
  }, [showAsciiMessage, readyForEnter])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (readyForEnter && e.key === 'Enter') {
        onComplete()
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [readyForEnter, onComplete])

  return (
    <Box
      bg="black"
      color="green.300"
      fontFamily="'Menlo', 'Monaco', 'SFMono-Regular', 'Courier New', monospace"
      fontSize="sm"
      lineHeight="1.6"
      px={6}
      py={4}
      w="100%"
      h="100%"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent={showAsciiMessage ? 'center' : 'flex-end'}
      alignItems="flex-start"
    >
{!showAsciiMessage && (
  <Box
    w="100%"
    overflow="hidden"
    fontFamily="'Menlo', 'Monaco', 'SFMono-Regular', 'Courier New', monospace'"
    fontSize="sm"
    lineHeight="1.6"
    textAlign="left"
  >
    {randomLines.map((line, idx) => (
<Text
  key={idx}
  whiteSpace="pre"
  isTruncated={false}
  noOfLines={1}
>
  {line}
</Text>
    ))}
  </Box>
)}

      {showAsciiMessage && (
        <Box w="100%" mt={2}>
         <pre style={{ whiteSpace: 'pre', color: '#68D391', margin: 0 }}>
  {asciiArt.join('\n')}
</pre>

          <Text mt={2} color="green.200">
            <Box as="span" className="blinking-cursor">█</Box>
          </Text>

          {readyForEnter && (
            <Text mt={1} fontStyle="italic" opacity={0.7}>
              Press ENTER to continue...
            </Text>
          )}
        </Box>
      )}
    </Box>
  )
}

export default BootScreen
