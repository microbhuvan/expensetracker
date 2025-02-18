//IncomeExp.jsx
import { GlobalContext } from "../context/GlobalState"
import {useContext} from 'react'

export const IncomeExp = () =>{
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map((transaction)=> transaction.amount)

    const income = amounts
    .filter((amt)=> amt>0)
    .reduce((acc,item)=> (acc+=item),0)
    .toFixed(2)

    const expense = amounts
    .filter((amt)=> amt<0)
    .reduce((acc,item)=> (acc+=item),0)
    .toFixed(2)

    return (
        <div className='incexp'>
            <div>
                <h4>INCOME</h4>
                <p>{income}</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <p>{Math.abs(expense)}</p>
            </div>
        </div>
    )
}