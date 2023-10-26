import { Container, Stack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';

import Button from '@mui/material/Button';

import './About.css';

function AboutHero() {
  return (
    <div className="AboutHero">
      <Container
        maxW={'9xl'}
        style={{
          padding: '0px 20% 64px',
        }}
      >
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 20 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
            >
              <Text as={'span'} color={'#fff'}>
                Service Excellence,
              </Text>
              <br />
              <Text as={'span'} color={'var(--primary-color-1)'}>
                For Student Housing
              </Text>
            </Heading>
            <Text color={'#fff'}>
              More than just a service, it's our commitment to ensure maximum satisfaction for all
              customers.
            </Text>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
              <Button to="/about" variant="contained" className="btn">
                About us
              </Button>
            </Stack>
          </Stack>
          <Flex flex={1} justify={'center'} align={'center'} position={'relative'} w={'full'}>
            <Box position={'relative'} height={'400px'} width={'full'} overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={'../../../assets/images/about-hero.png'}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
}

export default AboutHero;
