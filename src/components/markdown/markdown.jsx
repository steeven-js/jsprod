import { StyledRoot } from './styles';

// ----------------------------------------------------------------------

export function Markdown({ content, firstLetter = false, ...other }) {
  return (
    <StyledRoot
      firstLetter={firstLetter}
      dangerouslySetInnerHTML={{ __html: content }}
      {...other}
    />
  );
}
