import React from 'react';
import { FaWallet, FaSearch } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";


export default function Menu() {
    return (
     <div className='menu-main'>
        <div className="menu">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LITECOIN</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#"><FaWallet />Wallet</a>
                            <a class="nav-link" href="#"><FaSearch />Search</a>
                            <a class="nav-link" href="#"><PiBracketsCurlyBold />Inscribe</a>
                            <a class="nav-link" href="#">LTC-20</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    );
}