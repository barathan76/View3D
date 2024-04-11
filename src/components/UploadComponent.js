import React, { useState } from 'react';

const UploadComponent = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        onUpload(uploadedFile);
    };

    return (
        <div className="dropzone">
            <input type="file" accept=".glb" onChange={handleFileChange} />
            <p>Choose a 3D object file in .glb format.</p>
            {file && <p>File selected: {file.name}</p>}
        </div>
    );
};

export default UploadComponent;
