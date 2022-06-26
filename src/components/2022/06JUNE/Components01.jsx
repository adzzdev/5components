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

function Composite1(){
    return(
        <ContainerCard title="Component 1">
            <Component1>Sample Button</Component1>
        </ContainerCard>
    )
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

function Component2(){
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
function Composite2(props){
    return(
        <ContainerFull title="Component 2">
            <div className="row">
                <div className="col-lg-4">
                    <Component2></Component2>
                </div>
                <div className="col-lg-4">
                    <Component2></Component2>
                </div>
                <div className="col-lg-4">
                    <Component2></Component2>
                </div>
                <div className="col-lg-4">
                    <Component2></Component2>
                </div>
                <div className="col-lg-4">
                    <Component2></Component2>
                </div>
                <div className="col-lg-4">
                    <Component2></Component2>
                </div>
            </div>
        </ContainerFull>
    )
}

//--- END OF COMPONENT 2 ---

//--- START OF COMPONENT 3 ---
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
    margin-top: 20px;
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
        <ContainerFull title="Component 3">
            <C3Wrapper>
                <div className="container">
                    <C3ContentContainer className="row">
                        <p className="text-white">HELLO THERE MATE</p>
                        <h1 className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quos voluptatibus dolores animi aliquam nobis natus autem, unde ut consequuntur commodi blanditiis possimus? </h1>
                        <C3DividerShort></C3DividerShort>
                        <div>
                            <C3Button>SEE MORE DETAILS</C3Button>
                        </div>
                    </C3ContentContainer>
                </div>
            </C3Wrapper>
        </ContainerFull>
    )
}
//--- END OF COMPONENT 3 ---

//--- START OF COMPONENT 4 ---
const C4CWrapper = styled.div`
    display:flex;
    flex-direction: row;
    padding: 3rem 1rem;
    box-shadow: 0 0 15px 2px rgb(0 0 0 / 6%);
    margin-bottom: 1rem;
    @media(max-width: 1200px) {
        display:block;
        text-align: center;
    }
`

const C4NumberContainer = styled.div`
    padding: 0 1rem;
    flex-grow: 0;
    flex-shrink: 0;
    
`;

const C4Number = styled.h1`
    font-weight: 800;
    font-size: 3rem;
    color: ${COLORS.bootstrap.info.main};
    padding: 0px 0px;
    line-height: 0.9;
`

const C4Header = styled.h3`
    font-weight: 700;
`
function Component4(){
    return(
        <C4CWrapper>
            <C4NumberContainer>
                <C4Number>01</C4Number>
            </C4NumberContainer>
            <div>
                <C4Header>This is a sample Heading</C4Header>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iusto et laudantium quas incidunt quibusdam, deleniti ipsa magni soluta est tempore expedita exercitationem dignissimos dolor. Voluptas, ducimus. Ipsum, praesentium quisquam!</p>
            </div>
        </C4CWrapper>
    );
}
function Composite4(){
    return(
        <ContainerFull title="Component 4">
            <div className="row">
                <div className="col-lg-4">
                    <Component4></Component4>
                </div>
                <div className="col-lg-4">
                    <Component4></Component4>
                </div>
                <div className="col-lg-4">
                    <Component4></Component4>
                </div>
                <div className="col-lg-4">
                    <Component4></Component4>
                </div>
                <div className="col-lg-4">
                    <Component4></Component4>
                </div>
                <div className="col-lg-4">
                    <Component4></Component4>
                </div>
            </div>
        </ContainerFull>
    )
}
//--- END OF COMPONENT 4 ---

//--- START OF COMPONENT 5 ---
const C5Container = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    min-height: 250px;
    width: 100%;

    align-items: center;
    justify-content: center;

    box-shadow: 0 0 15px 2px rgb(0 0 0 / 6%);
    background-color: #fff;
    
    h3{
        color: ${COLORS.bootstrap.info.main}
    }
    h3, p{
        transition: color 0.2s ease-in-out;
    }
    :hover{
        > .image-overlay, .color-overlay{
            opacity: 1;
        }
        h3, p{
            color: #fff;
        }
       
    }
`
const C5ColorOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
`
const C5ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${photo});
    background-position: center;
    background-repeat:no-repeat;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    
`

const C5Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    text-align: center;
`
function Component5(){
    return(
        <C5Container>
            <C5ImageOverlay className="image-overlay"></C5ImageOverlay>
            <C5ColorOverlay className="color-overlay"></C5ColorOverlay>
            <C5Content className="content">
                <h3>Header or Title</h3>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga sequi alias doloremque aliquid animi et quod perferendis, incidunt sit, necessitatibus eos, facilis sapiente iure fugiat quidem mollitia doloribus totam.</p>
                </div>
            </C5Content>
        </C5Container>
    )
} 

function Composite5(){
    return(
        <ContainerFull title="Component 5">
            <div className="row">
                <div className="col-lg-4 mb-2">
                    <Component5></Component5>
                </div>
                <div className="col-lg-4 mb-2">
                <Component5></Component5>
                </div>
                <div className="col-lg-4 mb-2">
                <Component5></Component5>
                </div>
                <div className="col-lg-4 mb-2">
                <Component5></Component5>
                </div>
                <div className="col-lg-4 mb-2">
                <Component5></Component5>
                </div>
                <div className="col-lg-4 mb-2">
                <Component5></Component5>
                </div>
            </div>
        </ContainerFull>
    )
}
//--- END OF COMPONENT 5 ---

const Components01 = [
    Composite1,
    Composite2,
    Component3,
    Composite4,
    Composite5
];

export default Components01;