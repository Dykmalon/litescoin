import React from 'react';
import { FaWallet, FaSearch,FaPencilAlt } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";


export default function Menu() {
    return (
     <div className='menu-main'>
        <div className="menu">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="/assets/litescoin.png"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#"><FaWallet />Wallet</a>
                            <a className="nav-link" href="#"><FaSearch />Search</a>
                            <a className="nav-link" href="#"><FaPencilAlt />Inscribe</a>
                            <a className="nav-link" href="#"><PiBracketsCurlyBold />LTC-20</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    );
}