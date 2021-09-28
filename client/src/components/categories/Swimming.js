import React from "react"; 
import TrainerItem from "../TrainerItem";

const Swimming = ({trainers, selectSingleTrainer}) => {
    
    return (
        <div className='trainers-grid-container'>
            {trainers.filter( trainer => trainer.swimming === true)
                .map( trainer => <TrainerItem key={trainer.trainer_id} trainer={trainer} selectSingleTrainer={selectSingleTrainer}/>)}
        </div>
    )
}

export default Swimming