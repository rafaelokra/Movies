import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;
  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
    
  }

  > h2 {
    font-size: 28px;
    margin: 48px 0;
    margin-left: -137px;
    
    
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-left: -26px;
    
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};

    p {
        margin-left: 8px;
    }

  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;

`;