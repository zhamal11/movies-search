import React from 'react';
import { Container, Row, Col, Image, Button, Table } from 'react-bootstrap'

function MoviePage({dataPage, clickBack}) {
        return <div>
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary float-left button-back" onClick={() => clickBack()}>Go Back</Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Image src={dataPage.Poster+'/100px250'} />
                    </Col>
                    <Col>
                    <Table  bordered>
                        <tbody>
                            <tr>
                                <td>Title</td>
                                <td>{dataPage.Title}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{dataPage.Year}</td>
                            </tr>
                            <tr>
                                <td>imdbRating</td>
                                <td>{dataPage.imdbRating}</td>
                            </tr>
                            <tr>
                                <td>Actors</td>
                                <td>{dataPage.Actors}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>{dataPage.Country}</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>{dataPage.Genre}</td>
                            </tr>
                            <tr>
                                <td>Released</td>
                                <td>{dataPage.Released}</td>
                            </tr>
                            <tr>
                                <td>Runtime</td>
                                <td>{dataPage.Runtime}</td>
                            </tr>
                            <tr>
                                <td>Plot</td>
                                <td>{dataPage.Plot}</td>
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    
}

export default MoviePage;