import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import MemberCard from './MemberCard'
import './Members.css'

function Members() {
  return (
    <main className='main-dashboard'>
        <div className='main-topbar'><Topbar/></div>
        <div className='main-sidebar'><Sidebar /></div>
        <div className='content'>
        <div className='main-members'> <MemberCard/></div>
        </div>
    </main>
  )
}

export default Members