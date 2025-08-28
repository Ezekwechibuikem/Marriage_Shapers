
import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  image, 
  date, 
  author, 
  category,
  readTime
}) => {
  return (
    <Card className="blog-card h-100">
      <div className="blog-image-container">
        <Card.Img variant="top" src={image} className="blog-image" />
        {category && (
          <Badge bg="primary" className="blog-category">
            {category}
          </Badge>
        )}
      </div>
      <Card.Body>
        <div className="blog-meta">
          {date && <span className="blog-date">{date}</span>}
          {author && <span className="blog-author">By {author}</span>}
          {readTime && <span className="blog-read-time">{readTime} mins read</span>}
        </div>
        <Card.Title className="blog-title">
          <Link to={`/blog/${id}`}>{title}</Link>
        </Card.Title>
        <Card.Text className="blog-excerpt">{excerpt}</Card.Text>
        <Link to={`/blog/${id}`} className="blog-read-more">
          Read More
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
