import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import { useMemo } from 'react';

const topics = [
  'Docker', 'Kubernetes', 'Python', 'React', 'React Native', 'Django', 'NextJs', 'Node.js', 'REST API', 'GraphQL', 'MongoDB', 'Redis', 'TypeScript', 'JavaScript', 'CI/CD', 'OAuth2'
];

const generateColors = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate pastel background color
  const h = hash % 360;
  const s = 50 + (hash % 30); // 50-80%
  const l = 85 + (hash % 10); // 85-95%

  const bgColor = `hsl(${h}, ${s}%, ${l}%)`;
  const textColor = `hsl(${h}, ${s}%, 25%)`; // Darker version for text

  return { bgColor, textColor };
};

const TopicCloud = () => {
  const topicsWithColors = useMemo(() =>
    topics.map(topic => ({
      name: topic,
      ...generateColors(topic)
    }))
    , []);

  return (
    <Flex
      flexDirection={'column'}
      py={{ base: '32px', md: '64px', lg: '96px' }}
      align={{ md: 'center' }}
    >
      <Heading variant={'h2'} align={'center'}>Topics Cloud</Heading>
      <Text variant={'lead'} mt={'16px'} align={'center'}>
        Find videos and courses on topics and much more
      </Text>
      <Flex
        flexWrap="wrap"
        gap={4}
        justify="center"
        align="center"
        width="100%"
        mt={'48px'}
      >
        {topicsWithColors.map((topic, index) => (
          <Box
            key={index}
            py={6}
            px={12}
            bg={topic.bgColor}
            color={topic.textColor}
            borderRadius="lg"
            fontSize="18px"
            fontWeight="600"
            textAlign="center"
            boxShadow="sm"
            lineHeight={'28px'}
          >
            {topic.name}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default TopicCloud