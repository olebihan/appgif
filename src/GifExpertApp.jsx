import React, { useState } from 'react'
import { AddCategory, GifGrid  } from './components';



export const GifExpertApp = () => {

  const [categories, setCategories  ] = useState(['Homero']);  


  const onAddCategory = ( newCategory ) => {

    //console.log( newCategory );
    if ( categories.includes(newCategory)) return ;
    setCategories( [ newCategory, ...categories]);
    // categories.push('Chorizo');

  } 

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        
        <AddCategory 
          // setCategories = { setCategories }
          onNewCategory={(value)=> onAddCategory(value)}
          currentCategories = { categories }

        />

     

            {
                categories.map( (category) => ( 
                
                <GifGrid 
                
                  key={category} 
                  category={ category }/>
                
                ))

            }

  

    </>
  )
}
