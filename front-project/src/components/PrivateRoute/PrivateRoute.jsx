import { useEffect } from 'react';
import {connect} from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";
import { FormattedMessage  as T} from 'react-intl';


const PrivateRoute = ({user, component, dispatch}) =>{


    const location = useLocation();

    if (!component) throw new Error('Jose, Luispa, Sergi y Hector no han pasado un componente :/');

    if (user === null) return <div><T id='Register.noUser'/></div>

    if (user === false){
        return <Navigate to='/access' state={{prevRoute: location.pathname}} />
    }

    if (user.email) return component;

};

export default connect(({auth}) => ({user: auth.user}))(PrivateRoute);
