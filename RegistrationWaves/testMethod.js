await fetch("http://localhost:6882/transactions/signAndBroadcast", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "contractId": "FBdHxV1fTodYcf53ABBe6zgiewfjrMUjbDg2QA5GB6FP",
        "fee": 10,
        "sender": "3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA",
        "password": "iLZEoY8elvORbPXrwhSaLQ",
        "type": 104,
        "params":
            [
      { key: "action", type: "string", value: "SendPostal" },
      { key: "officeIndex", type: "integer", value: 123 },
      { key: "sender", type: "string", value: "3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA" },
      { key: "receiver", type: "string", value: "3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA" },
      { key: "weight", type: "integer", value: 2 },
      { key: "declaredValue", type: "integer", value: 3 },
      { key: "postalType", type: "integer", value: 1 },
      { key: "postalClass", type: "integer", value: 1 },
      { key: "startAddress", type: "string", value: "3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA" },
      { key: "endAddress", type: "string", value: "3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA" },
            ],
        "version": 2,
        "contractVersion": 1
    })
})
