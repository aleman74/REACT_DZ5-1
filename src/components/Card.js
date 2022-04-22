import React from 'react'

function Card(props) {

    const btnClick = (evt) => {
        console.log('Card::btnClick', props);
    };

    return (
        <div className="div_style">

            {(props.img != '') ? props.children : null}

            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary" onClick={btnClick}>Go somewhere</a>
            </div>
        </div>
    );

}

export default Card;
