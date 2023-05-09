import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPostAC, setUserProfileAC, updateNewPostTextAC} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return(
            <div>
                <Profile />
            </div>
        )
    }
}


let mapStateToProps = () => {

}



export default  connect(mapStateToProps, {addPostAC,updateNewPostTextAC,setUserProfileAC })(ProfileContainer)