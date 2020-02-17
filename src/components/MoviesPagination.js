import React from 'react'
import {Container, Row} from 'react-bootstrap'
import Pagination from 'rc-pagination';

function MoviesPagination({handlePageClick, page, totalResults}) {
    return <Container>
        <Row>
            <Pagination
                onChange={handlePageClick}
                current={page}
                total={parseInt(totalResults)}
            />
        </Row>
    </Container>;
}

export default MoviesPagination;