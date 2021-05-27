import React from 'react';

const arr = [1,0,0,1,1,0,1,1,1]
let maxOne = 0
let count = 0

const Question2 = () =>{
    for(let i =0; i<=arr.length; i++){
        if(arr[i] !== 1){
            count = 0
        }else{
            count = count + 1
            maxOne = Math.max(count, maxOne)
        }
            
        
    }
    return(
        <>
           { maxOne}
        </>
    )
}

export default Question2;