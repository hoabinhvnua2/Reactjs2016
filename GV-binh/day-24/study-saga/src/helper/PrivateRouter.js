import { Redirect, Route } from "react-router";

export const PrivateRouter = ({component: Component, roles, ...rest}) => (
    <Route 
        {...rest}
        render={(props) => {
            const local = JSON.parse(localStorage.getItem('auth'))
            if (!local) {
                return <Redirect to={{pathname: '/sign-in', from: props.location}}/>
            }

            if(roles && (roles.indexOf(local.role) === -1)) {
                return <Redirect to={{pathname: '/'}} />
            }

            return <Component {...props }/>
        }}
    />
)