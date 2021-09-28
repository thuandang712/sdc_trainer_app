import React from 'react'

class ReviewInput extends React.Component {

    state = {
        reviewText: ''
    }

    render() {
        const {reviewText} = this.state
        const {addReview, singleTrainer} = this.props

        const handleChange = (e) => {
            this.setState({reviewText: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            addReview({
                comment_body: reviewText,
                trainer_id: singleTrainer[0].trainer_id
            })
            this.setState({reviewText: ''})
        }

        return(
            <div>
                <h2 className="reviewHeader">Leave a review!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    className="newReview"
                    placeholder="Add review here..."
                    value={reviewText}
                    onChange={handleChange}
                    />
                    <input type="submit" className="ui primary button"/>
                </form>
            </div>
        )
    }
}

export default ReviewInput