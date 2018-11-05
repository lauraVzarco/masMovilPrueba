import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PhoneListContainer.css';
import { connect } from 'react-redux';

class PhoneListContainer extends Component {
    render() {
        const mobileList = this.props.list.map((mobile) => {
            return (
                <li key={mobile.id} className="liCard">
                    <Link className="cardLink" to={'/mobile/' + mobile.id}>
                        <div className="mobileCard">
                            <img src={mobile.image}
                                className="phoneImage"
                                alt="mobile"
                            />
                            <div className="mobileData">
                                <h2 className="mobileName">
                                    {mobile.title}
                                </h2>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        });

        return (
            <div>
                <p className="knowMore">Clica en un teléfono para saber más sobre él...</p>
                <ul className="listPhone">
                    {mobileList}
                </ul>
            </div>
        );
    }
}

export default connect(state => ({ list: state.list }))(PhoneListContainer);
