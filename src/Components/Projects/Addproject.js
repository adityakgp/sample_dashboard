import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

function Addproject() {
  return (
        <main className='main-dashboard'>
        <div className='main-topbar'><Topbar/></div>
        <div className='main-sidebar'><Sidebar /></div>
        <div className='content'>

        <section class="text-green-500 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-500">Add New Project</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-green-500">Project Title</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="link" class="leading-7 text-sm text-green-500">Project Link</label>
            <input type="text" id="email" name="link" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="description" class="leading-7 text-sm text-green-500">Project Description</label>
            <textarea id="description" name="description" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">ADD</button>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    </main>
  )
}

export default Addproject