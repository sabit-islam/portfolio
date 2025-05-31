import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useColorMode,
  useColorModeValue,
  Spacer
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Box bg={bg} px={6} py={4} boxShadow="sm" position="sticky" top="0" zIndex="1000">
      <Flex alignItems="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl" color={color}>
          Sabit Islam
        </Link>
        <Spacer />
        <HStack spacing={6} align="center">

          <Link as={RouterLink} to="/projects" color={color} fontWeight="medium">
            Projects
          </Link>
          <Link as={RouterLink} to="/resume" color={color} fontWeight="medium">
            Resume
          </Link>
          <Link as={RouterLink} to="/contact" color={color} fontWeight="medium">
            Contact
          </Link>
          <IconButton
            size="sm"
            aria-label="Toggle Color Mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar