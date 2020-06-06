import React from 'react';

const Nav: React.FC = () => {
    return (
        <nav className="bp3-navbar bp3-dark">
        <div> 
            <div className="bp3-navbar-group bp3-align-left">
                <div className="bp3-navbar-heading">Rick and Morty Lookup</div>
            </div>
            <div className="bp3-navbar-group bp3-align-right">
                {/* <button className="bp3-button bp3-minimal">Home</button>
                <button className="bp3-button bp3-minimal">About</button> */}
                <span className="bp3-navbar-divider"></span>
            </div>
        </div>
        </nav>
    )
}

export default Nav