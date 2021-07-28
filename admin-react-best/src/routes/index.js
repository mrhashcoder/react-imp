import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicRoutes from 'routes/PublicRoutes';

import {connect} from 'react-redux';

function Routes(props) {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const isUserLoggedIn = props.is_logged_in;
    
    return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

const mapStateToProps = (state) => {
    return {
        is_logged_in : state.auth.is_logged_in
    }
}

export default connect(mapStateToProps)(Routes)
