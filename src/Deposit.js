import React from 'react'
import Select from 'react-select'

const itemSlotOptions = [
    {value:'One-Handed-Sword',label:'One-Handed Sword'},
    {value:'Two-Handed-Sword',label:'Two-Handed Sword'},
    {value:'One-Handed-Axe',label:'One-Handed Axe'},
    {value:'Two-Handed-Axe',label:'Two-Handed Axe'},
    {value:'Staff',label:'Staff'},
    {value:'Shield',label:'Shield'},
    {value:'Chest',label:'Chest'},
    {value:'Helmet',label:'Helmet'},
    {value:'Leggings',label:'Leggings'}
]

const bankSlotOption = [
    {value:'Weapons/Armor',label:'Weapons/Armor'},
    {value:'Potions/Consumables',label:'Potions/Consumables'},
    {value:'Crafting Materials',label:'Crafting Materials'},
    {value:'Miscellaneous',label:'Miscellaneous'}
]

class Deposit extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            itemName: null,
            itemSlot: null,
            description: null,
            errors: {
                itemName: '',
                itemSlot: '',
                description:''
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'itemName':
                errors.itemName =
                    value.length < 2
                        ? 'Item Name must be 2 characters long!'
                        : '';
                break;
            case 'itemSlot':

                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
    }

    render(){
        return(
            <div className='form-wrapper'>
                <h2>Deposit/Withdraw Items</h2>
                <form onSubmit={this.handleSubmit} noValidate >
                    <div className='itemName form-input'>
                        <input className={'form-input'} type='text' name='itemName' placeholder={'  Item Name'} onChange={this.handleChange} noValidate />
                    </div>
                    <div className='description form-input'>
                        <input className={'form-input'} type='text' name='description' placeholder={'  Item Description'} onChange={this.handleChange} noValidate />
                    </div>
                    <div className={'form-input'}>
                        <Select
                            options={bankSlotOption}
                            placeholder={'Bank Slot'}
                            clearable={false}
                        />
                    </div>
                    <div className='submit form-input'>
                        <button>Deposit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Deposit