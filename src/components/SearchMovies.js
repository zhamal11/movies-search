import React from 'react';
import { Button, FormControl, Col, Container, Row } from 'react-bootstrap';

class SearchMovies extends React.Component {
    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleClick = () => {
        this.props.handleSearchMovies(this.state.text)
    }

    render() {
        return <Container>
            <Row>
                <Col sm={10}>                    
                    <FormControl
                        placeholder="Search"
                        aria-label="Text"
                        aria-describedby="basic-addon"
                        onChange = {this.handleChange}
                    />
                </Col>
                <Col sm={2}>
                    <Button variant="primary" onClick={this.handleClick}>Search</Button>
                </Col>
            </Row>
        </Container>
        
    }
}

export default SearchMovies;