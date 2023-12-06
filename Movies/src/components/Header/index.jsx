
import { Container, Profile} from './styles'

export function Header() {
    return(
        <Container>
            <Profile>
            <h1>RocketMovies</h1>

            <input
              type="text" 
              placeholder='Pesquisar pelo título' 
             />

             <div>
               <strong>Rafael Pereira</strong>

                <img
                  src="https://github.com/rafaelokra.png"   
                  alt="Foto do usuario"  
                 />
             

            </div>   
            </Profile>
        
        </Container>
    )
}
