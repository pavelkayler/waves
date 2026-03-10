await fetch("http://localhost:6862/transactions/signAndBroadcast", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "contractId": "E8QxxB1CqH9tbajk8VtQUzfNcnxk4r7JojZjjMhJ8cE3",
        "fee": 10,
        "sender": "3Nd1rdeUowjPqrbVwUmEuGd5tMUaxUhbsi2",
        "password": "OrKtHdruJjlkqoeMjvk0jA",
        "type": 104,
        "params":
            [
                { "keys": "action", "type": "string", "value": "registration" },
                { "keys": "name", "type": "string", "value": "ivan" },
                { "keys": "age", "type": "integer", "value": 27 },
                { "keys": "mail", "type": "string", "value": "fasdgaewghs" }
            ],
        "version": 2,
        "contractVersion": 1
    })
})
