import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  const [project, setproject] = useState([]);
  async function Updateproject() {
  const res = await fetch(`https://sheet.best/api/sheets/3bde586f-9a90-496e-857e-d7d180f6988e`);
  res.json().then(res => setproject(res))
  }
  useEffect(() => {
    Updateproject();
  },[]);
  return (
    <main>
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
      <div className="flex flex-nowrap -m-4">
      {project.map((data)=>{
        return(
          <ProjectCard
            title={data.title}
            link={data.link}
            description={data.description}
          />
        )
      })}
      </div>
      </div>
      </section>
    </main>
  )
}

export default Projects