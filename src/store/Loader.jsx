// Loader.js
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader color="#36d7b7" loading={loading} size={50} />
    </div>
  );
};

export default Loader;
