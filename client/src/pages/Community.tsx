import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { dummyGenerations } from '../../public/assets/assets';
import { Loader2Icon } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
const Community = () => {
  const [ projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  const fetchProjects = async()=>{
    setTimeout(()=>{
      setProjects(dummyGenerations);
      setLoading(false);
    },3000)
  }

  useEffect(()=>{
    fetchProjects();
  },[])

  return loading?(
    <div className='flex items-center justify-center min-h-screen'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600'>
        <Loader2Icon className='size-12' />
      </div>
    </div>
  ):(
    <div className='min-h-screen text-white p-6 md:p-12 mt-28'>
      <div className='max-w-6xl mx-auto'>
        <header>
          <h1 className='text-3xl md:text-4xl font-semibold mb-4'>Community</h1>
          <p className='text-gray-400'>Browse and get inspired by other creators</p>
        </header>
        {/* projectslist */}
        <div className='columns-1 sm:columns-2 lg:columns-3 gap-4'>
          {projects.map((project)=>(
            <ProjectCard key={project.id} gen={project} setGenerations={setProjects} forCommunity={true}/>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Community;
