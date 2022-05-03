import React from 'react'
import Addbutton from './Addbutton';
// import Dropdown from './Dropdown';
import "./ProjectCard.css"

function ProjectCard(props) {
   let {title, description, link, status }=props;
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-nowrap -m-4">
        {/* card */}
    <div className="p-4 md:w-1/3">
    <div id='projectcard' className="flex-auto rounded-lg h-full w-96 bg-gray-100 p-8 flex-col">
      <div className="items-center mb-3">
        <h2 className="text-lg title-font font-medium"><a className='text-green-500'>title :</a> Lorem ipsum dolor {title}</h2>
        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">project status : {status}</h3>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base break-words"><a className='text-green-500'>description :</a> Lorem ipsum dolor sit ametiquid doloribus quos numquam suscipit tempora, iure unde. Adipisci, provident! {description}</p>
        <a className="mt-3 inline-flex items-center"><a className='text-green-500'>link to project :</a> {link}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div className="p-4 md:w-1/3">
    <div id='projectcard' className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="items-center mb-3">
        <h2 className="text-gray-900 text-lg title-font font-medium">title : {title}</h2>
        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">project status : {status}</h3>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">description : {description}</p>
        <a className="mt-3 text-green-500 inline-flex items-center">link to project : {link}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div className="p-4 md:w-1/3">
    <div id='projectcard' className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="items-center mb-3">
        <h2 className="text-gray-900 text-lg title-font font-medium">title : {title}</h2>
        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">project status : {status}</h3>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">description : {description}</p>
        <a className="mt-3 text-green-500 inline-flex items-center">link to project : {link}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div className="p-4 md:w-1/3">
    <div id='projectcard' className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="items-center mb-3">
        <h2 className="text-green-300 text-lg title-font font-medium">title : {title}</h2>
        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">project status : {status}</h3>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">description : {description}</p>
        <a className="mt-3 text-green-500 inline-flex items-center">link to project : {link}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div className="p-4 md:w-1/3">
    <div id='projectcard' className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="items-center mb-3">
        <h2 className="text-gray-900 text-lg title-font font-medium">title : {title}</h2>
        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">project status : {status}</h3>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">description : {description}</p>
        <a className="mt-3 text-green-500 inline-flex items-center">link to project : {link}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div className="p-4 md:w-1/3">
    <div id='projectcard' className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="items-center mb-3">
        <h2 className="text-gray-900 text-lg title-font font-medium">title : {title}</h2>
        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">project status : {status}</h3>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">description : {description}</p>
        <a className="mt-3 text-green-500 inline-flex items-center">link to project : {link}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
</section>


  )
}

export default ProjectCard