import React from "react"; 
import TrainerItem from "../TrainerItem";

const Running = ({trainers, selectSingleTrainer}) => {
    
    return (
        <div className='trainers-grid-container'>
            {trainers.filter( trainer => trainer.running === true)
                .map( trainer => <TrainerItem key={trainer.trainer_id} trainer={trainer} selectSingleTrainer={selectSingleTrainer}/>)}
        </div>
    )
}

export default Running