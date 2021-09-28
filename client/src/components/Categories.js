import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'

const Categories = () => {

    return (
        <Fragment>
            <Grid columns={5} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Link to={'/bodybuilding'}>
                            <h2 className="catagoriesItem">Body Building</h2>
                        </Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to={'/running'}>
                            <h2 className="catagoriesItem">Running</h2>
                        </Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to={'/swimming'}>
                            <h2 className="catagoriesItem">Swimming</h2>
                        </Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to={'/cycling'}>
                            <h2 className="catagoriesItem">Cycling</h2>
                        </Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to={'/powerlifting'}>
                            <h2 className="catagoriesItem">Power Lifting</h2>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    )
}

export default Categories