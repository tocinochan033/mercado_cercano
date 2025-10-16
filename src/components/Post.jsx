// src/components/Post.jsx
import React from 'react';

function Post({ title, body }) {
  return (
    <div className="card post">
      <div className="post__avatar"></div>
      <div className="post__body">
        <div className="post__header">
          <h4>{title}</h4>
        </div>
        <div className="post__description">
          <p>{body}</p>
        </div>
        {/* Aquí irían botones de Like, Comentar, Compartir */}
      </div>
    </div>
  );
}

export default Post;