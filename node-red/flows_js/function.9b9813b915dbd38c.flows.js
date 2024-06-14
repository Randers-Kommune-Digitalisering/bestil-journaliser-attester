const Node = {
  "id": "9b9813b915dbd38c",
  "type": "function",
  "z": "d35ec07551c9897c",
  "name": "Set msg.rekvisitus",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 970,
  "y": 140,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let name =  msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["sd:GetPerson"][0]["sd:Person"][0]["dkcc1:PersonGivenName"][0] + " " +
              msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["sd:GetPerson"][0]["sd:Person"][0]["dkcc1:PersonSurnameName"][0];
  
  let e_id =  msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["sd:GetPerson"][0]["sd:Person"][0]["sd:Employment"][0]["sd:EmploymentIdentifier"][0];
  
  msg.rekvisitus = {
      "cpr": msg.rekvisitus ?? "Fejl! Ingen CPR",
      "navn": name ?? "Ingen navn",
      "tjenestenr": e_id ?? "Ingen tjenestenr"
  }
  
  delete msg.payload;
  
  return msg;
}

module.exports = Node;