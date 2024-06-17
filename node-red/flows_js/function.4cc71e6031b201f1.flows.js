const Node = {
  "id": "4cc71e6031b201f1",
  "type": "function",
  "z": "43d6b9b519cc6615",
  "name": "Slet header",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 510,
  "y": 240,
  "wires": [
    [
      "b898d590d1255b7a"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = msg.payload.splice(1, msg.payload.length);
  return msg;
}

module.exports = Node;