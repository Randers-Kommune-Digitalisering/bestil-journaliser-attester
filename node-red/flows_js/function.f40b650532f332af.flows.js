const Node = {
  "id": "f40b650532f332af",
  "type": "function",
  "z": "971a7ae6df987a48",
  "name": "function 1",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 360,
  "y": 320,
  "wires": [
    [
      "fed891ea3703430c"
    ]
  ],
  "_order": 37
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = msg.payload;
  return msg;
}

module.exports = Node;