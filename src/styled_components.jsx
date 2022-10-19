import styled,{css} from "styled-components";

export const Container=styled('div')` 
display:flex;
background-color:coral;
padding:20px;
height:fit-content;

`
const common=css`
     color:blue;
    font-family:bold;
    font-weight:400;
    padding:10px;
    border:1px solid black;
    font-size:20px;
`
export const Title =styled.h1`
 ${common}
    font-size:40px;
`


export const Des =styled.h1`
   ${common}
    font-size:30px;
`

const geTsize=(props)=>{
    switch(props.type){
        case'Large':
        return '200px';
        case'Medium':
        return '150px';
        case'Small':
        return '100px';
        default:
        return '150px';
    }
}
export const Box = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:30px;
    width: ${geTsize};
    height:${geTsize};
    border:2px solid blue;
    margin:10px;
`