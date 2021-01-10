import React from 'react'
import Rating from '@material-ui/lab/Rating';

import bgImg from '../Assets/checkoutbg.jpg'

function ReviewPage() {
    const [value, setValue] = React.useState(2);
    return (
        <div className = "review-page">
            <div className="review-bg">
                <img src= {bgImg} alt=""/>
            </div>
            <div className = "restro-container review-position">
                
                <div className="feedback">
                    <div className="feedback-header">
                        <h2>How was your experience ?</h2>
                        <p>Your feedback are valueable</p>
                    </div>
                    <div className="feedback-body">
                    <Rating style = {{display: 'flex', justifyContent: 'center'}}
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
            }}
            />
            <br/>
            <br/>
            <div className="align-center">
                <textarea name="review text" id="review-text" cols="100" rows="8" placeholder = "your review"></textarea>
            </div>
                    </div>
                    <br/>
                    <div className="align-center">
                        <button>submit</button>
                    </div>
                    <br/>
                    <div className="align-center">
                        <button>No thanks</button>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default ReviewPage
