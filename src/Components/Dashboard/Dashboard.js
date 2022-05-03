import React from 'react'
import './Dashboard.css'
import Members from '../Members/Members'
import Projects from '../Projects/Projects'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

function Dashboard() {
  return (
    <main className='main-dashboard'>
        <div className='main-topbar'><Topbar/></div>
        <div className='main-sidebar'><Sidebar/></div>
        <div className='content'>
        <div className='main-projects'><Projects/></div>
        <div className="4"></div>
        {/* <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div> */}
        </div>
        {/* <div className='main-members'><Members/></div> */}
    </main>
  )
}

export default Dashboard