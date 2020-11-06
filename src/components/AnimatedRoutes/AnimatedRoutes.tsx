import React from 'react';
import { Router, useLocation } from '@reach/router';
import { useTransition, animated, config } from 'react-spring';
import useMeasure from 'react-use-measure';
import { Box } from '@chakra-ui/core';

import Home from '@components/Home';
import About from '@components/About';
import Contact from '@components/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();
  const [ref, { height }] = useMeasure();
  const transitions = useTransition(location, (loc) => loc.pathname, {
    from: {
      position: 'absolute',
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  });

  return (
    <Box position="relative" height={height}>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          style={{ ...props, top: '0', left: '0', right: '0' }}
          key={key}
          ref={ref}
        >
          <Router location={item}>
            <Home path="/" />
            <About path="/about" />
            <Contact path="/contact" />
          </Router>
        </animated.div>
      ))}
    </Box>
  );
};

export default AnimatedRoutes;
