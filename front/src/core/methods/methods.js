class methods {
  contractId = "WecYu2e711xsStQHHiC7FWNSsjnZ27AJMQGvP33HZiK";
  port;
  sender;
  password;
  // sender = "3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA";
  // password = "iLZEoY8elvORbPXrwhSaLQ";

  authorize = async (sender, password, port) => {
    this.sender = sender;
    this.password = password;
    this.port = port;
  };

  load = async () => {
    let result;
    try {
      await fetch(`http://localhost:6882/contracts/${this.contractId}`).then((res) => (result = res.json()));
    } catch (e) {
      console.log("сначала авторизируйтесь \n" + e);
    }
    return result;
  };

  post = async (params) => {
    await fetch(`http://localhost:${this.port}/transactions/signAndBroadcast`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contractId: this.contractId,
        fee: 10,
        sender: this.sender,
        password: this.password,
        type: 104,
        params: params,
        version: 2,
        contractVersion: 1,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  registration = async (name, homeAddress) => {
    await this.post([
      { key: "action", type: "string", value: "registration" },
      { key: "name", type: "string", value: name },
      { key: "homeAddress", type: "string", value: homeAddress },
    ]);
  };

  changePersonalData = async (name, homeAddress) => {
    await this.post([
      { key: "action", type: "string", value: "changePersonalData" },
      { key: "name", type: "string", value: name },
      { key: "homeAddress", type: "string", value: homeAddress },
    ]);
  };

  addOrRemovePostalWorker = async (wallet, add, jobPlace, identifier) => {
    await this.post([
      { key: "action", type: "string", value: "addOrRemovePostalWorker" },
      { key: "wallet", type: "string", value: wallet },
      { key: "add", type: "boolean", value: add },
      { key: "jobPlace", type: "string", value: jobPlace },
      { key: "identifier", type: "string", value: identifier },
    ]);
  };

  sendPostal = async (officeIndex, sender, receiver, weight, declaredValue, postalType, postalClass, startAddress, endAddress) => {
    await this.post([
      { key: "action", type: "string", value: "SendPostal" },
      { key: "officeIndex", type: "integer", value: Number(officeIndex) },
      { key: "sender", type: "string", value: sender },
      { key: "receiver", type: "string", value: receiver },
      { key: "weight", type: "integer", value: Number(weight) },
      { key: "declaredValue", type: "integer", value: Number(declaredValue) },
      { key: "postalType", type: "integer", value: Number(postalType) },
      { key: "postalClass", type: "integer", value: Number(postalClass) },
      { key: "startAddress", type: "string", value: startAddress },
      { key: "endAddress", type: "string", value: endAddress },
    ]).then((res) => {
      console.log(res);
    });
  };

  changeIdentifier = async (wallet, identifier) => {
    await this.post([
      { key: "action", type: "string", value: "changeIdentifier" },
      { key: "wallet", type: "string", value: wallet },
      { key: "identifier", type: "string", value: identifier },
    ]).then((res) => {
      console.log(res);
    });
  };

  receivePostal = async (trackingNumber) => {
    await this.post([
      { key: "action", type: "string", value: "ReceivePostal" },
      { key: "trackingNumber", type: "string", value: trackingNumber },
    ]).then((res) => {
      console.log(res);
    });
  };

  declinePostal = async (trackingNumber) => {
    await this.post([
      { key: "action", type: "string", value: "DeclinePostal" },
      { key: "trackingNumber", type: "string", value: trackingNumber },
    ]).then((res) => {
      console.log(res);
    });
  };

  createMoneyTransfer = async (sender, receiver, value, timeLeft) => {
    await this.post([
      { key: "action", type: "string", value: "createMoneyTransfer" },
      { key: "_sender", type: "string", value: sender },
      { key: "receiver", type: "string", value: receiver },
      { key: "value", type: "integer", value: Number(value) },
      { key: "timeLeft", type: "integer", value: Number(timeLeft) },
    ]);
  };

  acceptTransfer = async (id) => {
    await this.post([
      { key: "action", type: "string", value: "acceptTransfer" },
      { key: "id", type: "string", value: id },
    ]);
  };

  cancelTransfer = async (id) => {
    await this.post([
      { key: "action", type: "string", value: "cancelTransfer" },
      { key: "id", type: "string", value: id },
    ]);
  };
}

export default new methods();
