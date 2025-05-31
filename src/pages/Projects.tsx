import { Box, Container, Heading, SimpleGrid, Text, VStack, Image, IconButton, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const MotionBox = motion(Box)

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project. What technologies did you use? What problems did it solve?',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourproject1',
    demo: 'https://yourproject1.com'
  },
  {
    title: 'Project 2',
    description: 'Description of your second project. Highlight your role and the impact it had.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['Python', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/yourproject2',
    demo: 'https://yourproject2.com'
  }
  // Add more projects as needed
]

const Projects = () => {
  return (
    <Box w="100vw" maxW="100%" position="relative">
      <Container maxW="container.xl" centerContent px={4}>
        <VStack gap={8} align="stretch" w="100%">
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            bgGradient="linear(to-r, teal.300, blue.500)"
            bgClip="text"
          >
            My Projects
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="100%">
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                borderWidth="1px"
                borderRadius="2xl"
                overflow="hidden"
                bg="whiteAlpha.50"
                boxShadow="lg"
                backdropFilter="blur(10px)"
                transitionProperty="transform, box-shadow"
                transitionDuration="0.3s"
                _hover={{ transform: 'scale(1.03)', boxShadow: 'xl' }}
              >
                <Image src={project.image} alt={project.title} w="100%" h="200px" objectFit="cover" />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2} color="white">
                    {project.title}
                  </Heading>
                  <Text mb={4} noOfLines={3} color="gray.300">
                    {project.description}
                  </Text>
                  <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
                    {project.technologies.map((tech, techIndex) => (
                      <Text
                        key={techIndex}
                        px={3}
                        py={1}
                        bg="blue.600"
                        color="white"
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        {tech}
                      </Text>
                    ))}
                  </Box>
                  <HStack mt={4} spacing={4}>
                    <IconButton
                      icon={<FaGithub />}
                      aria-label="GitHub"
                      as="a"
                      href={project.github}
                      target="_blank"
                      variant="ghost"
                      colorScheme="whiteAlpha"
                    />
                    <IconButton
                      icon={<FaExternalLinkAlt />}
                      aria-label="Live Demo"
                      as="a"
                      href={project.demo}
                      target="_blank"
                      variant="ghost"
                      colorScheme="whiteAlpha"
                    />
                  </HStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects
