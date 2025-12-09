import React from 'react';
import './index.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Budget Travel Destinations in 2025',
      excerpt: 'Discover amazing places you can explore on a tight budget without compromising on experiences.',
      date: 'January 10, 2025',
      category: 'Budget Travel'
    },
    {
      id: 2,
      title: 'How AI is Revolutionizing Travel Planning',
      excerpt: 'Learn how artificial intelligence is transforming the way travelers plan their trips.',
      date: 'January 8, 2025',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Family Travel Guide: Making Everyone Happy',
      excerpt: 'Tips and tricks for planning family vacations that keep everyone entertained and stress-free.',
      date: 'January 5, 2025',
      category: 'Family Travel'
    },
    {
      id: 4,
      title: 'Adventure Travel: Best Adrenaline Activities',
      excerpt: 'From skydiving to rock climbing, discover the most thrilling adventure experiences worldwide.',
      date: 'January 2, 2025',
      category: 'Adventure'
    },
    {
      id: 5,
      title: 'Cultural Travel: Respecting Local Traditions',
      excerpt: 'Essential tips for being a respectful traveler and deeply engaging with local cultures.',
      date: 'December 28, 2024',
      category: 'Culture'
    },
    {
      id: 6,
      title: 'Solo Travel Safety: A Complete Guide',
      excerpt: 'Everything you need to know to travel safely and confidently as a solo traveler.',
      date: 'December 25, 2024',
      category: 'Solo Travel'
    }
  ];

  return (
    <div className="blog-container">
      <section className="blog-hero">
        <h1>Travel Blog</h1>
        <p>Tips, guides, and inspiration for your next adventure</p>
      </section>

      <section className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-category">{post.category}</div>
            <h3>{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-footer">
              <span className="blog-date">{post.date}</span>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </article>
        ))}
      </section>

      <section className="blog-newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get travel tips and recommendations delivered to your inbox</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default Blog;
