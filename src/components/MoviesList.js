import React from 'react';
import { Container, Row, Button, Card, CardColumns } from 'react-bootstrap';

function MoviesList({movies, openMovie}) {

    return (
        <div className="main">
        <Container>
            <Row>
                <CardColumns>
                    {movies.map((movie, idx) => {
                        return (
                        <Card key={idx}>
                            <Card.Img 
                                variant="top" 
                                src={movie.Poster.toString()}
                            />
                            <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                                <Button onClick={() => openMovie(movie.imdbID)} variant="primary">Open Page</Button>
                            </Card.Body>
                        </Card>)
                    })}
                </CardColumns>

            </Row>
        </Container>
      </div>
    )
}

export default MoviesList;