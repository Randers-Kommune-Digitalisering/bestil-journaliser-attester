const Node = {
  "id": "34bae3c54808bd77",
  "type": "function",
  "z": "c715449c21b1a61f",
  "g": "cd103be25bfed5cd",
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
      "886d10828d07d93a",
      "b474f11560c328eb"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  try
  {
      if ( msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["soapenv:Fault"] == null )
      {
  
          let name = msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["sd:GetPerson"][0]["sd:Person"][0]["dkcc1:PersonGivenName"][0] + " " +
              msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["sd:GetPerson"][0]["sd:Person"][0]["dkcc1:PersonSurnameName"][0];
  
          //let e_id =  msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["sd:GetPerson"][0]["sd:Person"][0]["sd:Employment"][0]["sd:EmploymentIdentifier"][0];
          msg.bestilling.rekvisitusNavn = name ?? "";
      }
      else
      {
          msg.bestilling.rekvisitusNavn = "";
          msg.error = msg.payload["soapenv:Envelope"]["soapenv:Body"][0]["soapenv:Fault"][0].detail;
      }
  }
  catch(error)
  {
      msg.error = error;
  }
  
  return msg;
}

module.exports = Node;