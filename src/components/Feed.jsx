// src/components/Feed.jsx
import React from 'react';
import Post from './Post';

function Feed() {
  // Datos de ejemplo para los posts
  const posts = [
    { id: 1, title: 'Empresa', body: 'elwkgh...hwieofw' },
    { id: 2, title: 'Empresa', body: 'elwkgh...hwieofw' },
    { id: 3, title: 'Sony', body: 'cuerpo del texto'},
  ];

  return (
    <div className="feed">
      {/* Componente para Publicar */}
      <div className="card feed__inputContainer">
        <input className="feed__input" type="text" placeholder="Qué quieres compartir en la red?" />
        {/* Aquí irían los iconos de adjuntar o no se alch */}
      </div>

      {/* Lista de Publicaciones */}
      {posts.map(post => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default Feed;