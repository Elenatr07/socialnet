import React from "react";
import axios from "axios";

import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfileCreator } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
      //  debugger;
        let profileId = this.props.router.params.userId; //userId это название роута из App.js
        if (!profileId) {
            profileId = 30648
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
        .then(res => {
            this.props.setUserProfile(res.data)
           
          });
    }

    render() {
        return (
                <div >
                
            <Profile 
                {...this.props} 
                profile={this.props.profile} 
            
            
            /> 
            {/* {...this.props}передача всех props*/}
           
            
            
                </div>
            )
        }
    }
    

    let mapStateToProps = (state) => ({
        profile: state.profilePage.profile
    })


export default connect (mapStateToProps, {
    setUserProfile: setUserProfileCreator ,
}) (withRouter(ProfileContainer))