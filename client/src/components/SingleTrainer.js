import React from 'react'

import ReviewInput from './reviews/ReviewInput';
import Reviews from './reviews/Reviews';
import {List} from 'semantic-ui-react'

const SingleTrainer = ({singleTrainer, clearSingleTrainer, reviews, addReview, deleteReview, editReview, editTrainer}) => {

    // const [isEditing, setIsEditting] = useState(false)

    // const handleEditChange = () => {
    //     setIsEditting(!isEditing)
    // }

    // const buttonText = (isEditing) ? "Cancel Edit" : "Edit Trainer"

    return (
        <div className="singleTrainerContainer">
            <button className="ui primary button" onClick={() => clearSingleTrainer()}>Go Home</button>
            <List>
                <List.Item>
                    <List.Content className="singleTrainerItemName">
                        <h1 className="singeTrainerNameSize">{`${singleTrainer[0].first_name} ${singleTrainer[0].last_name}`}</h1>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content className="singleTrainerItem">
                        <h2>Schedule a consultation: <List.Icon name='phone'/> {singleTrainer[0].phone_number} | <List.Icon name='mail'/>  {singleTrainer[0].email}</h2>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content className="singleTrainerItem">
                        <h2 className="checkOutHeader">Check out my reviews!</h2>
                        <h2>   <i className="angle double down icon"></i>   <i className="angle double down icon"></i>   <i className="angle double down icon"></i>   </h2>
                    </List.Content>
                </List.Item>
            </List>
            <Reviews reviews={reviews} deleteReview={deleteReview} editReview={editReview} />
            <ReviewInput addReview={addReview} singleTrainer={singleTrainer}/>
        </div>
    )
}

export default SingleTrainer
