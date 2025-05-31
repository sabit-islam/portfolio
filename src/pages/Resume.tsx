import { Box, Container, Heading, Text, VStack, Divider, SimpleGrid } from '@chakra-ui/react'

const Resume = () => {
  return (
    <Box w="100vw" maxW="100%" position="relative">
      <Container maxW="container.xl" centerContent px={4}>
        <VStack gap={8} align="stretch" w="100%">
          <Heading as="h1" size="xl" textAlign="center">
            Resume
          </Heading>

          {/* Education Section */}
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Education
            </Heading>
            <Box mb={6}>
              <Heading as="h3" size="md">
                University of Michigan
              </Heading>
              <Text color="gray.600">Bachelors of Science in Computer Science</Text>
              <Text color="gray.600">Bachelors of Science in Data Science</Text>
              <Text>Expected Gradution: May 2026, GPA: 3.6/4.0</Text>
              <Text mt={2}>
                Relevant Coursework: <br></br>
                • EECS 183: Elementary Programming Concepts <br></br>
                • EECS 201: Computer Science Pragmatics <br></br>
                • EECS 203: Discrete Mathematics <br></br>
                • EECS 280: Programming and Data Structures <br></br>
                • EECS 281: Data Structures and Algorithms <br></br>
                • EECS 370: Computer Organization <br></br>
                • EECS 376: Algorithm Design and Analysis <br></br>
                • EECS 398: Practical Data Science <br></br>
                • EECS 485: Web Systems <br></br>
                • MATH 214: Applied Linear Algebra <br></br>
                • MATH 425: Theoretical Probability <br></br>
                • DATASCI 101: Introduction to Data Science <br></br>
                • DATASCI 306: Statistical Computing <br></br>
                <br></br>
                Future Planned Coursework: <br></br>
                • EECS 442: Computer Vision <br></br>
                • EECS 445: Machine Learning <br></br>
                • EECS 497: Human-Centered Software Engineering & Design<br></br>
                • EECS 482: Operating Systems <br></br>
                • EECS 491: Distributed Systems<br></br>


              </Text>
            </Box>
          </Box>

          <Divider />

          {/* Skills Section */}
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Technical Skills
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Programming Languages
                </Heading>
                <Text>Python, JavaScript, Java, C++</Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Web Technologies
                </Heading>
                <Text>React, Flask, HTML, CSS, Node.js</Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Databases
                </Heading>
                <Text>MongoDB, PostgreSQL, MySQL</Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Tools & Others
                </Heading>
                <Text>Git, Docker, AWS, Linux</Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Divider />

          {/* Experience Section */}
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Experience
            </Heading>
            <Box mb={6}>
              <Heading as="h3" size="md">
                Software Development Intern
              </Heading>
              <Text color="gray.600">Company Name</Text>
              <Text>Summer 2023</Text>
              <Text mt={2}>
                • Developed and maintained web applications using React and Node.js
                • Collaborated with team members to implement new features
                • Participated in code reviews and improved code quality
              </Text>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Resume 