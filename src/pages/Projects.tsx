import { Box, Container, Heading, SimpleGrid, Text, VStack, Image, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Distributed MapReduce Framework',
    summary: 'Built a fault-tolerant distributed MapReduce system.',
    link: '/projects/mapreduce',
    image: '/mapreduce.jpg',
    technologies: ['Python', 'Multithreading', 'TCP', 'UDP']
  },
  {
    title: 'Insta485',
    summary: 'Instagram-inspired full-stack social media app.',
    link: '/projects/insta485',
    image: '/insta485.jpg',
    technologies: ['Python', 'Flask', 'React']
  },
  {
    title: 'League of Legends Position Analysis',
    summary: 'Analyzed pro match data to assess role impact.',
    link: '/projects/lol-analysis',
    image: '/lol-analysis.jpg',
    technologies: ['Python', 'Pandas', 'Scikit-learn']
  }
]

const Projects = () => {
  return (
    <Box w="100vw" maxW="100%" position="relative" >
      <Container maxW="container.xl" centerContent px={4}>
        <VStack gap={8} align="stretch" w="100%">
          <Heading as="h1" size="xl" textAlign="center">
            My Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="100%">
            {projects.map((project, index) => (
              <ChakraLink
                as={Link}
                to={project.link}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  key={index}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
                >
                  <Image src={project.image} alt={project.title} w="100%" h="auto" />
                  <Box p={6}>
                    <Heading as="h3" size="md" mb={2} color="blue.500">
                      {project.title}
                    </Heading>
                    <Text mb={2}>{project.summary}</Text>
                    <Box>
                      {project.technologies.map((tech, techIndex) => (
                        <Text
                          key={techIndex}
                          as="span"
                          bg="blue.100"
                          color="blue.800"
                          px={2}
                          py={1}
                          borderRadius="md"
                          fontSize="sm"
                          mr={2}
                          mb={2}
                          display="inline-block"
                        >
                          {tech}
                        </Text>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </ChakraLink>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects
