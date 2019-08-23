import React from 'react'
import BankTileRows from "./BankTileRows";
import Gold from "./Gold";

class Home extends React.Component{

    render(){

        return(
            <div>
                <BankTileRows/>
                <Gold/>
            </div>
        )
    }
}

export default Home