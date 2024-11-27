import React from 'react';
import ParticlesComponent from './constants/Particles';
import Introduction from './components/Introduction';
import Educations from './components/Educations';
import { Space } from './constants/Space';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Familar from './components/Familar';
import DeveloperSkills from './components/Interest';
import Projects from './components/Projects';

const App = () => {
  return (
    <main>
      <ParticlesComponent />
      <div className='min-h-screen py-6 px-3 text-black flex items-center justify-center'>
        <div className='min-h-screen mx-auto w-full md:w-3/4 rounded-lg shadow-lg lg:w-2/3 xl:w-3/6 
        bg-white/90 backdrop-blur-3xl border border-white/50'>
          <div className='flex flex-row'>
            <div className='p-12 w-full'>
              <Introduction />
              <Space />
              <Educations />
              <Space />
              <Experience />
              <Space />
              <Skills />
              <Space />
              <Familar />
              <Space />

              <Projects />
              <Space />
              <DeveloperSkills />
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default App