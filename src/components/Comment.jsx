import React from 'react'

export default function Comment({ comment }) {
    return (
        <div>
            <hr></hr>
            <p><h5>email: {comment.email}</h5></p>
            <p>id:{comment.id}</p>
            <p>name: {comment.name}</p>
            <p>body: {comment.body}</p>
        </div>
    )
}
