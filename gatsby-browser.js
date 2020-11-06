import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/core';

const theme = extendTheme({
  fonts: {
    heading: '"Kumbh Sans", serif',
    body: '"Kumbh Sans", system-ui, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        overflowX: 'hidden',
        overflowY: 'scroll',
      },
      '.ghost-content': {
        hr: {
          position: 'relative',
          display: 'block',
          width: '100%',
          margin: '2.5em 0 3.5em',
          padding: '0',
          height: '1px',
          border: '0',
          borderTop: '1px solid #999999',
        },
        'audio, canvas, iframe, img, svg, video': {
          margin: 'auto',
        },
        fieldset: {
          margin: '0',
          padding: '0',
          border: '0',
        },
        textarea: {
          resize: 'vertical',
        },
        'p, ul, ol, dl, blockquote': {
          margin: '1.5rem 0 1.5em 0',
        },
        'ol, ul': {
          paddingLeft: '1.3em',
          paddingRight: '1.5em',
        },
        'ol ol, ul ul, ul ol, ol ul': {
          margin: '0.5em 0 1em',
        },
        ul: {
          listStyle: 'disc',
        },
        li: {
          margin: '0.5em 0',
          paddingLeft: '0.3em',
          lineHeight: '1.6em',
        },
        dt: {
          float: 'left',
          margin: '0 20px 0 0',
          width: '120px',
          color: '#999999',
          fontWeight: '500',
          textAlign: 'right',
        },
        dd: {
          margin: '0 0 5px 0',
          textAlign: 'left',
        },
        blockquote: {
          margin: '1.5em 0',
          padding: '0 2em 0 2em',
          borderLeft: '#999999 2px solid',
        },
        'blockquote p': {
          margin: '0.8em 0',
          fontSize: '1.2em',
          fontWeight: '300',
        },
        'blockquote small': {
          display: 'inline-block',
          margin: '0.8em 0 0.8em 1.5em',
          fontSize: '0.9em',
          opacity: '0.8',
        },
        'blockquote small:before': {
          content: `\\2014 \\00A0`,
        },
        'blockquote cite': {
          fontWeight: 'bold',
        },
        'blockquote cite a': {
          fontWeight: 'normal',
        },
        a: {
          color: '#5F7D99',
          textDecoration: 'none',
        },
        'a:hover': {
          textDecoration: 'underline',
        },
        'h1, h2, h3, h4, h5, h6': {
          marginTop: '0',
          lineHeight: '1.15',
          fontWeight: '600',
          textRendering: 'optimizeLegibility',
        },
        h1: {
          margin: '0 0 0.5em 0',
          fontSize: '3.3rem',
          fontWeight: '600',
        },
        '@media (max-width: 500px)': {
          h1: {
            fontSize: '2.2rem',
          },
          h2: {
            fontSize: '1.8rem',
          },
          h3: {
            fontSize: '1.7rem',
          },
        },
        h2: {
          margin: '1.5em 0 0.5em 0',
          fontSize: '2.2rem',
        },
        h3: {
          margin: '1.5em 0 0.5em 0',
          fontSize: '1.8rem',
          fontWeight: 500,
        },
        h4: {
          margin: '1.5em 0 0.5em 0',
          fontSize: '1.6rem',
          fontWeight: 500,
        },
        h5: {
          margin: '1.5em 0 0.5em 0',
          fontSize: '1.4rem',
          fontWeight: 500,
        },
        h6: {
          margin: '1.5em 0 0.5em 0',
          fontSize: '1.4rem',
          fontWeight: 500,
        },
        figure: {
          display: 'flex',
          justifyContent: 'center',
        },
        // Koenig Styles
        '.kg-bookmark-card': {
          width: '100%',
          marginTop: 0,
        },
        '.kg-bookmark-container': {
          display: 'flex',
          minHeight: '148px',
          color: 'black',
          fontFamily: '"Kumbh Sans", system-ui, sans-serif',
          textDecoration: 'none',
          borderRadius: '3px',
          boxShadow:
            '0 2px 5px -1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.09)',
        },

        '.kg-bookmark-container:hover': {
          color: 'black',
          textDecoration: 'none',
          boxShadow:
            '0 2px 5px -1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.09)',
        },

        '.kg-bookmark-content': {
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: '20px',
        },

        '.kg-bookmark-title': {
          color: '#999999',
          fontSize: '1.6rem',
          lineHeight: '1.5em',
          fontWeight: 600,
          transition: 'color 0.2s ease-in-out',
        },

        '.kg-bookmark-container:hover .kg-bookmark-title': {
          color: 'black',
        },

        '.kg-bookmark-description': {
          display: '-webkit-box',
          overflowY: 'hidden',
          marginTop: '12px',
          maxHeight: '48px',
          color: '#999999',
          fontSize: '1.5rem',
          lineHeight: '1.5em',
          fontWeight: 400,

          '-webkit-line-clamp': 2,
          '-webkit-box-orient': 'vertical',
        },

        '.kg-bookmark-thumbnail': {
          position: 'relative',
          minWidth: '33%',
          maxHeight: '100%',
        },

        '.kg-bookmark-thumbnail img': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '0 3px 3px 0',

          objectFit: 'cover',
        },

        '.kg-bookmark-metadata': {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: '14px',
          color: '#999999',
          fontSize: '1.5rem',
          fontWeight: 400,
        },

        '.kg-bookmark-icon': {
          marginRight: '8px',
          width: '22px',
          height: '22px',
        },

        '.kg-bookmark-author': {
          lineHeight: '1.5em',
        },

        '.kg-bookmark-author:after': {
          content: '•',
          margin: '0 6px',
        },

        '.kg-bookmark-publisher': {
          overflow: 'hidden',
          maxWidth: '240px',
          lineHeight: '1.5em',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },

        // Gallery Styles
        '.kg-gallery-container': {
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1040px',
          width: '100%',
        },

        '.kg-gallery-row': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        },

        '.kg-gallery-image img': {
          display: 'block',
          margin: 0,
          width: '100%',
          height: '100%',
        },

        '.kg-gallery-row:not(:first-of-type)': {
          margin: '0.75em 0 0 0',
        },

        '.kg-gallery-image:not(:first-of-type)': {
          margin: '0 0 0 0.75em',
        },

        '.kg-gallery-card + .kg-image-card.kg-width-wide, .kg-gallery-card + .kg-gallery-card, .kg-image-card.kg-width-wide + .kg-gallery-card, .kg-image-card.kg-width-wide + .kg-image-card.kg-width-wide': {
          margin: '-2.25em 0 3em',
        },
      },
    },
  },
});

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>;
};

/**
 * Trust All Scripts
 *
 * This is a dirty little script for iterating over script tags
 * of your Ghost posts and adding them to the document head.
 *
 * This works for any script that then injects content into the page
 * via ids/classnames etc.
 *
 */
const trustAllScripts = () => {
  const scriptNodes = document.querySelectorAll(
    '.load-external-scripts script'
  );

  for (let i = 0; i < scriptNodes.length; i += 1) {
    const node = scriptNodes[i];
    const s = document.createElement('script');
    s.type = node.type || 'text/javascript';

    if (node.attributes.src) {
      s.src = node.attributes.src.value;
    } else {
      s.innerHTML = node.innerHTML;
    }

    document.getElementsByTagName('head')[0].appendChild(s);
  }
};

export const onRouteUpdate = () => {
  trustAllScripts();
};
