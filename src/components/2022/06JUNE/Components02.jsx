/**
 * 202206-03 Components
 */

 import styled from "styled-components";
 import COLORS from "../../../assets/theme/base/colors";
 import cUtil from "../../../assets/theme/functions/chromaUtils";
 
 import photo from "../../../assets/img/photo1.png"
 import photo2 from "../../../assets/img/photo3.jpg"
 
 function ContainerCard(props) {
     return (
             <div className="container mb-4">
                 <div className="row">
                     <div className="col-12">
                         <div className="card">
                             <div className="card-header">
                                 {props.title}
                             </div>
                             <div className="card-body">
                                 {props.children}
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
     )
 }
 
 function ContainerFull(props){
     return(
         <div className="w-100 mb-4 ms-0 me-0 p-0">
             <div className="p-2 text-uppercase bg-primary text-white">
                 <h6>{props.title}</h6>
             </div>
             {props.children}
         </div>
     )
 }
 


//--- START OF COMPONENT 1 ---

//--- END OF COMPONENT 1 ---

//--- START OF COMPONENT 2 ---

//--- END OF COMPONENT 2 ---

//--- START OF COMPONENT 3 ---

//--- END OF COMPONENT 3 ---

//--- START OF COMPONENT 4 ---

//--- END OF COMPONENT 4 ---

//--- START OF COMPONENT 5 ---

//--- END OF COMPONENT 5 ---