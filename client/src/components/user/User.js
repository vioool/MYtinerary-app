import React, { Component } from 'react';
import { getUsers } from '../../store/actions/userActions'
import UserCard from './UserCard'
import { connect } from 'react-redux'

class User extends Component {
    
componentDidMount() {
    this.props.getUsers()
}

    render() {
        const { users } = this.props
        return (
            <div id="index">
                {users.map(({ username, email, img, _id }) => {
                    return <UserCard
                        key={_id}
                        name={username}
                        email={email}
                        _id={_id}
                        img={img}
                    />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    errors: state.error
})

export default connect(mapStateToProps, { getUsers })(User)