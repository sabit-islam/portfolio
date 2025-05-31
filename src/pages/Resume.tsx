import { Box, Container, Heading, VStack, Text, Stack, Divider } from '@chakra-ui/react'

const Resume = () => {
  return (
    <Box w="100vw" maxW="100%" position="relative">
      <Container maxW="container.md" centerContent px={4}>
        <VStack spacing={6} align="stretch" py={10}>

          {/* Contact Information */}
          <Box>
            <Heading as="h1" size="xl" textAlign="center">Sabit Islam</Heading>
            <Text textAlign="center">Woodhaven, MI • sabit@umich.edu</Text>
            <Text textAlign="center">
              <a href="https://linkedin.com/in/sabit-islam" target="_blank" rel="noopener noreferrer">linkedin.com/in/sabit-islam</a> • <a href="https://github.com/sabit-islam" target="_blank" rel="noopener noreferrer">github.com/sabit-islam</a>
            </Text>
          </Box>

          <Divider />

          {/* Education */}
          <Box>
            <Heading as="h2" size="lg">Education</Heading>
            <Text fontWeight="bold">University of Michigan</Text>
            <Text>Bachelor of Science in Computer Science, Data Science — GPA: 3.6/4.0</Text>
            <Text>Ann Arbor, MI • May 2026</Text>
          </Box>

          <Divider />

          {/* Technical Skills */}
          <Box>
            <Heading as="h2" size="lg">Technical Skills</Heading>
            <Text><strong>Languages:</strong> C, C++, Python, R, Swift, Bash, SQL, JavaScript, Java, HTML/CSS, LaTeX</Text>
            <Text><strong>Developer Tools:</strong> Linux, MacOS, VS Code, Vim, AWS, Postman, Git, Firebase, Figma, Sketch</Text>
            <Text><strong>Technologies/Frameworks:</strong> Pandas, NumPy, Plotly, Scikit, Flask, React, Node, SwiftUI, RESTful APIs, JSON</Text>
          </Box>

          <Divider />

          {/* Experience */}
          <Box>
            <Heading as="h2" size="lg">Experience</Heading>
            <Stack spacing={4}>
              <Box>
                <Text fontWeight="bold">Apple Developer Foundation Program Instructor</Text>
                <Text>Henry Ford College, Dearborn, MI • June 2024 – June 2025</Text>
                <ul>
                  <li>Provided mentorship in Xcode, Swift, Sketch, and other iOS frameworks through challenge-based learning.</li>
                  <li>Facilitated hands-on app development experiences and emphasized creation of functional prototypes.</li>
                  <li>Curated a structured curriculum introducing students to iOS development via engaging challenge-based projects.</li>
                </ul>
              </Box>
              <Box>
                <Text fontWeight="bold">Renaissance iOS Developer Intern</Text>
                <Text>Apple Developer Academy - MSU, Detroit, MI • July 2023 – June 2024</Text>
                <ul>
                  <li>Partnered with MSU Community Music School to develop a logistics app benefiting over 200 students.</li>
                  <li>Utilized native iOS frameworks, Xcode, Sketch, and Git to implement features.</li>
                  <li>Applied human-centered design and client-centric development to ensure user-focused outcomes.</li>
                </ul>
              </Box>
            </Stack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Resume
