import Title from '@/components/Title'
import React from 'react'
import StoryCard from '@/components/StoryCard'

const Stories = () => {
    const stories =[
  {
    "id": 1,
    "name": "Ayesha Rahman",
    "designation": "Frontend Developer",
    "experience": "3 Years",
    "skills": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "company": "TechNova Solutions",
    "stories": "I started my journey as a self-taught developer. After months of practice and building projects, I landed my first frontend developer job. Consistency and daily coding helped me grow my career."
  },
  {
    "id": 2,
    "name": "Rakib Hasan",
    "designation": "Backend Developer",
    "experience": "5 Years",
    "skills": ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT"],
    "company": "CodeSphere Ltd.",
    "stories": "Learning backend development taught me how applications work behind the scenes. Building REST APIs and scalable systems has been the most rewarding part of my career."
  },
  {
    "id": 3,
    "name": "Nusrat Jahan",
    "designation": "Full Stack Developer",
    "experience": "4 Years",
    "skills": ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
    "company": "InnovateX",
    "stories": "Transitioning from frontend to full-stack development opened many opportunities. I enjoy building complete web applications from UI to database."
  },
  {
    "id": 4,
    "name": "Mahmud Hossain",
    "designation": "Software Engineer",
    "experience": "6 Years",
    "skills": ["Java", "Spring Boot", "MySQL", "Docker", "AWS"],
    "company": "BrainTech",
    "stories": "I began as a Java developer and gradually moved into cloud technologies. Continuous learning has been the key to staying relevant in the software industry."
  },
  {
    "id": 5,
    "name": "Sadia Islam",
    "designation": "Mobile App Developer",
    "experience": "3 Years",
    "skills": ["Flutter", "Dart", "Firebase", "REST API"],
    "company": "AppNest",
    "stories": "Building cross-platform mobile apps with Flutter has allowed me to create products that reach both Android and iOS users with a single codebase."
  },
  {
    "id": 6,
    "name": "Tanvir Ahmed",
    "designation": "DevOps Engineer",
    "experience": "7 Years",
    "skills": ["Docker", "Kubernetes", "Jenkins", "AWS", "Linux"],
    "company": "CloudCore",
    "stories": "Automating deployments and managing cloud infrastructure has improved software delivery. DevOps is all about collaboration and efficiency."
  },
  {
    "id": 7,
    "name": "Fahim Karim",
    "designation": "AI Engineer",
    "experience": "2 Years",
    "skills": ["Python", "TensorFlow", "PyTorch", "OpenCV", "Machine Learning"],
    "company": "Vision AI",
    "stories": "My interest in artificial intelligence began during university. Today I build computer vision and machine learning applications for real-world problems."
  },
  {
    "id": 8,
    "name": "Mehedi Hasan",
    "designation": "MERN Stack Developer",
    "experience": "4 Years",
    "skills": ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
    "company": "DigitalCraft",
    "stories": "I enjoy creating scalable MERN applications. Every project teaches me something new, from authentication to performance optimization."
  }
]
  return (
    <div>
     <Title>Welcome to Devlopers Stories:</Title>
      <div className="mt-5">
        {
            stories.map(story=> <li key={story.id}><StoryCard story={story}/></li>)
        }
      </div>
    </div>
  )
}

export default Stories
