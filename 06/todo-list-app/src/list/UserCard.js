import React from 'react';

function UserCard({user}) {

    return(
        <div>
            <h3>{user.name}</h3>
            <p>나이: {user.age}</p>
        </div>
    );
}

export default UserCard;