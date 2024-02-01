import React from "react";
import axios from "axios";

import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfileThunk, getUserStatusThunk, setUserProfileCreator, updateUserStatusThunk } from "../../redux/profileReducer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

//withRouter чтобы прокидывать url адрес пользователя в profile
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component  {
    
    componentDidMount() {
     // debugger;
        let profileId = this.props.router.params.userId; //userId это название роута из App.js
        if (!profileId) {
            profileId = 30648
        }
        this.props.getUserProfileThunk(profileId)
        this.props.getUserStatusThunk(profileId)
      /* перенос в profileReduser
       profileAPI.getProfile(profileId)
            (перенос в api и замена на profileAPI.getProfile)
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`) 
        .then(res => {
            this.props.setUserProfile(res.data)
           
          });*/
    }

    render() {
        
        return (
                <div >
                
            <Profile 
                {...this.props} 
                profile={this.props.profile} 
                status = {this.props.status}
                updateStatus= {this.props.updateStatus}
            
            
            /> 
            {/* {...this.props}передача всех props*/}
           
            
            
                </div>
            )
        }
    }

  

    //hoc перенос в compose
    //let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
    
   /*запись аналогична let AuthRedirectComponent =  (props) => {
        if (!props.isAuth) return <Navigate to="/login"></Navigate>
        return <ProfileContainer {...props}/>
    }*/
    
  



    let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
      //  isAuth: state.auth.isAuth
      status: state.profilePage.status
       
    })

// перенос в compose
/*export default connect (mapStateToProps, {
    setUserProfile: setUserProfileCreator ,
    getUserProfileThunk: getUserProfileThunk
}) (withRouter(AuthRedirectComponent))*/

export default  compose(connect (mapStateToProps, {
   // setUserProfile: setUserProfileCreator ,
    getUserProfileThunk: getUserProfileThunk,
    getUserStatusThunk: getUserStatusThunk,
    updateStatus: updateUserStatusThunk


}),
    withRouter,
    withAuthRedirect
 )(ProfileContainer)