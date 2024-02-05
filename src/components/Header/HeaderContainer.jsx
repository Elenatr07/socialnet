import React from 'react'
import Header from './Header'

import { connect } from 'react-redux';
import { getAuthUserDataThunk, logoutThunk, setAuthUserDataCreator } from '../../redux/authReducer';



class HeaderContainer extends React.Component {

    //withCredentials: true подтверждение на отправку куки с логином и паролем после авторизации, если сервер поддреживает этот формат
    /*componentDidMount() {

        this.props.getAuthUserDataThunk()
      // перенос в authReduser
     //  authAPI.meAuth()
            // перенос в api и замена на authApi.meAuth)
      //      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
      //  .then(res => {
            //debugger
            //resultCoвe это инфа с сервера о том что авторизация состоялась, название и код зависит от настроек сервера
       //     if(res.data.resultCode ===0) {
       //         let {id, email, login} = res.data.data
        //        this.props.setAuthUser(id, email, login)
        //    }
      //  })
    }*/
    render() {
        return (
         <Header {...this.props}/>
        )
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, 
    {setAuthUser: setAuthUserDataCreator,
        getAuthUserDataThunk: getAuthUserDataThunk,
        logout: logoutThunk
    }) (HeaderContainer);