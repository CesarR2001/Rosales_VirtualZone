import React from "react";
import { DotLoader } from "react-spinners";

const Loader = () => {
    return(
        <div style={{
            width:' 100%',
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center'
        }}>
            <DotLoader color='#6200d0' size={90}/>
        </div>
    )
}

export default Loader