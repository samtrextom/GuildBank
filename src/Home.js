import React from 'react'
import BankTileRows from "./BankTileRows";
import Gold from "./Gold";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

class Home extends React.Component{

    render(){

        return(
            <div>
                <BankTileRows/>
                <Gold/>
                <Deposit/>
                <Withdraw/>
            </div>
        )
    }
}

export default Home