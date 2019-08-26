import React from 'react'

class Gold extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            totalGold:1056,
            gold:0,
            silver:10,
            copper:56
        };
    }

    onClickGold = () => {
        this.setState((prevState, props) => ({
            gold: prevState.gold + 1
        }));

    }

    render(){

        return(
            <div className="container gold">
                <div className="row">
                    <div className="col-4">
                        <img className={'curve-image'} src={'/Items/INV_Misc_Coin_01.png'}/>
                        <p>{this.state.gold}</p>
                    </div>
                    <div className="col-4">
                        <img className={'curve-image'} src={'/Items/INV_Misc_Coin_03.png'}/>
                        <p>{this.state.silver}</p>
                    </div>
                    <div className="col-4">
                        <img className={'curve-image'} src={'/Items/INV_Misc_Coin_05.png'}/>
                        <p>{this.state.copper}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gold