import React from 'react';
import { useParams } from 'react-router-dom';

const Redirect: React.FC = () => {
  const { option } = useParams<{ option: string }>();

  return (
    <div>
      <p>Redirecting to {option}...</p>
    </div>
  );
};

export default Redirect;
