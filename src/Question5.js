import React from 'react';

const obj = [
    {"id": 4, "name": "abc"},
    {"id": 10, "name": "ab2"},
    {"id": 5, "name": "abc3"},
    {"id": 6, "name": "abc5"},
]

const Question5 = () =>{
    const objectSortedById = []
    objectSortedById.push(obj.sort((a,b) => a.id-b.id))
    return(
        <>
           {objectSortedById}
        </>
    )
}

export default Question5;