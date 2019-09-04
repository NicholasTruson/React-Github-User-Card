// *** Imports *** //

import React from 'react'

import axios from 'axios'

import { Segment, Card, Image } from 'semantic-ui-react'

// *** Card Information *** //

// *** Class *** //

class CardContent extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        };
    }

// *** Axios *** //

    componentDidMount() {
        axios.get(`https://api.github.com/users/nicholastruson/followers`)
            .then(res => this.setState(res))
    }

// *** Render *** //

    render() {
        console.log(this.state.login)

        return (

            this.state.data.map ( e => {

                return (
                    < Segment raised >

                        <Card>
                            <Image src={e.avatar_url} />
                            <Card.Content>
                                <Card.Header>
                                    {e.login}
                                </Card.Header>
                                <Card.Meta>{e.html_url}</Card.Meta>
                                <Card.Description> Type: {e.type}</Card.Description>
                            </Card.Content>
                        </Card>
                    </Segment >)
            })

        )
    }
}

export default CardContent;