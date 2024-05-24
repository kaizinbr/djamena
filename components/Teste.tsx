import React from "react";
import "./Teste.css";

const Teste: React.FC = () => {
    return (
        <div className="container">
            <div className="ticket basic">
                <p>Admit One</p>
            </div>

            <div className="ticket airline">
                <div className="top">
                    <h1>boarding pass</h1>
                    <div className="big">
                        <p className="from">BWI</p>
                        <p className="to">
                            <i className="fas fa-arrow-right"></i> SAN
                        </p>
                    </div>
                    <div className="top--side">
                        <i className="fas fa-plane"></i>
                        <p>Baltimore</p>
                        <p>San Diego</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="column">
                        <div className="row row-1">
                            <p>
                                <span>Flight</span>AA2005
                            </p>
                            <p className="row--right">
                                <span>Gate</span>B3
                            </p>
                        </div>
                        <div className="row row-2">
                            <p>
                                <span>Boards</span>10:25 AM
                            </p>
                            <p className="row--center">
                                <span>Departs</span>11:00 AM
                            </p>
                            <p className="row--right">
                                <span>Arrives</span>1:05 PM
                            </p>
                        </div>
                        <div className="row row-3">
                            <p>
                                <span>Passenger</span>Jesus Ramirez
                            </p>
                            <p className="row--center">
                                <span>Seat</span>11E
                            </p>
                            <p className="row--right">
                                <span>Group</span>3
                            </p>
                        </div>
                    </div>
                    <div className="bar--code"></div>
                </div>
            </div>

            <div className="info">
                <p>
                    Based on{" "}
                    <a href="https://dribbble.com/shots/11399236-Boarding-Pass" target="_blank">
                        this
                    </a>{" "}
                    Dribbble from Barna Erdei
                </p>
            </div>
        </div>
    );
};

export default Teste;
