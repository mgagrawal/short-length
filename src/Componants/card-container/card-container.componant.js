
import React, { Fragment } from 'react';

import catagory from './catagory.data';
import "./card-container.componant.scss"

import Card from '../card/card';

const CardContainer = ()=> {
    
    const [man, boys] = catagory 
    
    return (
        
        <div className='main-container-div'>
        
        <div className='sub-container-div boys'>
          <div className='container-title'>
            <h1 className='card-container-header'>Boys</h1>
          </div>
          <div className='card-container'>
          {
            boys.map(({id, title, imgUrl})=> {
              return (
                <Fragment key={id}> <Card title={title} imgUrl={imgUrl}/></Fragment>
              )

            })
          }  
          </div>
        </div>


        <div className='sub-container-div mans'>
          <div className='container-title'>
          <h1 className='card-container-header'>Mans</h1>
          </div>
          <div className='card-container'>
          {
            man.map(({id, title, imgUrl})=> {
              return (
                <Fragment key={id}> <Card title={title} imgUrl={imgUrl}/></Fragment>
              )

            })
          }
          </div>
        </div>
      </div>

    )
}

export default CardContainer;