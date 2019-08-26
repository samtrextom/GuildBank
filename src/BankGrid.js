import React from 'react'
import {Link} from 'react-router-dom'


const styles = {
    backgroundImage: `url(${"/ModifiedImages/EmptyBagSlot.png"})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    width: '65px',
    height: '65px'

}

class BankGrid extends React.Component{



    render(){

        return(
            <div className='container bank-grid'>
                <table className='bank-grid-table'>
                    <tr>
                        <td style={styles}><Link to={'ThunderFury'}><img className={'curve-image'} src={'/Weapons/INV_Sword_39.png'}/></Link></td><td style={styles}></td><td style={styles}></td>
                        <td style={styles}></td><td style={styles}></td><td style={styles}></td>
                    </tr>
                    <tr>
                        <td style={styles}></td><td style={styles}></td><td style={styles}></td>
                        <td style={styles}></td><td style={styles}></td><td style={styles}></td>
                    </tr>
                    <tr>
                        <td style={styles}></td><td style={styles}></td><td style={styles}></td>
                        <td style={styles}></td><td style={styles}></td><td style={styles}></td>
                    </tr>
                    <tr>
                        <td style={styles}></td><td style={styles}></td><td style={styles}></td>
                        <td style={styles}></td><td style={styles}></td><td style={styles}></td>
                    </tr>
                    <tr>
                        <td style={styles}></td><td style={styles}></td><td style={styles}></td>
                        <td style={styles}></td><td style={styles}></td><td style={styles}></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default BankGrid