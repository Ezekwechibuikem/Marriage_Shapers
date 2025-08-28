
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Hero from '../../common/Hero';
import SectionTitle from '../../common/SectionTitle';
import GalleryItem from '../../common/GalleryItem';

import './Gallery.css';

// Placeholder images (in a real project, these would be imported from assets)
const heroImage = 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const galleryImage1 = 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80';
const galleryImage2 = 'https://images.unsplash.com/photo-1529634667544-dc1ee6cb3e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const galleryImage3 = 'https://images.unsplash.com/photo-1511405889574-b01de1da5441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const galleryImage4 = 'https://images.unsplash.com/photo-1469571486292-b53601010376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const galleryImage5 = 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const galleryImage6 = 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const galleryImage7 = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80';
const galleryImage8 = 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const galleryImage9 = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';

const Gallery = () => {
  // Gallery data
  const allGalleryItems = [
    {
      id: 1,
      title: 'Marriage Retreat 2025',
      category: 'Retreats',
      image: galleryImage1
    },
    {
      id: 2,
      title: 'Couples Workshop',
      category: 'Workshops',
      image: galleryImage2
    },
    {
      id: 3,
      title: 'Premarital Counseling Session',
      category: 'Counseling',
      image: galleryImage3
    },
    {
      id: 4,
      title: 'Singles Conference',
      category: 'Conferences',
      image: galleryImage4
    },
    {
      id: 5,
      title: 'Communication Workshop',
      category: 'Workshops',
      image: galleryImage5
    },
    {
      id: 6,
      title: 'Engaged Couples Dinner',
      category: 'Events',
      image: galleryImage6
    },
    {
      id: 7,
      title: 'Marriage Enrichment Weekend',
      category: 'Retreats',
      image: galleryImage7
    },
    {
      id: 8,
      title: 'Family Counseling Session',
      category: 'Counseling',
      image: galleryImage8
    },
    {
      id: 9,
      title: 'Annual Marriage Conference',
      category: 'Conferences',
      image: galleryImage9
    }
  ];
  
  // Categories
  const categories = [
    'All',
    'Retreats',
    'Workshops',
    'Counseling',
    'Conferences',
    'Events'
  ];
  
  // State for filtering
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(6);
  
  // Filter gallery items based on category
  const filteredItems = allGalleryItems.filter(item => {
    return activeCategory === 'All' || item.category === activeCategory;
  });
  
  // Items to display based on visibility limit
  const displayedItems = filteredItems.slice(0, visibleItems);
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleItems(6); // Reset visible items when changing category
  };
  
  // Handle load more
  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
  };
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Gallery"
        subtitle="Browse photos from our events, workshops, and retreats."
        image={heroImage}
        height="50vh"
      />
      
      {/* Gallery Content */}
      <section className="section gallery-content">
        <Container>
          <SectionTitle
            title="Photo Gallery"
            subtitle="Explore moments from our various programs and events."
          />
          
          {/* Gallery Filters */}
          <div className="gallery-filters mb-5">
            <div className="category-filters">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category ? 'primary' : 'outline-primary'}
                  className="category-filter-btn me-2 mb-2"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Gallery Grid */}
          {displayedItems.length > 0 ? (
            <>
              <Row className="gallery-grid">
                {displayedItems.map(item => (
                  <Col lg={4} md={6} className="mb-4" key={item.id}>
                    <GalleryItem
                      image={item.image}
                      title={item.title}
                      category={item.category}
                    />
                  </Col>
                ))}
              </Row>
              
              {/* Load More Button */}
              {visibleItems < filteredItems.length && (
                <div className="text-center mt-4">
                  <Button 
                    variant="outline-primary" 
                    size="lg"
                    onClick={handleLoadMore}
                    className="load-more-btn"
                  >
                    Load More
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="no-items-found text-center py-5">
              <h3>No Images Found</h3>
              <p>There are no images in this category yet.</p>
            </div>
          )}
        </Container>
      </section>
      
      {/* Share Your Photos Section */}
      <section className="section share-photos-section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="share-photos-content">
                <h2>Share Your Photos With Us</h2>
                <p>
                  Have you attended one of our events? We'd love to see your photos! 
                  Share them with us on social media using the hashtag #MarriageShapers 
                  or email them to photos@marriageshapers.org.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Contact Us to Share Photos
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Gallery;
