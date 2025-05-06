import { useState } from 'react';
import CardLayout from './component/layout/CardLayout';
import SectionContainer from './component/layout/SectionContainer';
import SupervisorCard from './component/view/home/SupervisorCardComponent';
import ProjectCard from './component/view/home/ProjectCardComponent';
import AppointmentSchedulingComponent from './component/view/home/AppointmentSchedulingComponent';
import ProjectIdeaCard from './component/view/home/ProjectIdeaCard';
import SearchFilterComponent from './component/view/home/SearchFilterComponent';
import StudentDashboardCard from './component/view/home/StudentDashboardCard';
import SupervisorProfileCard from './component/view/home/SupervisorProfileCard';

function App() {
  const [filters, setFilters] = useState({
    department: '',
    researchArea: '',
    available: false,
    limited: false
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Supervisor Card Example */}
      <SupervisorCard
        name="Dr. John Doe"
        department="Computer Science Department"
        initials="JD"
        expertise={["Machine Learning", "Data Science", "AI"]}
        description="Specializes in deep learning applications for computer vision with 10+ years of research experience. Currently accepting 2-3 FYP students for projects involving neural networks."
        currentStudents={5}
        availability={true}
      />

      {/* Project Card Example */}
      <ProjectCard
        title="AI-Based Traffic Management System"
        suggestedBy="Dr. Sarah Smith"
        description="Develop an intelligent traffic management system using computer vision and deep learning to optimize traffic flow in urban areas. The system will analyze real-time traffic camera data to predict congestion and suggest alternative routes."
        tags={["Artificial Intelligence", "Computer Vision", "Urban Planning"]}
        duration="6 month project"
        status="Popular"
      />

      {/* CardLayout Example */}
      <CardLayout title="Schedule Meeting with Dr. John Doe">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
            <input 
              type="date" 
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm" 
            />
          </div>
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition">
            Schedule Meeting
          </button>
        </div>
      </CardLayout>

      {/* SectionContainer Example */}
      <SectionContainer title="Filter Supervisors">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select 
              name="department"
              value={filters.department}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="">All Departments</option>
              <option>Computer Science</option>
              <option>Electrical Engineering</option>
              <option>Mechanical Engineering</option>
            </select>
          </div>
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition">
            Apply Filters
          </button>
        </div>
      </SectionContainer>

      <AppointmentSchedulingComponent/>
      <ProjectCard/>
      <ProjectIdeaCard/>
      <SearchFilterComponent/>
      <StudentDashboardCard/>
      <SupervisorProfileCard/>


    </div>
  );
}

export default App;
