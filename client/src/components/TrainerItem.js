import React from 'react'
import { List } from 'semantic-ui-react'

const TrainerItem = ({trainer, selectSingleTrainer}) => {


    const handleSingleTrainer = (e) => {
        selectSingleTrainer(e.target.id)
    }

    return (
        <List>
            <List.Item>
                <List.Content>
                    <h1 className="catTrainerName" id={trainer.trainer_id} onClick={handleSingleTrainer}>{`${trainer.first_name} ${trainer.last_name}`}</h1>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='mail' />
                <List.Content>
                    <p>{`Email: ${trainer.email}`}</p>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='phone' />
                <List.Content>
                    <p>{`Phone: ${trainer.phone_number}`}</p>
                </List.Content>
            </List.Item>
        </List>
    )
}

export default TrainerItem