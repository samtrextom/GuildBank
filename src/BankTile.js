import React from 'react'
import {Link} from 'react-router-dom'

class BankTile extends React.Component{

    render(){

        return(
            <div className={"event-tile"}>
                <div className={"tile-photo"}>
                    <img src = {this.props.bankTile.bagTilePhoto}/>
                    <h3 className={"tile-title"}>{this.props.bankTile.tileName}</h3>
                </div>
                <div className="mask"></div>
                <div className="content">
                    <h2>{this.props.bankTile.tileName}</h2>
                    <p>
                        <table>
                            <tr>
                                <td>
                                    <img src={this.props.bankTile.uniqueTilePhoto1}/>
                                </td>
                                <td>
                                    <img src={this.props.bankTile.uniqueTilePhoto2}/>
                                </td>
                                <td>
                                    <img src={this.props.bankTile.uniqueTilePhoto5}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={this.props.bankTile.uniqueTilePhoto3}/>
                                </td>
                                <td>
                                    <img src={this.props.bankTile.uniqueTilePhoto4}/>
                                </td>
                                <td>
                                    <img src={this.props.bankTile.uniqueTilePhoto6}/>
                                </td>
                            </tr>
                        </table>
                    </p>
                    <Link to={this.props.bankTile.tileUrl}>
                        <a href="#" className="info">Open Bag</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BankTile