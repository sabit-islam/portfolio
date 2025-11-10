import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import type {LinkProps as RouterLinkProps } from 'react-router-dom'
import {  forwardRef } from 'react'
import type { ComponentProps } from 'react'

type MotionLinkProps = BoxProps & RouterLinkProps & ComponentProps<typeof motion.div>

const MotionLinkBox = motion(
  forwardRef<HTMLAnchorElement, MotionLinkProps>((props, ref) => (
    <Box as={RouterLink} ref={ref} {...props} />
  ))
)


const projects = [
  {
    title: 'Distributed MapReduce Framework',
    summary: 'Built a fault-tolerant distributed MapReduce system.',
    link: '/projects/mapreduce',
    technologies: ['Python', 'Multithreading', 'TCP', 'UDP'],
  },
  {
    title: 'Insta485',
    summary: 'Instagram-inspired full-stack social media app.',
    link: '/projects/insta485',
    technologies: ['Python', 'Flask', 'React', 'mySQL'],
  },
  {
    title: 'League of Legends Position Analysis',
    summary: 'Analyzed Professional match data to assess role impact.',
    link: '/projects/lol-analysis',
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
  },
    {
    title: 'Image Resize Tool',
    summary: 'Built CLI tool to resize images by removing least crucial pixels.',
    link: '/projects/image-resize',
    technologies: ['C++'],
  },
    {
    title: 'Euchre - Card Game Player',
    summary: 'CLI Card Game for users to play against either humans or a bot!',
    link: '/projects/euchre',
    technologies: ['C++', 'Objects', 'Inheritance', 'Polymorphism'],
  },
    {
    title: 'Text Editor',
    summary: 'Text editor which operated within Terminal',
    link: '/projects/text-editor',
    technologies: ['C++', 'Linked Lists', 'Unit Testing'],
  },
    {
    title: 'Post Classifier',
    summary: 'Classifier that predicted which topic a post in our course most likely had been referencing.',
    link: '/projects/post-classifier',
    technologies: ["C++","Binary Search Trees", "Bag-Of-Words Model", "TF-IDF"],
  },
    {
    title: 'Rescue the Countess',
    summary: 'BFS and DFS to find shortest path from start to finish in a 3D-Space',
    link: '/projects/mario',
    technologies: ["C++", "BFS","DFS","idk man"],
  },
    {
    title: 'Assembler & Simulator for LC-2K Assembly Language',
    summary: 'C Program which assembled and properly simulated assembly code. ',
    link: '/projects/asmbler',
    technologies: ["C"],
  },
    {
    title: 'Search Engine',
    summary: 'Literally turned into Larry Page and birthed Google',
    link: '/projects/search',
    technologies: ["Python", "Bash","Distributed Systems", "TF-IDF",],
  },
  
]

const Projects = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box w="100%" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch" w="100%">
          <Heading as="h1" size="xl" textAlign="center">
            My Projects
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {projects.map((project, index) => (
          <MotionLinkBox
            key={index}
            to={project.link}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="lg"
            p={6}
            h="100%"
            display="flex"
            flexDirection="column"
            cursor="pointer"
            _hover={{ shadow: 'lg' }}
          >
                <Heading as="h3" size="md" mb={2} color="blue.500">
                  {project.title}
                </Heading>
                <Text mb={4} flex="1">
                  {project.summary}
                </Text>
                <Box mt="auto">
                  {project.technologies.map((tech, techIndex) => (
                    <Tag
                      key={techIndex}
                      colorScheme="blue"
                      mr={2}
                      mb={2}
                      fontSize="sm"
                    >
                      {tech}
                    </Tag>
                  ))}
                </Box>
              </MotionLinkBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects
