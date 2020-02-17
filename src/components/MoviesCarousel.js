import React from 'react';
import { Container, Row, Carousel} from 'react-bootstrap';

class MoviesCaousel extends React.Component {

    render() {
        const images = this.props.data
        return <Container>
        <Row>
            <Carousel>
                {images.map(image => {
                    return <Carousel.Item key={image.imdbID}>
                        <img
                            className="d-block"
                            src={image.Poster}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 onClick={() => this.props.openMovie(image.imdbID)}>{image.Title}</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
                
            </Carousel>
        </Row>
    </Container>
    }
    
}
export default MoviesCaousel;