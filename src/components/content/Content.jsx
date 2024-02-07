import React from "react";
import './Content.css'
import Input from "../form/Input";

const Content = ({children}) => {
    return (
        <div className="containerContent">
                {children}
        </div>
    )
}
export default Content;