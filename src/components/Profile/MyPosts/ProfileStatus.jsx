import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
       
        //alert('hey')
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        //alert('hey')
        this.setState({editMode: false})
    }
    render () {
         return (
    <div>
        {!this.state.editMode && 
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
            </div>}
       {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
            </div>}
        
       

    </div>
  )
    }
 
}

export default ProfileStatus;