
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,  faLinkedinIn, faPinterestP, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faUser, faClock, } from '@fortawesome/free-solid-svg-icons';

import './BlogPost.css';

// Placeholder images (in a real project, these would be imported from assets)
const blogImage1 = 'https://images.unsplash.com/photo-1511405889574-b01de1da5441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const blogImage2 = 'https://images.unsplash.com/photo-1511405889574-b01de1da5441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
// const blogImage3 = 'https://images.unsplash.com/photo-1529634667544-dc1ee6cb3e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const authorImage = 'https://randomuser.me/api/portraits/men/32.jpg';

const BlogPost = () => {
  const { id } = useParams();
  
  // Blog posts data (in a real app, this would come from an API)
  const blogPosts = [
    {
      id: 1,
      title: "5 Biblical Principles for a Healthy Marriage",
      image: blogImage1,
      date: "July 15, 2025",
      author: "Pastor James",
      authorImage: authorImage,
      category: "Marriage",
      readTime: 5,
      content: `
        <p>Marriage is one of God's greatest gifts to humanity. It is a sacred covenant that reflects Christ's relationship with the Church. When we follow biblical principles in our marriages, we create a foundation that can withstand life's challenges and grow stronger over time.</p>
        
        <h3>1. Selfless Love</h3>
        <p>The Bible teaches us that love is not self-seeking (1 Corinthians 13:5). In marriage, this means putting your spouse's needs before your own. Jesus modeled this selfless love when He gave His life for us. When both spouses commit to loving each other selflessly, the marriage thrives.</p>
        <p>Practical application: Each day, ask yourself, "What can I do today to show love to my spouse in a way that is meaningful to them?" This might mean speaking their love language, whether it's acts of service, quality time, words of affirmation, physical touch, or gifts.</p>
        
        <h3>2. Effective Communication</h3>
        <p>Proverbs 18:21 tells us that "the tongue has the power of life and death." Our words can either build up or tear down our spouse. Healthy communication involves speaking truth in love, active listening, and seeking to understand before being understood.</p>
        <p>Practical application: Practice the speaker-listener technique. One person speaks while the other listens without interrupting, then summarizes what they heard before responding. This helps ensure both partners feel heard and understood.</p>
        
        <h3>3. Forgiveness and Grace</h3>
        <p>Ephesians 4:32 instructs us to "be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you." In marriage, we will inevitably hurt each other. The ability to seek and grant forgiveness is essential for healing and growth.</p>
        <p>Practical application: When conflicts arise, address them promptly rather than letting resentment build. Practice saying "I'm sorry" and "I forgive you" regularly, recognizing that forgiveness is a choice, not a feeling.</p>
        
        <h3>4. Spiritual Unity</h3>
        <p>Ecclesiastes 4:12 says, "A cord of three strands is not quickly broken." When God is at the center of your marriage, you and your spouse are united with a strength that goes beyond your own abilities. Praying together, studying Scripture, and attending church as a couple builds spiritual intimacy.</p>
        <p>Practical application: Establish a regular time to pray together, even if it's just for a few minutes each day. Share what God is teaching you individually and discuss how you can grow together in your faith.</p>
        
        <h3>5. Commitment and Covenant</h3>
        <p>Marriage in the Bible is presented as a covenant, not just a contract. In Matthew 19:6, Jesus says, "What God has joined together, let no one separate." This commitment means choosing your spouse daily, through good times and bad.</p>
        <p>Practical application: Regularly affirm your commitment to each other. On your anniversary or other special occasions, consider renewing your vows or writing letters to each other expressing your continued dedication to your marriage.</p>
        
        <h3>Conclusion</h3>
        <p>Applying these biblical principles doesn't guarantee a perfect marriage\u2014because there's no such thing. But it does provide a framework for a healthy, growing relationship that honors God and brings joy to both partners. Remember that marriage is a journey, and implementing these principles is a daily choice that requires God's grace and strength.</p>
        
        <p>At Marriage Shapers, we're committed to helping couples build strong, Christ-centered marriages. If you'd like support in applying these principles in your relationship, consider joining one of our marriage workshops or scheduling a counseling session.</p>
      `
    },
    {
      id: 2,
      title: "Communication Skills for Christian Couples",
      image: blogImage2,
      date: "July 10, 2025",
      author: "Dr. Rebecca Smith",
      authorImage: authorImage,
      category: "Communication",
      readTime: 7,
      content: `
        <p>Communication is the lifeblood of any relationship, especially marriage. For Christian couples, our communication should reflect Christ's love, patience, and grace. Yet many couples struggle to communicate effectively, leading to misunderstandings, hurt feelings, and unresolved conflicts.</p>
        
        <p>In this article, we'll explore communication skills that align with biblical principles and can transform your marriage conversations from frustrating to fruitful.</p>
        
        <h3>Listen First, Speak Second</h3>
        <p>James 1:19 instructs us to be "quick to listen, slow to speak, and slow to become angry." This verse provides a perfect framework for communication in marriage. When your spouse is speaking, focus completely on understanding their perspective rather than formulating your response.</p>
        
        <p>Active listening involves:</p>
        <ul>
          <li>Making eye contact</li>
          <li>Putting away distractions (especially phones)</li>
          <li>Nodding or using other non-verbal cues to show you're engaged</li>
          <li>Asking clarifying questions</li>
          <li>Summarizing what you've heard before responding</li>
        </ul>
        
        <h3>Speak Truth in Love</h3>
        <p>Ephesians 4:15 encourages us to "speak the truth in love." This means being honest while also being kind and considerate of your spouse's feelings. Honesty without love can be harsh and damaging, while love without honesty lacks authenticity.</p>
        
        <p>When discussing difficult topics:</p>
        <ul>
          <li>Use "I" statements instead of "you" accusations</li>
          <li>Focus on specific behaviors rather than character attacks</li>
          <li>Express your feelings without blaming</li>
          <li>Choose words that build up rather than tear down</li>
        </ul>
        
        <h3>Control Your Tone and Body Language</h3>
        <p>Proverbs 15:1 reminds us that "a gentle answer turns away wrath, but a harsh word stirs up anger." Your tone of voice, facial expressions, and body language communicate as much as your words\u2014sometimes more.</p>
        
        <p>Be mindful of:</p>
        <ul>
          <li>Speaking with a gentle, respectful tone</li>
          <li>Maintaining open body language (uncrossed arms, facing your spouse)</li>
          <li>Controlling eye-rolling, sighing, or other dismissive gestures</li>
          <li>Taking a time-out if you feel yourself becoming too emotional to communicate respectfully</li>
        </ul>
        
        <h3>Practice Healthy Conflict Resolution</h3>
        <p>Conflict is inevitable in marriage, but it doesn't have to be destructive. Matthew 18:15 provides guidance for addressing issues: "If your brother or sister sins, go and point out their fault, just between the two of you."</p>
        
        <p>Healthy conflict resolution includes:</p>
        <ul>
          <li>Addressing issues promptly rather than letting them fester</li>
          <li>Focusing on one issue at a time</li>
          <li>Avoiding bringing up past resolved conflicts</li>
          <li>Working toward solutions rather than just venting</li>
          <li>Being willing to compromise and forgive</li>
        </ul>
        
        <h3>Pray Together and Individually</h3>
        <p>Prayer is a powerful tool for improving communication. Philippians 4:6-7 tells us, "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."</p>
        
        <p>Consider:</p>
        <ul>
          <li>Praying together before difficult conversations</li>
          <li>Asking God for wisdom in how to communicate effectively</li>
          <li>Praying for your spouse's needs and concerns</li>
          <li>Thanking God for your spouse's positive qualities</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Improving communication in your marriage is a journey, not a destination. Be patient with yourself and your spouse as you practice these skills. Remember that God's grace is sufficient, and His power is made perfect in our weakness (2 Corinthians 12:9).</p>
        
        <p>At Marriage Shapers, we offer communication workshops and counseling to help couples develop these skills in a supportive environment. Contact us to learn more about how we can help you and your spouse grow in this vital area of your relationship.</p>
      `
    }
  ];
  
  // Find the current blog post
  const currentPost = blogPosts.find(post => post.id === parseInt(id)) || blogPosts[0];
  
  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(post => post.id !== currentPost.id)
    .slice(0, 2);
  
  return (
    <section className="section blog-post-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            {/* Blog Post Header */}
            <div className="blog-post-header">
              <h1 className="blog-post-title">{currentPost.title}</h1>
              
              <div className="blog-post-meta">
                <div className="meta-item">
                  <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
                  <span>{currentPost.date}</span>
                </div>
                <div className="meta-item">
                  <FontAwesomeIcon icon={faUser} className="meta-icon" />
                  <span>{currentPost.author}</span>
                </div>
                <div className="meta-item">
                  <FontAwesomeIcon icon={faClock} className="meta-icon" />
                  <span>{currentPost.readTime} min read</span>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="blog-post-image">
              <img 
                src={currentPost.image} 
                alt={currentPost.title} 
                className="img-fluid rounded"
              />
            </div>
            
            {/* Blog Post Content */}
            <div className="blog-post-content">
              <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
            </div>
            
            {/* Tags and Share */}
            <div className="blog-post-footer">
              <div className="blog-post-tags">
                <span className="tag-label">Tags:</span>
                <span className="tag">{currentPost.category}</span>
                <span className="tag">Christian</span>
                <span className="tag">Relationships</span>
              </div>
              
              <div className="blog-post-share">
                <span className="share-label">Share:</span>
                <div className="share-icons">
                  <button className="share-icon facebook" type="button">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </button>
                  <button className="share-icon twitter" type="button">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button className="share-icon linkedin" type="button">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </button>
                  <button className="share-icon pinterest" type="button">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="blog-post-author">
              <div className="author-image">
                <img src={currentPost.authorImage} alt={currentPost.author} />
              </div>
              <div className="author-info">
                <h4>{currentPost.author}</h4>
                <p>Marriage counselor and relationship expert with over 15 years of experience helping couples build strong, Christ-centered marriages.</p>
              </div>
            </div>
            
            {/* Related Posts */}
            <div className="related-posts">
              <h3 className="related-posts-title">Related Articles</h3>
              <Row>
                {relatedPosts.map(post => (
                  <Col md={6} className="mb-4" key={post.id}>
                    <div className="related-post">
                      <Link to={`/blog/${post.id}`} className="related-post-image">
                        <img src={post.image} alt={post.title} />
                      </Link>
                      <div className="related-post-content">
                        <Link to={`/blog/${post.id}`}>
                          <h5>{post.title}</h5>
                        </Link>
                        <div className="related-post-meta">
                          <span>{post.date}</span>
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            
            {/* Back to Blog */}
            <div className="text-center mt-5">
              <Button as={Link} to="/blog" variant="outline-primary">
                Back to All Articles
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogPost;
