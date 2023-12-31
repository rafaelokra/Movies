import { FiMail, FiLock,FiUser,FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

export function SignUp() {
  return (
    <Container>
        
      <Form>
        <h1>Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>


        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <a href="#">
        
       <p> Criar conta</p> 
        </a>

        
      </Form>
    <Background />
    
    </Container>
  )
}