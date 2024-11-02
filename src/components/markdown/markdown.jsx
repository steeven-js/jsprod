import './code-highlight-block.css';

import { useMemo } from 'react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

import Link from '@mui/material/Link';

import { isExternalLink } from 'src/routes/utils';
import { RouterLink } from 'src/routes/components';

import { Image } from '../image';
import { StyledRoot } from './styles';
import { markdownClasses } from './classes';
import { htmlToMarkdown, isMarkdownContent } from './html-to-markdown';

// ----------------------------------------------------------------------

export function Markdown({ content: initialContent, firstLetter = false, sx, ...other }) {
  const processedContent = useMemo(() => {
    if (isMarkdownContent(`${initialContent}`)) {
      return initialContent;
    }
    return htmlToMarkdown(`${initialContent}`.trim());
  }, [initialContent]);

  return (
    <StyledRoot
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={components}
      className={markdownClasses.root}
      sx={sx}
      {...other}
    >
      {processedContent}
    </StyledRoot>
  );
}

const components = {
  img: ({ src, alt, ...other }) => (
    <Image
      src={src}
      alt={alt}
      ratio="16/9"
      className={markdownClasses.content.image}
      sx={{ borderRadius: 2 }}
      {...other}
    />
  ),
  a: ({ href, children, ...other }) => {
    if (!href) return null;

    const linkProps = isExternalLink(href)
      ? { target: '_blank', rel: 'noopener' }
      : { component: RouterLink };

    return (
      <Link {...linkProps} href={href} className={markdownClasses.content.link} {...other}>
        {children}
      </Link>
    );
  },
  pre: ({ children }) => (
    <div className={markdownClasses.content.codeBlock}>
      <pre>{children}</pre>
    </div>
  ),
  code: ({ className, children, ...other }) => {
    const language = /language-(\w+)/.exec(className || '');

    return language ? (
      <code {...other} className={className}>
        {children}
      </code>
    ) : (
      <code {...other} className={markdownClasses.content.codeInline}>
        {children}
      </code>
    );
  },
};
