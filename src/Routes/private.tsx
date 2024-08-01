import { Outlet, useNavigate } from 'react-router-dom';
import TokenService from '../utils/tokenService';
import LogInPage from '../pages/logIn/logInPage';

const PrivateRoute = () => {
    const access_token = TokenService.getAccessToken();

    return access_token ? <Outlet /> : <LogInPage />;
};

export default PrivateRoute;
