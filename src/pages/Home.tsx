import { Box, Text, useColorModeValue, Button, Image, Flex, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import '../index.css'; 


const Home = () => {
  const MotionBox = motion(Box)
  const MotionImage = motion(Image)

  const MotionSpan = motion.span

  const headingText = "Welcome to My Portfolio!"

  const textColor = useColorModeValue('gray.800', 'gray.100')

  return (
    <Box position="relative" zIndex={1} maxH="100vh" display="flex" alignItems="center" justifyContent="center"  py={12} px={4} >
      <Box maxW="container.lg" mx="auto">
        <MotionBox
          mt={{ base: 8, md: 16 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.25, ease: 'easeInOut' }}
          textAlign="center"
        >
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" >
            <Box flexShrink={0}>
              <Link href="https://www.linkedin.com/in/sabit-islam" isExternal>
                <MotionImage
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  borderRadius="full"
                  boxSize={{ base: "250px", md: "400px", lg: "500px" }}
                  display="block"
                  src='/sabit.png'
                  alt="im dead inside"
                  objectFit="cover"
                />
              </Link>
            </Box>
            <Box>
              <Text fontSize="4xl" fontWeight="bold">
                {headingText.split('').map((char, idx) => (
                  <MotionSpan
                    key={idx}
                    whileHover={{ y: -2, color: '#63b3ed' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    style={{ display: 'inline-block', whiteSpace: 'pre' }}
                  >
                    {char}
                  </MotionSpan>
                ))}
              </Text>
              <Text
                fontSize="xl"
                mt={4}
                color={textColor}
              >
                Senior at the University of Michigan, Ann Arbor, studying Computer Science and Data Science.
              </Text>
              <Button
                mt={6}
                size="lg"
                colorScheme="blue"
                variant="solid"
                as="a"
                href="/projects"
              >
                View My Projects
              </Button>
            </Box>
          </Flex>
        </MotionBox>
      </Box>
    </Box>
  )
}

export default Home
