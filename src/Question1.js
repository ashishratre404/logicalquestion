import React from 'react';

const arr = [2,6,7,5,4,8]
const evenNum = []

const Question1 = () =>{
    for(let i =0; i<=arr.length; i++){
        if(arr[i]%2 === 0){
            evenNum.push(arr[i])
        }
    }
    return(
        <>
           { evenNum.map((n) => n)}
        </>
    )
}

export default Question1;