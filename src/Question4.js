import React, {useEffect, useState} from 'react';

const Question4 = () =>{
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/typicode/demo/posts").then((res)=>{
        res.json().then((result) => {
            setData(result)
        })
    })
    },[])

    return(
        <>
            <h2>Getting Data from API</h2>
            <br />
            <table>
                <tr>
                    <td>ID</td>
                    <td>TITLE</td>
                </tr>
                {
                    data.map((content) =>
                    <tr>
                        <td>{content.id}</td>
                        <td>{content.title}</td>
                    </tr>
                    )
                }
            </table>
        </>
    )
};

export default Question4;