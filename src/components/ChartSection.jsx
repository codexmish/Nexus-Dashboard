import React from 'react'
import Revnuechart from './Revnuechart'

const ChartSection = () => {
  return (
    <>
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className='xl:col-span-2'>
            <Revnuechart/>
        </div>
    </div>
    </>
  )
}

export default ChartSection