const Node = {
  "id": "805753a81a6ed3f6",
  "type": "function",
  "z": "43d6b9b519cc6615",
  "name": "Konvertér",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 200,
  "y": 240,
  "wires": [
    [
      "c0235e1327bc6f8f"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = (msg.payload.filedata).toString('latin1');
  return msg;
}

module.exports = Node;