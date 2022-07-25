import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch Man']);
    
    const onAddCategory = (NewCategory) => {
        // categories.push(NewCategory)
        if (categories.includes(NewCategory)) return;
        setCategories([NewCategory, ...categories])
    }
    

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}

            <AddCategory 
            // setCategories={setCategories}
                onNewCategory = { (value) => onAddCategory(value)}
            
            />
            
            {/* Listado de Gif */}

        
            {
                categories.map( (category) => 
                    <GifGrid
                        key={category}
                        category={category}
                        
                    />    
                )
            }
            
                {/* Git Item2 */}

        </>
    )
}