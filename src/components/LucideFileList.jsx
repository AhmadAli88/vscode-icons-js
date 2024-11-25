/* eslint-disable no-unused-vars */
import React from 'react';
import { 
  File, 
  FileText, 
  FileCode,
  FileJson,
  Folder,
  FolderOpen,
  Image,
  Package,
  FileIcon
} from 'lucide-react';

const FileList = () => {
  const files = [
    { name: 'index.js', type: 'file' },
    { name: 'styles.css', type: 'file' },
    { name: 'package.json', type: 'file' },
    { name: 'assets', type: 'folder', open: false },
    { name: 'src', type: 'folder', open: true },
  ];

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    
    switch (extension) {
      case 'js':
      case 'jsx':
      case 'ts':
      case 'tsx':
        return <FileCode className="text-blue-500" size={20} />;
      case 'css':
      case 'scss':
      case 'less':
        return <FileText className="text-purple-500" size={20} />;
      case 'json':
        return <FileJson className="text-yellow-500" size={20} />;
      case 'md':
      case 'txt':
        return <FileText className="text-gray-500" size={20} />;
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
        return <Image className="text-green-500" size={20} />;
      default:
        return <File className="text-gray-500" size={20} />;
    }
  };

  const getFolderIcon = (isOpen) => {
    return isOpen ? (
      <FolderOpen className="text-yellow-500" size={20} />
    ) : (
      <Folder className="text-yellow-500" size={20} />
    );
  };

  return (
    <div className="font-sans p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">File Explorer</h2>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li 
            key={index} 
            className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
          >
            {file.type === 'file' ? (
              getFileIcon(file.name)
            ) : (
              getFolderIcon(file.open)
            )}
            <span className="text-sm text-gray-700">{file.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;