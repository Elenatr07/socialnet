import React from "react";
import axios from "axios";

import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfileThunk, getUserStatusThunk, savePhotoThunk, saveProfileThunk, setUserProfileCreator, updateUserStatusThunk } from "../../redux/profileReducer";
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
    
    refreshProfile() {
     // debugger;
        let profileId = this.props.router.params.userId; //userId это название роута из App.js
        if (!profileId) {
            profileId = this.props.authorezedUserId
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

    componentDidMount() {
        this.refreshProfile();
    }

    //чтобы обновить пользователя при смене его Id
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.router.params.userId !== prevProps.router.params.userId)  {
            this.refreshProfile();
        }
        
    }

    render() {
        
        return (
                <div >
                
            <Profile 
                {...this.props} 
                isOwner= {!this.props.router.params.userId} //двойное отрицание приводит к булевому значению false. т.е если Id не указано то ты owner так как прошла авторизация
                profile={this.props.profile} 
                status = {this.props.status}
                updateStatus= {this.props.updateStatus}
                savePhoto = {this.props.savePhoto}
            
            
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
      status: state.profilePage.status,
      authorezedUserId: state.auth.id,
      isAuth: state.auth.isAuth
       
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
    updateStatus: updateUserStatusThunk,
    savePhoto: savePhotoThunk,
    saveProfile: saveProfileThunk,


}),
    withRouter,
    withAuthRedirect
 )(ProfileContainer)