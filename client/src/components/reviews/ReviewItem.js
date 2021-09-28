import React, { useState } from 'react'


const ReviewItem = ({review, deleteReview, editReview}) => {
    
    // edit review, edit text states
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState('')

    const handleDelete = (e) => {
        deleteReview(parseInt(e.target.id))
    }

    const handleEditStateChange = () => {
        setIsEditing(!isEditing)
    }

    const buttonText = (isEditing) ? "Cancel Edit" : "Edit Review"

    const handleTextChange = (e) => {
        setEditText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedReview = {
            comment_id: parseInt(e.target.id),
            comment_body: editText,
            trainer_id: review.trainer_id
        }
        editReview(updatedReview)
        setEditText('')
        setIsEditing(false)
    }



    return(
        <div className="reviewItem">
            <h1 className="hover">{review.comment_body}</h1>
            <button className="ui primary button" id={review.comment_id} onClick={handleDelete}>Delete Review</button>
            <button className="ui primary button" onClick={handleEditStateChange}>{buttonText}</button>
            {isEditing &&
            <div>
                <form onSubmit={handleSubmit} id={review.comment_id}>
                    <input className="label" type="text" value={editText} onChange={handleTextChange} placeholder="Edit review..."/>
                    <input type="submit" className="ui primary button"/>
                </form>
            </div>}
        </div>
    )
}

export default ReviewItem