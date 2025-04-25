import React from 'react';

function CaseStudies() {
  const caseStudiesData = [
    {
      id: 1,
      title: 'Redesigning User Experience for Mobile Banking App',
      image: '/api/placeholder/400/250',
      overview: 'This case study examines the process of redesigning a mobile banking application to improve user experience and increase customer satisfaction.',
      problem: 'The existing banking app had low user engagement, poor ratings, and a high abandonment rate due to confusing navigation and slow performance.',
      solution: 'Implemented a user-centered design approach with simplified navigation, improved performance, and added personalized features based on user feedback and testing.',
      result: '90% increase in daily active users, 4.8/5 app rating, and 35% reduction in customer support tickets related to app usage.'
    },
    {
      id: 2,
      title: 'Optimizing E-commerce Checkout Process',
      image: '/api/placeholder/400/250',
      overview: 'This case study focuses on reducing cart abandonment by streamlining the checkout process for an online retail store.',
      problem: 'High cart abandonment rate of 76% primarily occurring during the checkout stage due to a lengthy multi-step process.',
      solution: 'Redesigned the checkout flow to a single-page format, implemented guest checkout option, and added multiple payment methods for convenience.',
      result: 'Cart abandonment reduced to 45%, conversion rate improved by 25%, and overall revenue increased by 20% within three months.'
    }
  ];
  
  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        
        <div className="case-studies-container">
          {caseStudiesData.map(caseStudy => (
            <div className="case-study-card" key={caseStudy.id}>
              <div className="case-study-image">
                <img src={caseStudy.image} alt={caseStudy.title} />
              </div>
              <div className="case-study-content">
                <h3>{caseStudy.title}</h3>
                <p className="overview"><strong>Overview:</strong> {caseStudy.overview}</p>
                <div className="case-study-details">
                  <div>
                    <h4>Problem</h4>
                    <p>{caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4>Solution</h4>
                    <p>{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4>Result</h4>
                    <p>{caseStudy.result}</p>
                  </div>
                </div>
                <a href="#" className="btn btn-primary">Read Full Case Study</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;