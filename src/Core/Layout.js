import React from "react";
import Menue from './Menue'
const Layout = ({title="Title", description="Description",className,children}) => {
    return (
        <div>
            <Menue />
             <div className="jumbotron">
                  <h2>{title}</h2>
                 <p className="lead"> {description} </p>
             </div>
             <div className={className}>
                {children}
             </div>
        </div>
    )
}

export default Layout;