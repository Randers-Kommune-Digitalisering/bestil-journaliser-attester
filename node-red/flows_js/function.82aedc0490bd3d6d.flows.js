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
  "x": 310,
  "y": 100,
  "wires": [
    [
      "894558ccd508489d"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const _msg = JSON.parse( JSON.stringify( msg ) );
  
  msg = {};
  
  msg.to = _msg.to;
  msg.topic = _msg.topic;
  
  msg.payload = _msg.payload;
  msg.plaintext = _msg.plaintext;
  msg.description = _msg.description;
  
  msg.filename = _msg.filename;
  
  
  return msg;
}

module.exports = Node;