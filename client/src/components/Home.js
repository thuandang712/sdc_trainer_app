import React from 'react'
import Categories from './Categories'
import axios from 'axios';

export default class Home extends React.Component {

    state = {
        trainers: [],
        reviews: [],
        loading: false,
        singleTrainer: null,
    };
    
    
    // async componentDidMount () {
    // this.setState({loading: true})
    // const resTrainers = await axios.get("http://localhost:5500/api/trainers")
    // this.setState({trainers: resTrainers.data})
    // this.setState({loading: false})
    // };
    
    
    render() {
    
        const { trainers, reviews, singleTrainer, loading } = this.state
    
    
        // select single trainer - GOOD
        const selectSingleTrainer = async(id) => {
          const res = await axios.get(`http://localhost:5500/api/trainers/${id}`)
          this.setState({singleTrainer: res.data})
          // FILTER reviews belongs to the single trainer
          const resReviews = await axios.get("http://localhost:5500/api/comments")
          const rev = resReviews.data.filter(review => review.trainer_id === parseInt(id))
          this.setState({reviews: rev})
        }
    
        
        // clear single trainer -- GOOD
        const clearSingleTrainer = () => {
          this.setState({singleTrainer: null})
        }
    
    
        // ADD reviews -- add data validation
    
        const addReview = async(obj) => {
          const res = await axios.post('http://localhost:5500/api/comments/', obj)
          this.setState({reviews: [...reviews, ...res.data]})
        }
    
    
        // DELETE reviews -- GOOD
        const deleteReview = async(id) => {
          // delete on UI 
          this.setState({reviews: reviews.filter(reviews => reviews.comment_id !== id)})
          // delete on DB 
          await axios.delete(`http://localhost:5500/api/comments/${id}`)
        }
    
    
        // EDIT review -- GOOD
        const editReview = async(obj) => {
        const newReview = reviews.map(reviews => {
        if(reviews.comment_id === obj.comment_id) {  
            reviews.comment_body = obj.comment_body
        }
        return reviews
        })
        this.setState({reviews: newReview})
        
        // update on DB
        let newUpdatedReview = {
        comment_body: obj.comment_body,
        trainer_id: obj.trainer_id
        }
        await axios.patch(`http://localhost:5500/api/comments/${obj.comment_id}`, newUpdatedReview)
    }
    
    
    // if (singleTrainer) {
    //     return (
    //     <SingleTrainer singleTrainer={singleTrainer}
    //     clearSingleTrainer={clearSingleTrainer}
    //     reviews={reviews} addReview={addReview} deleteReview={deleteReview} editReview={editReview}
    //     />
    //     )
    // }

    return (
        <div className='mainPageContainer'>
          <h1 className="mainHeader">Trainers R Us</h1>
          <h2 className="secondaryHeader"> BE YOUR MOST FIT SELF!</h2>
          <Categories/>
        </div>

    )
    }
}
