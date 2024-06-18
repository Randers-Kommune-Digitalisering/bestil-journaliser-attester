const Node = {
  "id": "82aedc0490bd3d6d",
  "type": "function",
  "z": "812b69015d6703b6",
  "g": "cf5fc001c060884c",
  "name": "Clean msg",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 190,
  "y": 60,
  "wires": [
    [
      "40a982f694bdc29c"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const newMsg = {
  
      "payload": msg.payload,
      "filename": msg.filename,
      "to": msg.to,
      "topic": msg.topic,
      "plaintext": msg.plaintext,
      "description": msg.description
  
  }
  
  msg = newMsg;
  return msg;
  
  /*
  const _msg = JSON.parse( JSON.stringify( msg ) );
  
  msg = {};
  
  msg.to = _msg.to;
  msg.topic = _msg.topic;
  
  msg.payload = payload;
  msg.plaintext = _msg.plaintext;
  msg.description = _msg.description;
  
  msg.filename = _msg.filename;
  */
}

module.exports = Node;