
import React, { useState } from 'react';
import UploadComponent from './components/UploadComponent';
import ViewerComponent from './components/ViewerComponent';

const App = () => {
  const [objectUrl, setObjectUrl] = useState(null);

  const handleUpload = (file) => {
    const objectUrl = URL.createObjectURL(file);
    setObjectUrl(objectUrl);
  };

  return (
    <div className="container">
      <h1>3D Object Viewer</h1>
      <UploadComponent onUpload={handleUpload} />
      {objectUrl && <ViewerComponent objectUrl={objectUrl} />}
    </div>
  );
};



export default App;
