import React from 'react';

const arr = [0,1,2,3,4,5,6,7,8,9,9,10,11]
let repeatedNum = 0

const Question3 = () =>{
    for(let i =0; i<=arr.length-1; i++){
        if(arr[i] === arr[i+1]){
            repeatedNum = arr[i]
            break
            }
            
        }
    
    return(
        <>
           { repeatedNum}
        </>
    )
}

export default Question3;