import React from "react";

interface IndexProps {
    component: any;
}

export default (props: IndexProps) => {
    return <>{props.component}</>
}