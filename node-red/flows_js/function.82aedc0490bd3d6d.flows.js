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
  "x": 230,
  "y": 60,
  "wires": [
    [
      "40a982f694bdc29c"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const newMsg = {
  
      "text": Buffer.from(msg.text.toString()),
      "to": msg.to,
      "topic": msg.topic,
      "attachments": msg.attachments
  }
  
  msg = newMsg;
  return msg;
}

module.exports = Node;