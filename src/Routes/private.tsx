import { Outlet } from 'react-router-dom';
import TokenService from '../utils/tokenService';

import NotLogIn from '../pages/logIn/components/notLogIn';

const PrivateRoute = () => {
    const access_token = TokenService.getAccessToken();

    return access_token ? <Outlet /> : <NotLogIn />;
};

export default PrivateRoute;
