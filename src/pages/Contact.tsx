import { Box, Container, Heading, Text, VStack, Input, Textarea, Button, HStack, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <Box w="100vw" maxW="100%" position="relative">
      <Container maxW="container.xl" centerContent px={4}>
        <VStack gap={8} align="stretch" w="100%">
          <Heading as="h1" size="xl" textAlign="center">
            Get in Touch
          </Heading>

          <Box maxW="600px" mx="auto" w="100%">
            <form onSubmit={handleSubmit}>
              <VStack gap={4}>
                <Input
                  placeholder="Your Name"
                  size="lg"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  size="lg"
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  size="lg"
                  rows={6}
                  required
                />
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  width="100%"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>

          <Box textAlign="center" mt={8}>
            <Text fontSize="lg" mb={4}>
              Or connect with me on social media:
            </Text>
            <HStack gap={6} justify="center">
              <Icon
                as={FaGithub}
                w={8}
                h={8}
                cursor="pointer"
                _hover={{ color: 'blue.500' }}
                onClick={() => window.open('https://github.com/sabit-islam', '_blank')}
              />
              <Icon
                as={FaLinkedin}
                w={8}
                h={8}
                cursor="pointer"
                _hover={{ color: 'blue.500' }}
                onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')}
              />
              <Icon
                as={FaEnvelope}
                w={8}
                h={8}
                cursor="pointer"
                _hover={{ color: 'blue.500' }}
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
              />
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 