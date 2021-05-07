import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;

    &::-webkit-scrollbar {
      background-color: #121212;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(178, 178, 178, .4);
      border-radius: .5rem;
      border: 4px solid transparent;
      background-clip: content-box;
    }

    &::-webkit-scrollbar-thumb:hover{
      background-color: rgba(178, 178, 178, .6);
    }

    @media (min-width: 1024px) {
      overflow-y: scroll;
      overscroll-behavior-y: contain;
    }
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  button {
    border: none;
  }

  html{
    font-family: Helvetica, Arial, sans-serif;
  }
`;
export default GlobalStyles;
