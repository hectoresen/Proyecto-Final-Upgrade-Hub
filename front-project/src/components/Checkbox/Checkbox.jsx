import React, { useState } from 'react';


export const Checkbox = () => {

        const types = [
        {
            "_id" : 1,
            "name": "Pañuelos"
        },
        {
            "_id" : 2,
            "name": "Collares"
        },
        {
            "_id" : 3,
            "name": "Pendientes"
        },
        {
            "_id" : 4,
            "name": "Gorros"
        },
        {
            "_id" : 5,
            "name": "Cinturones"
        },
    ]

    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => {

        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if(currentIndex === -1){
            newChecked.push(value)
        }else{
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)

    }



    return (
        

            <div className="c-accessories__finder">
                <div className="c-accessories__finder__check">
                    {types.map((value, index) => 
                        <>
                        <Checkbox 
                            onChange = {()=>{handleToggle(value._id)}}
                            type="checkbox"
                            checked={checked.indexOf(value._id) === -1 ? false : true}
                        />
                        <span>{value.name}</span>
                        </>
                    )}
                </div>
            </div>


    )
}
