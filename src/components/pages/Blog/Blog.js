
import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Hero from '../../common/Hero';
//import SectionTitle from '../../common/SectionTitle';
import BlogCard from '../../common/BlogCard';
//import blogImage2 from '../../../assets/images/blogs/blogimage2.jpg';

import './Blog.css';


// Placeholder images (in a real project, these would be imported from assets)
const heroImage = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const blogImage1 = 'https://images.unsplash.com/photo-1511405889574-b01de1da5441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const blogImage2 = 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const blogImage3 = 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const blogImage4 = 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80';
const blogImage5 = 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const blogImage6 = 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';

const Blog = () => {
  // Blog posts data
  const allBlogPosts = [
    {
      id: 1,
      title: "5 Biblical Principles for a Healthy Marriage",
      excerpt: "Discover how applying these 5 biblical principles can transform your marriage and bring you closer to God's design for relationships.",
      image: blogImage1,
      date: "July 15, 2025",
      author: "Pastor James",
      category: "Marriage",
      readTime: 5
    },
    {
      id: 2,
      title: "Communication Skills for Christian Couples",
      excerpt: "Learn effective communication techniques that align with Christian values to resolve conflicts and deepen your connection.",
      image: blogImage2,
      date: "July 10, 2025",
      author: "Dr. Rebecca Smith",
      category: "Communication",
      readTime: 7
    },
    {
      id: 3,
      title: "Preparing for Marriage: A Biblical Perspective",
      excerpt: "Important spiritual and practical steps to take before saying 'I do' that will help build a strong foundation for your marriage.",
      image: blogImage3,
      date: "July 5, 2025",
      author: "Michael Johnson",
      category: "Premarital",
      readTime: 6
    },
    {
      id: 4,
      title: "Rebuilding Trust After Betrayal",
      excerpt: "A Christ-centered approach to healing and rebuilding trust in your relationship after experiencing betrayal or hurt.",
      image: blogImage4,
      date: "June 28, 2025",
      author: "Pastor James",
      category: "Healing",
      readTime: 8
    },
    {
      id: 5,
      title: "Finding Purpose as a Single Christian",
      excerpt: "Embracing your season of singleness and discovering God's purpose for your life while preparing for a potential future relationship.",
      image: blogImage5,
      date: "June 20, 2025",
      author: "Sarah Thompson",
      category: "Singles",
      readTime: 5
    },
    {
      id: 6,
      title: "Navigating Finances as a Couple",
      excerpt: "Biblical principles for managing money together and avoiding common financial conflicts in marriage.",
      image: blogImage6,
      date: "June 15, 2025",
      author: "Dr. Rebecca Smith",
      category: "Finances",
      readTime: 6
    }
  ];
  
  // Categories
  const categories = [
    "All",
    "Marriage",
    "Communication",
    "Premarital",
    "Healing",
    "Singles",
    "Finances"
  ];
  
  // State for filtering and searching
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter posts based on category and search term
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Blog"
        subtitle="Insights and advice to help you build a stronger relationship based on biblical principles."
        image={heroImage}
        height="50vh"
      />
      
      {/* Blog Content */}
      <section className="section blog-content">
        <Container>
          <Row>
            {/* Sidebar */}
            <Col lg={3} className="mb-5 mb-lg-0">
              <div className="blog-sidebar">
                {/* Search */}
                <div className="sidebar-widget search-widget">
                  <h4 className="widget-title">Search</h4>
                  <InputGroup>
                    <Form.Control
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </InputGroup>
                </div>
                
                {/* Categories */}
                <div className="sidebar-widget categories-widget">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="categories-list">
                    {categories.map((category, index) => (
                      <li 
                        key={index} 
                        className={activeCategory === category ? 'active' : ''}
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="sidebar-widget recent-posts-widget">
                  <h4 className="widget-title">Recent Posts</h4>
                  <div className="recent-posts">
                    {allBlogPosts.slice(0, 3).map(post => (
                      <div className="recent-post" key={post.id}>
                        <div className="recent-post-image">
                          <img src={post.image} alt={post.title} />
                        </div>
                        <div className="recent-post-info">
                          <h6>{post.title}</h6>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
            
            {/* Blog Posts */}
            <Col lg={9}>
              {filteredPosts.length > 0 ? (
                <>
                  <div className="blog-filter-info mb-4">
                    <h4>
                      {activeCategory === "All" 
                        ? "All Articles" 
                        : `Articles in "${activeCategory}"`}
                      {searchTerm && ` containing "${searchTerm}"`}
                    </h4>
                    <p>{filteredPosts.length} articles found</p>
                  </div>
                  
                  <Row>
                    {filteredPosts.map(post => (
                      <Col lg={6} className="mb-4" key={post.id}>
                        <BlogCard
                          id={post.id}
                          title={post.title}
                          excerpt={post.excerpt}
                          image={post.image}
                          date={post.date}
                          author={post.author}
                          category={post.category}
                          readTime={post.readTime}
                        />
                      </Col>
                    ))}
                  </Row>
                </>
              ) : (
                <div className="no-posts-found text-center py-5">
                  <h3>No Articles Found</h3>
                  <p>Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
