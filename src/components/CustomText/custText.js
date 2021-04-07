import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CustText() {

    const [text, setText] = useState("")
    const [textSize, setSize] = useState("medium")
    

    useEffect(() => {
        const intervalID = setInterval(() => {
            (async ()=>{
                const url = 'api/mirror/custom_text';
                const res = await axios.get(url);
                console.log(res.data);
                setText(res.data.text)
                setSize(res.data.Size)
                // axios.get(url).then(res=>{
                //     console.log(res.data);
                // }).catch(error=>{
                //     setText("")
                // })
                
            })();
        }, 5000);

        return ()=>{
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div className="container">
            <div className={"textbox thin bright " + textSize}>
                {text}
            </div>
        </div>
    )
}

export default CustText
