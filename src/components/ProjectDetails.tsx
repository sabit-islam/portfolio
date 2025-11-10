import { Box, Container, Heading, Text, VStack, Link as ChakraLink } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const projectData: Record<string, {
  title: string,
  description: string,
  github?: string
  source?: string
  stack?: Array<string>

}> = {
  mapreduce: {
    title: 'Distributed MapReduce Framework',
    description: `Engineered a distributed MapReduce system from scratch, including custom Manager and Worker nodes communicating via TCP and UDP sockets. Designed a multithreaded Manager to assign map and reduce tasks, track task completion, and implement fault-tolerant heartbeat monitoring to detect and recover from worker failures. Developed a temporary directory structure to manage intermediate task outputs and orchestrated full job lifecycles from partitioning input to cleanup.`,
    source: `EECS 485`
  },
  insta485: {
    title: 'Instagram Clone',
    description: `Developed a full-stack social media web application inspired by Instagram, enabling user authentication, profile management, post creation, and real-time commenting features using Flask and React. Engineered a dynamic, responsive front-end interface and integrated a RESTful API for seamless communication between the client and server.`,
    source: 'EECS 485'
  },
  'league-analysis': {
    title: 'League of Legends Position Analysis',
    description: `Analyzed 116,016 rows of in-game data from 9,668 professional League of Legends matches to assess how player positions impact performance metrics. Conducted EDA and built a RandomForestClassifier using one-hot encoding and standard scaling, achieving 96.27% accuracy.`,
    github: 'https://sabit-islam.github.io/League-Of-Legends-Match-Analysis/',
    source: 'EECS 398-02'
  },
  'image-resize': { 
    title: `Image Resizer`,
    description: `tbd`,
    source:  `EECS 280`
  },
  euchre: { 
    title: 'Euchre - CLI Card Game', 
    description: 'tbd',
    source: 'EECS 280'
  },
  'text-editor': { 
    title: 'Text Editor', 
    description: 'tbd',
    source: 'EECS 280'
  },
  'post-classifier': {
    title: 'Forum post classifier model', 
    description: 'TBD',
    source: 'EECS 280'
  },
  mario:{
    title:"Rescue the Countess",
    description: 'TBD',
    source:"EECS 281"
  },
  asmbler: {
    title: "Assembler & Simulator for LC-2K Assembly Language",
    description: 'TBD',
    source: "EECS 370"
  },
  linker: {
    title:"File Linker for LC-2K Assembly",
    description: "tbd", 
    source: "EECS 370"
  },
  cache: {
    title: "Cache Simulator",
    description: "tbd",
    source: "EECS 370"
  },
  search:{
    title:"Search Engine",
    description: "tbd",
    source: "EECS 485"
  }

  
}

const ProjectDetails = () => {
  const { projectId = '' } = useParams()
  const project = projectData[projectId]

  if (!project) return <Text>Project not found.</Text>

  return (
    <Box w="100vw" maxW="100%" position="relative">
      <Container maxW="container.md" py={10}>
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="xl">{project.title}</Heading>
    {/*      <Image src={project.image} alt={project.title} borderRadius="md" /> */}
          <Text fontSize="md">{project.description}</Text>
          {project.github && (
            <ChakraLink href={project.github} isExternal color="blue.400" fontWeight="bold">
            Check it out!
          </ChakraLink>
          )}
        </VStack>
      </Container>
    </Box>
  )
}

export default ProjectDetails
