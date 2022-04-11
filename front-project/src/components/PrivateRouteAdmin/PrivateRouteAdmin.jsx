import {connect} from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouteAdmin = (props) =>{

    const location = useLocation();

    if(props.user===null) {
        return <Navigate to='/access' state={{prevRoute: location.pathname}} />
    }

    if (props.user.role === "basic"){
        return <Navigate to='/profile' state={{prevRoute: location.pathname}} />
    }

    if (props.user.role === "admin") return props.component;

};

const mapStateToProps = (state) => ({
    user : state.auth.user
})

export default connect(mapStateToProps)(PrivateRouteAdmin);