import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useColorModeValue, useColorMode } from '@chakra-ui/react';

const ParticlesBackground = () => {
  const { colorMode } = useColorMode();
  const particlesInit = useCallback(async (engine: unknown) => {
    await loadFull(engine as any);
  }, []);

  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const particleColor = useColorModeValue('#1a202c', '#ffffff');

  return (
    <Particles
      key={colorMode}
      id="tsparticles"
      init={particlesInit}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
      options={{
        background: { color: bgColor },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' } },
          modes: { repulse: { distance: 100, duration: 1 } },
        },
        particles: {
          color: { value: particleColor },
          links: { 
            enable: true, 
            color: particleColor, 
            distance: 150,
            opacity: 0.4,
            width: 1
          },
          move: { enable: true, speed: 1 },
          number: { value: 80 },
            shape: {
                type: 'star',
                options: {
                polygon: { nb_sides: 5 },
                },
            },
          opacity: { value: 0.4},
          size: { value: 2.5 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
