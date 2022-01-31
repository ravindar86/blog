import React from "react";
import { connect } from "react-redux";
//import { fetchUser } from "../actions";

class UserHeader extends React.Component{

   /* componentDidMount(){
        this.props.fetchUser(this.props.userId);
    } */

    render(){
        const {user} = this.props;

        if(!user)
            return null;

        return <div><h4>{user.name}</h4></div>;
    }
}

const mapStateToProps = (state, myProps) => {
    return {
        user: state.users.find(user => user.id === myProps.userId)
    };
}

//export default connect(mapStateToProps,{fetchUser})(UserHeader);
export default connect(mapStateToProps)(UserHeader);