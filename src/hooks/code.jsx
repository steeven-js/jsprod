import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Code = ({ children }) => (
    <SyntaxHighlighter style={materialDark} language=''>
      {children}
    </SyntaxHighlighter>
);

Code.propTypes = {
  children: PropTypes.node,
};

export default Code;
