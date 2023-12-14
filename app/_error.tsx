// pages/_error.tsx
import React from 'react';

const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => (
  <div>
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  </div>
);

export default ErrorPage;
