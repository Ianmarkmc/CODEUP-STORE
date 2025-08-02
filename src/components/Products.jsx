import React, { useState } from 'react';
import './Products.css';

function Products({ currentUser }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  const itServices = [
    {
      id: 1,
      name: 'Custom Software Development',
      image: 'https://placehold.co/400x250/007bff/ffffff?text=Software+Dev',
      description: 'Tailored software solutions for your unique business needs, from concept to deployment.',
      fullDetails: 'We build robust, scalable, and secure custom software applications from scratch, perfectly aligned with your business processes and goals. Our expertise covers enterprise solutions, CRMs, ERPs, and more, utilizing modern architectures and agile methodologies.',
      price: '$15000+',
      category: 'Development',
    },
    {
      id: 2,
      name: 'Web Application Development',
      image: 'https://placehold.co/400x250/28a745/ffffff?text=Web+Apps',
      description: 'Building responsive and scalable web applications using modern frameworks.',
      fullDetails: 'From dynamic single-page applications to complex e-commerce platforms, we craft engaging and high-performing web solutions. We focus on intuitive UI/UX, cross-browser compatibility, and robust backend integrations for a seamless user experience.',
      price: '$10000+',
      category: 'Development',
    },
    {
      id: 3,
      name: 'Mobile App Development (iOS/Android)',
      image: 'https://placehold.co/400x250/dc3545/ffffff?text=Mobile+Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      fullDetails: 'Reach your audience on the go with our bespoke mobile app development services. We build native iOS and Android applications, as well as cross-platform solutions using frameworks like React Native, ensuring a consistent and high-quality experience across devices.',
      price: '$12000+',
      category: 'Development',
    },
    {
      id: 4,
      name: 'Cloud Solutions & Migration',
      image: 'https://placehold.co/400x250/ffc107/333333?text=Cloud+Solutions',
      description: 'Expertise in AWS, Azure, and Google Cloud for scalable and secure infrastructure.',
      fullDetails: 'Leverage the power of the cloud with our comprehensive cloud solutions. We assist with cloud strategy, infrastructure setup, migration of existing systems to AWS, Azure, or Google Cloud, and ongoing management to ensure scalability, cost-efficiency, and reliability.',
      price: '$8000+',
      category: 'Cloud',
    },
    {
      id: 5,
      name: 'Cybersecurity Consulting',
      image: 'https://placehold.co/400x250/17a2b8/ffffff?text=Cybersecurity',
      description: 'Protecting your digital assets with comprehensive security assessments and strategies.',
      fullDetails: 'Safeguard your business from evolving cyber threats. Our cybersecurity experts provide vulnerability assessments, penetration testing, security policy development, incident response planning, and employee training to build a resilient security posture.',
      price: '$5000+',
      category: 'Security',
    },
    {
      id: 6,
      name: 'Data Analytics & Business Intelligence',
      image: 'https://placehold.co/400x250/6f42c1/ffffff?text=Data+Analytics',
      description: 'Transforming raw data into actionable insights for informed decision-making.',
      fullDetails: 'Unlock the hidden potential in your data. We design and implement data warehousing, ETL processes, and build interactive dashboards and reports using BI tools to provide you with actionable insights for strategic decision-making and performance monitoring.',
      price: '$7000+',
      category: 'Data',
    },
    {
      id: 7,
      name: 'IT Consulting & Strategy',
      image: 'https://placehold.co/400x250/fd7e14/ffffff?text=IT+Consulting',
      description: 'Strategic guidance to align your IT infrastructure with business objectives.',
      fullDetails: 'Our seasoned IT consultants provide strategic guidance to optimize your technology investments. We help you develop IT roadmaps, assess current systems, identify areas for improvement, and implement solutions that align with your long-term business objectives.',
      price: '$4000+',
      category: 'Consulting',
    },
    {
      id: 8,
      name: 'UI/UX Design Services',
      image: 'https://placehold.co/400x250/e83e8c/ffffff?text=UI/UX+Design',
      description: 'Creating intuitive and engaging user interfaces for exceptional user experiences.',
      fullDetails: 'We believe great software starts with great design. Our UI/UX team crafts intuitive, aesthetically pleasing, and user-centric interfaces. We conduct user research, create wireframes and prototypes, and perform usability testing to ensure an optimal user experience.',
      price: '$6000+',
      category: 'Design',
    },
  ];

  const categories = ['All', ...new Set(itServices.map(service => service.category))];

  const filteredServices = filterCategory === 'All'
    ? itServices
    : itServices.filter(service => service.category === filterCategory);

  const handleCardClick = (id) => {
    setExpandedServiceId(id === expandedServiceId ? null : id);
  };

  const handleCardMouseEnter = (id) => {
    if (expandedServiceId !== null && expandedServiceId !== id) {
      setExpandedServiceId(id);
    } else if (expandedServiceId === null) {
      setExpandedServiceId(id);
    }
  };

  const handleCardMouseLeave = () => {
  };

  return (
    <div className="products-container">
      {currentUser && (
        <h3 className="welcome-greeting">Welcome, {currentUser.firstName}!</h3>
      )}
      <h2 className="products-title">Our IT Services</h2>
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilterCategory(category)}
            className={`category-button ${filterCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="services-grid">
        {filteredServices.map(service => (
          <div
            key={service.id}
            className={`service-card ${expandedServiceId === service.id ? 'expanded' : ''}`}
            onClick={() => handleCardClick(service.id)}
            onMouseEnter={() => handleCardMouseEnter(service.id)}
            onMouseLeave={handleCardMouseLeave}
          >
            <img
              src={service.image}
              alt={service.name}
              className="service-image"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/cccccc/333333?text=Image+Error'; }}
            />
            <div className="service-content">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              {expandedServiceId === service.id && (
                <div className="service-full-details">
                  <p>{service.fullDetails}</p>
                </div>
              )}
              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <span className="service-category">{service.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredServices.length === 0 && (
        <p className="no-services-message">No services found for this category.</p>
      )}
    </div>
  );
}

export default Products;














