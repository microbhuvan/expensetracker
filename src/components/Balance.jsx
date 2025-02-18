import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

export const Balance = () =>{
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map((transaction)=>transaction.amount)
    console.log(amounts)
    const total = amounts.reduce((acc,item)=> (acc+=item)).toFixed(2)
    return (
        <>
            <h4 style={{marginBottom : '0px'}}>Your Balance</h4>
            <h1 id='balance'style={{marginTop : '0px'}}>${total}</h1>
        </>
    )
}