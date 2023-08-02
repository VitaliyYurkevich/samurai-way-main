import React from 'react';


class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
this.props.updateStatus(this.props.status)
    }

    onStatusChange = (e:any) => {
      this.setState({
          status: e.currentTarget.value
      })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={ this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }

            </div>
        )
    };

}


export default ProfileStatus;