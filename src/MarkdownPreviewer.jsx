import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
});

const initialMarkdown = `
# Heading 1
## Heading 2
### Heading 3

#### Example table

| Header 1 | Header 2|
| -------- | --------|
| Cell 1   | Cell 2  |
| Cell 3   | Cell 4  |

[Link](https://www.example.com)
\`inline code\`
\`\`\`
// Code block
function example() {
  return 'Hello, World!';
}
\`\`\`

This is some text. You can **bold** or _italicize_ text as well.
- List item 1
- List item 2

> Blockquote

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Bald_Eagle_Head_2_(6021915997).jpg" alt="Bald Eagle" style="max-width: 300px; max-height: 300px;">
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  useEffect(() => {
    const preview = document.getElementById('preview');
    preview.innerHTML = marked(markdown);
  }, [markdown]);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <div>
        {/* <h2>Markdown Previewer</h2> */}
      </div>
      <div className="container">
        <div className="editor-container">
          <h3>Editor</h3>
          <textarea
            id="editor"
            value={markdown}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="preview-container">
          <h3>Preview</h3>
          <div id="preview"></div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownPreviewer;
