import React from 'react'

class Gold extends React.Component{

    render(){

        return(
            <div className="container event-tile-rows">
                <div className="row">
                    <div className="col-4">
                        <img src={'/Items/INV_Misc_Coin_01.png'}/>
                        <p>0</p>
                    </div>
                    <div className="col-4">
                        <img src={'/Items/INV_Misc_Coin_03.png'}/>
                        <p>10</p>
                    </div>
                    <div className="col-4">
                        <img src={'/Items/INV_Misc_Coin_05.png'}/>
                        <p>56</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gold