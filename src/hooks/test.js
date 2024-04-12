import { marked } from 'marked';
import { useState, useEffect } from 'react';

export function useMarkdownParser(markdownContent) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    if (markdownContent) {
      const parsedHtml = marked.parse(markdownContent);
      setHtmlContent(parsedHtml);
    }
  }, [markdownContent]);

  return htmlContent;
}
