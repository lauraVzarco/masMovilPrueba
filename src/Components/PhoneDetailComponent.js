import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PhoneDetailComponent.css';

class PhoneDetailComponent extends Component {
    render() {
        const {
            title,
            image,
            description,
            color,
            price
        } = this.props;

        return (
            <div className="detail">
                <div className="detailCard">
                    <img className="detailPhoto" src={image} alt="mobilePhoto" />
                    <div className="dataDetail">
                        <div className="detailNameBox">
                            <h2 className="detailName">
                                {title}
                            </h2>
                        </div>
                        <p className="detailDescription">
                            Description: {description}
                        </p>
                        <p className="detailColor">
                            Color Aviable: {color}
                        </p>
                        <p className="detailPrice">
                            Price: {price}
                        </p>
                    </div>
                </div>
                <Link className="backToHome" to={'/'}> <div className="backText"> Volver </div> </Link>
            </div>
        )
    }
}

export default PhoneDetailComponent;