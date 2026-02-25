import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Optional: scroll to the top of the blog section when page changes
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="py-16 lg:py-24" style={{ background: 'linear-gradient(to bottom, #F3F4F6, #D1D5DB)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-800 uppercase">Blog & Notícias</h2>
          <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-lg text-gray-600">Mantenha-se informado sobre as últimas novidades e melhores práticas em segurança do trabalho.</p>
        </div>
        {/* Updated Grid for Better Responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col">
              <Link to={`/blog/${post.id}`} className="block">
                {/* Responsive Image Height */}
                <img src={post.img} alt={post.title} className="w-full h-48 sm:h-56 object-cover" />
              </Link>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm font-bold text-bs-red uppercase">{post.category}</p>
                <h3 className="mt-2 text-xl font-bold text-bs-green flex-grow"><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                <p className="mt-4 text-gray-600">{post.excerpt}</p>
                <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <Link to={`/blog/${post.id}`} className="font-bold text-bs-green hover:text-bs-green/80 transition-colors">
                    Leia mais →
                  </Link>
                  <div className="flex items-center space-x-2 text-bs-metal-gray">
                    <button
                      title="Compartilhar no WhatsApp"
                      className="hover:text-bs-green transition-colors"
                      onClick={() => {
                        const url = `${window.location.origin}/blog/${post.id}`;
                        const text = `Confira este artigo: ${post.title} - ${url}`;
                        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white text-bs-green hover:bg-gray-100 shadow-sm'
                }`}
            >
              Anterior
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`w-10 h-10 rounded-md font-medium transition-colors flex items-center justify-center ${currentPage === number
                    ? 'bg-bs-green text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                    }`}
                >
                  {number}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white text-bs-green hover:bg-gray-100 shadow-sm'
                }`}
            >
              Próxima
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
