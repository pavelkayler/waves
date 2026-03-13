await fetch("http://localhost:6862/transactions/signAndBroadcast", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "contractId": "65QT9Wn7UfCjwTfaJdFeGDnDAL1MAaKDmLEuBJmXLdn7",
        "fee": 10,
        "sender": "3Nd1rdeUowjPqrbVwUmEuGd5tMUaxUhbsi2",
        "password": "OrKtHdruJjlkqoeMjvk0jA",
        "type": 104,
        "params":
            [
                { "key": "action", "type": "string", "value": "createMoneyTransfer" },
                { "key": "_sender", "type": "string", "value": "3Nd1rdeUowjPqrbVwUmEuGd5tMUaxUhbsi2" },
                { "key": "receiver", "type": "string", "value": "3Np8WpZnjaHwaQ1HjuYqF2jhy1tNqjNHvjS" },
                { "key": "value", "type": "integer", "value": 5 },
                { "key": "timeLeft", "type": "integer", "value": 500 }
            ],
        "version": 2,
        "contractVersion": 1
    })
})
