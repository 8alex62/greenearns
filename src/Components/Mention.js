import styled from "styled-components";

const Mention = () =>{
    return(
        <MentionContainer>   
            <h1>GreenEarns</h1>
            <h3>&copy; 2024 All Rights Reserved</h3>
        </MentionContainer>
    );
}

export default Mention



const MentionContainer = styled.div`
    color: white; 
    text-align: center;
    padding: 20px;
    height : 15%;
    padding: 0;
    margin: 0;

    & > h1{
        height:0;
        font-size: 25px;
        padding-bottom:15px
    } 

    & > h3{
        height:0;
        margin-top: 15px;
        font-size: 15px;
    }
`;