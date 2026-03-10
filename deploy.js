await fetch("http://localhost:6882/transactions/signAndBroadcast", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
  "type": 103,
  "version": 2,
  "sender": "3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA",
  "password": "iLZEoY8elvORbPXrwhSaLQ",
  "image": "registry.hub.docker.com/pavelkayler/waves:1.0.0",
  "contractName": "Contract",
  "imageHash": "f47b88de880dce48a5ea406efaa339277fc178c25c0abb91065d5b3acd36bd59",
  "params": [
    {
      "type": "string",
      "key": "action",
      "value": "init"
    }
  ],
  "fee": 100000000,
  "timestamp": Date.now(),
  "feeAssetId": null
})
})
.then(response => response.json)
.then(data => {console.log(data)})