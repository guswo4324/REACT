import React from "react";
import UserCard from "./UserCard";

function UserGrid() {

    const users = [
        {id:1, name:'짱구', age:7},
        {id:2, name:'짱아', age:2},
        {id:3, name:'맹구', age:6},
        {id:4, name:'철수', age:9},
        {id:5, name:'흰둥이', age:10},
    ]

    return(
        <div>
            {users.map(user => (
                <UserCard key={user.id}
                user={user} />
            ))}
        </div>
    )

}

export default UserGrid;