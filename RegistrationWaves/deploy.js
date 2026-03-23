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
  "image": "registry.hub.docker.com/pavelkayler/waves:10.0.1",
  "contractName": "Contract",
  "imageHash": "b5ad13b39b98b049d936c34d15a18a460f9d96015854ec809653e6a2a7ef0b37",
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