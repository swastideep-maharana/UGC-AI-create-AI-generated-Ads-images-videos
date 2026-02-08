import React, { useEffect, useState } from 'react';
import { dummyGenerations } from '../assets/assets';
import { Project } from '../types';
import { Loader2Icon } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router-dom';

const MyGenerations = () => {
  const navigate = useNavigate();

const [ generations, setGenerations] = useState<Project[]>([]);
const [loading, setLoading] = useState(true);
  
  const fetchMyGenerations = async()=>{
    setTimeout(()=>{
      setGenerations([dummyGenerations[0]]);
      setLoading(false);
    },3000)
  }

  useEffect(()=>{
    fetchMyGenerations();
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
        <h1 className='text-3xl md:text-4xl font-semibold mb-4'>My Generations</h1>
        <p className='text-gray-400'>view and manage your AI generated ads</p>
      </header>
      {/* generations list */}
      <div className='columns-1 sm:columns-2 lg:columns-3 gap-4'>
        {generations.map((gen)=>(<ProjectCard key={gen.id} gen={gen} setGenerations={setGenerations} />))}
      </div>

      {generations.length === 0 && (
        <div className='text-center py-12'>
          <h3 className='text-gray-400'>No generations yet</h3>
          <p className='text-gray-400'>Generate your first ad to get started</p>
          <button onClick={()=>navigate('/generate')} className='mt-4 px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition'>Generate</button>
        </div>
      )}
    </div>
   </div>
  );
};

export default MyGenerations;
