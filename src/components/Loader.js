import React from 'react'
import { Spinner, Row, Col } from 'react-bootstrap'

const Loader = () => {
    return (
        <div className="d-flex justify-content-center mt-5" style= {{height: '100vh'}} >
            <Row>
                <Col>
                <Spinner animation="border" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="grow" variant="success" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="mx-3">
                        Fetching pokemon...
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Loader
