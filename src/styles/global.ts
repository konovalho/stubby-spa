import { createGlobalStyle } from 'styled-components';

import { Colors } from '@types';

export default createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: ${Colors.black};
    background-color: ${Colors.alabaster};
  }
`;
