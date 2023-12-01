import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; 

    display: flex;
    justify-content: space-between;
    padding: 0 80px;


`;

export const Profile = styled.div`

       display:flex;
        align-items: center;
        margin-left: 500px;

    img { 
            width: 56px;
            height: 56px;
            border-radius: 50%;
   
}
   
    div {

        flex-direction:column;
        margin-left: -150px;
        line-height: 24px;
      
    }

    span {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

    }

`;
