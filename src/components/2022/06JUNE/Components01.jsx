/**
 * 20220622 Components
 */

import styled from "styled-components";
import COLORS from "../../../assets/theme/base/colors";
import cUtil from "../../../assets/theme/functions/chromaUtils";
import photo from "../../../assets/img/photo1.png"

import photo2 from "../../../assets/img/photo3.jpg"




//--- START OF COMPONENT 1 ---

const C1 = styled.button`
    display: inline-block;
    padding: .5rem 1rem;
    text-align: center;
    text-transform:uppercase;
    box-sizing: "border-box";
    white-space:nowrap;
    
    background-color: ${COLORS.bootstrap.primary.main};
    color: #fff;
    font-size: .90rem;

    //border-radius: 0.25rem;
    border-color: transparent;

    transition: 0.1s ease-out;
    
    :hover{
        background-color: ${cUtil.lighten(COLORS.bootstrap.primary.main, .2)};
        box-shadow: 10px 10px 5px ${cUtil.lighten(COLORS.bootstrap.primary.main, .4)};
        
    }
    :focus{
        background-color: ${cUtil.darken(COLORS.bootstrap.primary.main, .1)};
        outline: 4px solid ${cUtil.lighten(COLORS.bootstrap.primary.main, .3)} !important;  
    }
`
function Component1(props){
    return(
        <C1 {...props}></C1>
    );
}
//--- END OF COMPONENT 1 ---

//--- START OF COMPONENT 2 ---

const C2Container = styled.div`
    margin-bottom: 1rem;
    position:relative;
    padding: 5rem 2rem;
    box-shadow: 0 0 15px 2px rgb(0 0 0 / 10%);
    border-radius: 5px;
    border: 1px solid ${cUtil.lighten(COLORS.bootstrap.secondary.main, .5)};
    display: flex;
    align-items: center;
    flex-direction: column;
    :hover{
        .image-overlay, img{
            opacity: 1;
        }
        h6, p{
            color: white;
        }
    }
`;
const C2ImageOverlay = styled.div`
    opacity: 0;
    position:absolute;
    top:0;
    left:0;
    border-radius: 5px;
    background-color: rgba(2,94,118,.6);;
    height: 100%;
    width: 100%;
    transition: opacity 0.1s ease-in; 
    z-index:5;
`

const C2Image = styled.img`
    position:absolute;
    border-radius: 5px;
    top:0;
    opacity: 0;
    left:0;
    width: 100%;
    height: 100%;
    object-fit:cover;
    transition: opacity 0.1s ease-in; 
`

const C2Wrapper = styled.div`
    z-index:10;
`

const C2HeaderContainer = styled.div`
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    > h6 {
        color: ${COLORS.bootstrap.primary.main};
        font-size: 1.5rem
    }
`

const C2DescContainer= styled.div`
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    > p {
        font-size: 1rem
    }
`

function Composite2(){
    return(
        <C2Container>
            <C2Wrapper>
                <C2HeaderContainer style={{zIndex: 10000}}>
                    <h6 className="display-5" style={{position: 'relative', zIndex:"10"}}> Sample heading</h6>
                </C2HeaderContainer>
                <C2DescContainer>
                    <p className="display-6" style={{position: 'relative', zIndex:"10"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </C2DescContainer>
                <C2ImageOverlay className="image-overlay">
                </C2ImageOverlay>
                <C2Image src={photo}/>
            </C2Wrapper>
        </C2Container>
    );
}
function Component2(props){
    return(
        <div className="row">
             <div className="col-lg-4">
                <Composite2></Composite2>
             </div>
             <div className="col-lg-4">
                <Composite2></Composite2>
             </div>
             <div className="col-lg-4">
                <Composite2></Composite2>
             </div>
             <div className="col-lg-4">
                <Composite2></Composite2>
             </div>
             <div className="col-lg-4">
                <Composite2></Composite2>
             </div>
             <div className="col-lg-4">
                <Composite2></Composite2>
             </div>
        </div>
    )
}

//--- END OF COMPONENT 2 ---
const C3Wrapper = styled.div`
    position: relative;
    padding-top: 60px;
    padding-bottom: 60px;
    width: 100%;
    ::before{
        position: absolute;
        content: " ";
        top: 0;
        left: 0;
        background-image: url(${photo2});
        background-position: 50% 45%;
        background-repeat:no-repeat;
        position: absolute;
        width: 100%;
        height: 100%
    }
    ::after{
        position: absolute;
        content: " ";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.3;
        box-shadow: inset 0 0 120px #000, inset 0 0 80px #000, inset 0 0 40px #000;
    }

`

const C3ContentContainer = styled.div`
    position: relative;
    z-index: 1;
    text-align: center;
`

const C3DividerShort = styled.div`
    margin: auto;
    background-color: white;
    height: 2px;
    width: 60px;
    margin-bottom: 60px;
`
const C3Button = styled.button`
    padding: 0.75rem 3rem;
    background-color: transparent;
    color: #fff;
    border-radius: 5px;
    border: 3px solid #fff;
    font-weight: 300;
    transition:  background-color 0.1s ease-in, color 0.1s ease-in;
    :hover{
        background-color: #fff;
        color: #000;
        border-color: ${COLORS.bootstrap.secondary.disabled}
        
    }
`

function Component3(props){
    return(
        <C3Wrapper>
            <div className="container">
                <C3ContentContainer className="row">
                    <p className="text-white">GARTNER NAMES KINAXIS A LEADER</p>
                    <h1 className="text-white">Kinaxis recognized as a Leader in the 2022 Gartner® Magic Quadrant™ for Supply Chain Planning Solutions</h1>
                    <C3DividerShort></C3DividerShort>
                    <div>
                        <C3Button>GET THE REPORT</C3Button>
                    </div>
                </C3ContentContainer>
            </div>
        </C3Wrapper>
    )
}
//--- START OF COMPONENT 3 ---

//--- END OF COMPONENT 3 ---

//--- START OF COMPONENT 4 ---

//--- END OF COMPONENT 4 ---

//--- START OF COMPONENT 5 ---

//--- END OF COMPONENT 5 ---

const Components01 = [
    Component1,
    Component2,
    Component3,
    Component1,
    Component1
]


export default Components01;