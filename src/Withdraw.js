import React from 'react'

class Withdraw extends React.Component{

    render(){

        return(

            <div className='form-wrapper'>
                <h2>Deposit/Withdraw Items</h2>
                <form onSubmit={this.handleSubmit} noValidate >
                    <div className='itemName'>
                        <input type='text' name='itemName' placeholder={'Item Name'} onChange={this.handleChange} noValidate />
                    </div>
                    <div className='submit'>
                        <button>Withdraw</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Withdraw