import React from 'react'
import Addbutton from './Addbutton';
// import Dropdown from './Dropdown';
import "./ProjectCard.css"

function ProjectCard(props) {
   let {title, description, link}=props;
  return (
    <div className="p-4 md:w-1/3">
    <div id='projectcard' className="flex-auto rounded-lg h-full w-96 bg-gray-100 p-8 flex-col">
      <div className="items-center mb-3">
        <h2 className="text-lg title-font font-medium"><a className='text-green-500'>Title :</a> {title}</h2>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base break-words"><a className='text-green-500'>Description :</a> {description}</p>
        {/* <a className="mt-3 inline-flex items-center"><a className='text-green-500'>Link to project :</a>{link} */}
        <a className="mt-3 inline-flex items-center text-green-500" href={link}>Link to project</a>
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
        {/* </a> */}
      </div>
    </div>
  </div>
// </div>
// </div>
// </section>


  )
}

export default ProjectCard