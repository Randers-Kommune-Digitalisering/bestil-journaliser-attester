const Node = {
  "id": "34bae3c54808bd77",
  "type": "function",
  "z": "c715449c21b1a61f",
  "g": "ef51f47c59ef9c19",
  "name": "Set rekvisitus navn",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 930,
  "y": 1160,
  "wires": [
    [
      "dd8d88688b4c7687",
      "886d10828d07d93a"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let name =  msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["sd:GetPerson"][0]["sd:Person"][0]["dkcc1:PersonGivenName"][0] + " " +
              msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["sd:GetPerson"][0]["sd:Person"][0]["dkcc1:PersonSurnameName"][0];
  
  //let e_id =  msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["sd:GetPerson"][0]["sd:Person"][0]["sd:Employment"][0]["sd:EmploymentIdentifier"][0];
  
  msg.bestilling.rekvisitusNavn = name ?? "";
  return msg;
}

module.exports = Node;