import React from 'react'

function NoCourseFound() {
  return (
    <>
      <div className='flex items-center flex-col my-5'>
        <h2 className='subheading'>No Active Course Yet</h2>
        <img src="./no search.svg" alt="" className='-mt-10'/>     
      </div>
    </>
  );
}

export default NoCourseFound