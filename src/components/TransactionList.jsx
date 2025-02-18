import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
import { Transaction } from './Transaction'

export const TransactionList = () =>{

    const { transactions } = useContext(GlobalContext)

    return (
        <div>
            <h3>History</h3>
            <ul>
                {transactions.map((transaction)=>(
                    <Transaction
                    key = {transaction.id} 
                    transaction={transaction}/>))
                }
            </ul>
        </div>
    )
}