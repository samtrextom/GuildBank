import React from "react"
import bankTileData from './bankTileData'
import BankTile from './BankTile'


const bankTiles = bankTileData.map(bankTile=> <BankTile key = {bankTile.id} bankTile ={bankTile}/>)

class BankTileRows extends React.Component{



    render(){



        return(
            <div className="container event-tile-rows">
                <div className="row">
                    <div className="col-3">
                        <BankTile bankTile = {bankTiles[0].props.bankTile} />
                    </div>
                    <div className="col-3">
                        <BankTile bankTile ={bankTiles[1].props.bankTile}/>
                    </div>
                    <div className="col-3">
                        <BankTile bankTile = {bankTiles[2].props.bankTile}/>
                    </div>
                    <div className="col-3">
                        <BankTile bankTile = {bankTiles[3].props.bankTile}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default BankTileRows
