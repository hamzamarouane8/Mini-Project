import React from "react";

interface IndexProps{
    component:any;
}
export default(props:IndexProps)=>{
    return(
        <div className="layout-wrapper">
            <div>Sidebar goes here</div>
            <main>
                {props.component}
            </main>
        </div>
    )
}