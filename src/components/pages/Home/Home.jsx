import React from 'react'
import { Row } from 'reactstrap'
import CardBg from '../../Lib/Card/CardBg'

function Home() {
    return (
        <div className='home'>
            <Row>
                <div className="col-md-7">
                    <CardBg>
                        <h5>Today’s Sales</h5>
                    </CardBg>
                </div>
                <div className="col-md-5">
                    <CardBg>
                        <h5>Visitors chart</h5>
                    </CardBg>
                </div>
            </Row>
            <Row>
                <div className="col-md-5">1</div>
                <div className="col-md-4">2</div>
                <div className="col-md-3">3</div>
            </Row>
        </div>
    )
}

export default Home