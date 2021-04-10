import { fetchLogin, fetchLogout } from './services';

const Nav = ({user, onLogout, onLogin}) => {
    const login = () => {
        fetchLogin()
        .then( () => onLogin() )
        .catch( (err) => {
            
        })
    }
}