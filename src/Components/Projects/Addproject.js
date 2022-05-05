import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

export default class Addproject extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       link: '',
       description: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/3bde586f-9a90-496e-857e-d7d180f6988e', this.state)
    .then(response => {
      console.log(response);
    })
  }
  render(){
    const {title, link, description} = this.state;
  return (
        <main className='main-dashboard'>
        <div className='main-topbar'><Topbar/></div>
        <div className='main-sidebar'><Sidebar /></div>
        <div className='content'>

        <section className="text-green-500 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-500">Add New Project</h1>
    </div>
    <form onSubmit={this.submitHandler} >
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="title" className="leading-7 text-sm text-green-500">Project Title</label>
            <input type="text" id="title" name="title" value={title} onChange={this.changeHandler} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="link" className="leading-7 text-sm text-green-500">Project Link</label>
            <input type="url" id="link" name="link" value={link} onChange={this.changeHandler} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="description" className="leading-7 text-sm text-green-500">Project Description</label>
            <textarea id="description" name="description" value={description} onChange={this.changeHandler} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button type='submit' className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">ADD</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</section>
        </div>
    </main>
  )
  }
}