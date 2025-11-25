import React from 'react'
import StatsGrid from './StatsGrid'
import ChartSection from './ChartSection'

const Dashboard = () => {
  return (
    <>
    <div className="space-y-6">
        {/* ----stats grid--- */}
        <StatsGrid/>

        {/* ----charts section */}
        <ChartSection/>

        {/* 1:20 */}
    </div>
    
    </>
  )
}

export default Dashboard