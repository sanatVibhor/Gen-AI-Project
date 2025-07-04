import React, { useEffect, useState } from 'react';
import './DashboardPage.css';
import AI from '../projects/AiAssistant/AI';
import MarketingDashboard from '../projects/MarketingDashboard/MarketingDashboard';
const DashboardPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectKey, setSelectedProjectKey] = useState(null); 
  useEffect(() => {
    // Mock JSON data
    const mockData = [
        { key: 'ai-assistant', name: 'AI Assistant', description: 'Built with GPT & React' },
        { key: 'marketing-dashboard', name: 'Marketing Dashboard', description: 'Insights for campaigns' },
        { key: 'bug-tracker', name: 'Bug Tracker', description: 'Manage tickets easily' },
        { key: 'sales-tracker', name: 'Sales Tracker', description: 'Track sales in real-time' }
      ];
      
    setProjects(mockData);
  }, []);

  const renderSelectedProject = () => {
    switch (selectedProjectKey) {
      case 'ai-assistant':
        return <AI onBack={() => setSelectedProjectKey(null)} />;
      case 'marketing-dashboard':
        return <MarketingDashboard onBack={() => setSelectedProjectKey(null)} />;
      default:
        return (
          <div style={{ padding: '40px' }}>
            <button onClick={() => setSelectedProjectKey(null)}>← Back</button>
            <h2>Coming soon...</h2>
          </div>
        );
    }
  };

  // ✅ If a project is selected, render its component
  if (selectedProjectKey) {
    return renderSelectedProject();
  }

  // ✅ Default view: project cards
  return (
    <div className="dashboard">
      <div className="card-container">
        {projects.map(project => (
          <div
            key={project.key}
            className="project-card"
            onClick={() => setSelectedProjectKey(project.key)}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;