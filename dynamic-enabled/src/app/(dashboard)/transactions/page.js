'use client'

import Transactions from "@/components/transaction/Transactions";

const TransactionsPage = () => {
    const transactions = [
        {
            value: '0.01',
            timestamp: 'less than a minute ago',
            to: 'Hao Xiang',
            from: 'mattic/dxhsuhs',
            hash: '0xBf...A413',
        },
        {
            value: '0.01',
            timestamp: 'less than a minute ago',
            to: 'Hao Xiang',
            from: 'mattic/dxhsuhs',
            hash: '0xBf...A413',
        },
        // Add more transaction data
    ];

    return (
        <Transactions transactions={transactions} />
    );
};

export default TransactionsPage;