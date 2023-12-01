
import { Container, Profile } from './styles'

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/rafaelokra.png" 
                alt="Foto do usuario" />

                <div>
                    <span>Rafael Pereira</span>
                </div>
            </Profile>
        
        </Container>
    )
}
