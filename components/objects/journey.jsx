import React, { useEffect, useState } from 'react';
import '../styles/journey.css';

const milestones = [
  { year: '2021', title: 'Started Learning Flutter', description: 'Description about your learning journey', image: 'path/to/image1.jpg' },
  { year: '2022', title: 'First App Released', description: 'Description about the first app', image: 'path/to/image2.jpg' },
  { year: '2023', title: 'Expanded to Node.js and React', description: 'Description about the expansion', image: 'path/to/image3.jpg' },
  { year: '2024', title: 'Mastered AWS', description: 'Description about mastering AWS', image: 'path/to/image4.jpg' },
];

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [milestoneVisibility, setMilestoneVisibility] = useState(Array(milestones.length).fill(false));

  const handleScroll = () => {
    // Track the scroll progress to animate the timeline line
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    setScrollProgress((scrollTop / scrollHeight) * 100);

    // Check which milestones are in view
    milestones.forEach((_, index) => {
      const milestone = document.getElementById(`milestone-${index}`);
      if (milestone) {
        const rect = milestone.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          setMilestoneVisibility(prev => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container">
      {/* SVG Path Animation */}
      <svg className="timeline-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          id="timeline-path"
          fill="transparent"
          stroke="#4c90f0" // Light blue color for the path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10,10 C20,20, 30,40, 40,50 C50,60, 60,80, 70,90 C80,100, 90,100, 100,100"
          strokeDasharray="300"
          strokeDashoffset={300 - scrollProgress * 3} // Animation based on scroll progress
        />
      </svg>
      
      {/* Milestones */}
      {milestones.map((milestone, index) => (
        <div
          id={`milestone-${index}`}
          key={index}
          className={`milestone ${milestoneVisibility[index] ? 'visible' : ''}`}
          style={{
            left: `${getRandomXPosition()}%`, // Random horizontal positioning
            top: `${(index + 1) * 20}%`, // Vertically place them incrementally
          }}
        >
          <img src={milestone.image} alt={milestone.title} />
          <div className="milestone-info">
            <h3>{milestone.year}</h3>
            <h4>{milestone.title}</h4>
            <p>{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function for random horizontal position
const getRandomXPosition = () => {
  return Math.random() * 80 + 10; // Random between 10% and 90%
};

export default Timeline;
