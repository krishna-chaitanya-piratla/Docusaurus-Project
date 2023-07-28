// IncludeContent.js
import React from 'react';
import fs from 'fs';
import path from 'path';

const IncludeContent = () => {
  const sourceFilePath = path.resolve(__dirname, './docs/tutorial-basics/Conclusion.md');
  const content = fs.readFileSync(sourceFilePath, 'utf8');

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default IncludeContent;

