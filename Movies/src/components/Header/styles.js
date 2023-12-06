import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width:100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};



  display: flex;
  justify-content: space-between;

  padding: 0 10px;

`

export const Profile = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 123px;

  align-items: center;
  gap: 64px;
  flex-shrink: 0;

  h1{
    color:${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }

  input {
  

    height: 56px;
    background-color:  ${({ theme }) => theme.COLORS.GRAY_200};
    background: #262529;

    display: flex;
    padding: 19px 24px;
    align-items: flex-start;
    flex: 1 0 0;
    border: 1px solid;
 
    border: none;
    border-radius: 10px;

  }

  > div{
    display: flex;
    align-items: center;
    
    text-align: center;
    
   
    line-height: 24px;
  

    strong {
    display:flex;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  
    }
  }

  img {
   
   width: 56px;
   height: 56px;
   border-radius: 50%;
   margin-left: 10px;
 }

`