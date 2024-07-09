import React from 'react';

function NoMatch({children}){
  return (
    <div>
      <h1 className="text-3xl">{children}</h1>
    </div>
  );
}

export default NoMatch;