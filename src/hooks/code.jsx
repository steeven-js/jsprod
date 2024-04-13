import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = ({ children, className, ...rest }) => {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter
      {...rest}
      PreTag="div"
      children={String(children).replace(/\n$/, '')}
      language={match[1]}
      style={dracula}
    />
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};

Code.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Code;
