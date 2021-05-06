import React from 'react';

import withData from '../../with-data';

const UserProfile = ({ data, name, email }) => {
  return (
    <div className="container">
      <h1>{name}</h1>
      <h2>{email}</h2>
      posts:
      {data.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default withData(UserProfile);
