import { React, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) =>{

    const sign = transaction.amount<0 ? '-' : '+'
    const {deleteTransaction} = useContext(GlobalContext)
    return(
        <div className='card'>
            
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> 
            
        </li>
        <button  className='xb' onClick={()=> deleteTransaction(transaction.id)}>X</button>
        </div>
    )
}