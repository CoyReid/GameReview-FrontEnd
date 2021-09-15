
import React from 'react'
import ReviewForm from './ReviewForm';
import CardContainter from './CardContainter';


const MainPage = () => {
  

    return (
        <div>
        <div className="main">
            <CardContainter/>
        </div>
        <div className="form">
            <ReviewForm/>
        </div>
        </div>
    )
}

export default MainPage
