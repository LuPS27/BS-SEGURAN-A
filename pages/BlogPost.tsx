import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import Markdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Post não encontrado</h2>
        <Link to="/" className="mt-4 inline-block text-bs-green hover:underline">
          Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <article className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-bs-green hover:underline inline-block">
            &larr; Voltar
          </Link>
          <button
            title="Compartilhar no WhatsApp"
            className="flex items-center space-x-2 text-bs-metal-gray hover:text-bs-green transition-colors"
            onClick={() => {
              const url = window.location.href;
              const text = `Confira este artigo: ${post.title} - ${url}`;
              window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
            }}
          >
            <span className="text-sm font-medium">Compartilhar</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
        <div className="mb-8">
          <p className="text-sm font-bold text-bs-red uppercase mb-2">{post.category}</p>
          <h1 className="text-3xl lg:text-5xl font-black text-gray-800 leading-tight mb-6">
            {post.title}
          </h1>
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="prose prose-lg max-w-none text-gray-700">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
