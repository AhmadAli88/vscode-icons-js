/* eslint-disable  */
import React from 'react';
import { 
  DiJavascript, 
  DiCss3, 
  DiNpm,
  DiHtml5,
  DiReact 
} from 'react-icons/di';
import { 
  VscJson, 
  VscFile, 
  VscFolder, 
  VscFolderOpened 
} from 'react-icons/vsc';
import { 
  SiTypescript, 
  SiMarkdown,
  SiPrettier,
  SiEslint 
} from 'react-icons/si';

const FileList = () => {
  const files = [
    { name: 'index.js', type: 'file' },
    { name: 'styles.css', type: 'file' },
    { name: 'package.json', type: 'file' },
    { name: 'tsconfig.json', type: 'file' },
    { name: '.prettierrc', type: 'file' },
    { name: 'README.md', type: 'file' },
    { name: 'assets', type: 'folder', open: false },
    { name: 'src', type: 'folder', open: true },
  ];

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    const iconProps = { size: 22 };

    // Check for specific filenames first
    if (fileName === 'package.json') {
      return <DiNpm {...iconProps} className="text-red-500" />;
    }
    if (fileName === '.prettierrc') {
      return <SiPrettier {...iconProps} className="text-pink-500" />;
    }
    if (fileName === '.eslintrc') {
      return <SiEslint {...iconProps} className="text-purple-600" />;
    }

    // Then check extensions
    switch (extension) {
      case 'js':
      case 'jsx':
        return <DiJavascript {...iconProps} className="text-yellow-400" />;
      case 'ts':
      case 'tsx':
        return <SiTypescript {...iconProps} className="text-blue-600" />;
      case 'css':
      case 'scss':
      case 'sass':
        return <DiCss3 {...iconProps} className="text-blue-500" />;
      case 'html':
        return <DiHtml5 {...iconProps} className="text-orange-500" />;
      case 'json':
        return <VscJson {...iconProps} className="text-yellow-500" />;
      case 'md':
        return <SiMarkdown {...iconProps} className="text-gray-600" />;
      case 'jsx':
      case 'tsx':
        return <DiReact {...iconProps} className="text-blue-400" />;
      default:
        return <VscFile {...iconProps} className="text-gray-500" />;
    }
  };

  return (
    <div className="font-sans p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">File Explorer</h2>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li 
            key={index} 
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-150"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {file.type === 'folder' ? (
                file.open ? (
                  <VscFolderOpened size={22} className="text-yellow-500" />
                ) : (
                  <VscFolder size={22} className="text-yellow-500" />
                )
              ) : (
                getFileIcon(file.name)
              )}
            </div>
            <span className="text-sm text-gray-700">{file.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;