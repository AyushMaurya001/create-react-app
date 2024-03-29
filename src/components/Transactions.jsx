import { useEffect, useState } from "react"
import axios from "axios";
import { apiUrl } from "../api";
import Transaction from "./Transaction";

export default function Transactions(){

    const [sendTransactions, setSendTransactions] = useState([]);
    const [receivedTransactions, setReceivedTransactions] = useState([]);

    const token = localStorage.getItem('token');
    useEffect(()=>{
        const response = axios.get(`${apiUrl}/api/v1/account/transaction`, {
            headers: {
                Authorization: token
            }
        }).then((res) =>{
            if (res.data.transactions.send!=undefined) setSendTransactions(res.data.transactions.send);
            if (res.data.transactions.received!=undefined) setReceivedTransactions(res.data.transactions.received);
        });
    }, [])

    return (
        <p className=" w-full flex flex-col items-center font-Inter text-center font-medium px-10 m-4" >
            <p className=" text-2xl border-b border-black m-2">Your Transactions</p>
            {sendTransactions.map(transaction => <Transaction key={transaction._id} status="send" userId={transaction.toUserId} amount={transaction.amount} />)}
            {receivedTransactions.map(transaction => <Transaction key={transaction._id} status="received" userId={transaction.fromUserId} amount={transaction.amount} />)}
        </p>
    )

}