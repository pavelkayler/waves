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
  "image": "registry.hub.docker.com/pavelkayler/waves:2.0.0",
  "contractName": "Contract",
  "imageHash": "3777fd893da25701fc196ce753ffbfec1de084d1bac99831d18d79ae22b6206e",
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