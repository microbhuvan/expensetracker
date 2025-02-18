import { useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () =>{
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e)=>{
        e.preventDefault()
        const newTransaction =  {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount : +amount
        }

        addTransaction(newTransaction)
    }

    

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='text input'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' id='text' value={text}
                        className='inputt'
                        onChange={(e)=> setText(e.target.value)}></input>
                </div>
                <div className='amount input'>
                    <label htmlFor='amount'>Amount</label>
                    <input type='number' id="amount" value={amount}
                    className='inputt'
                        onChange={(e)=> setAmount(e.target.value)}></input>
                </div>
                <button type="submit" className='submit'>Add Transaction</button>
            </form>
        </div>
    )
}