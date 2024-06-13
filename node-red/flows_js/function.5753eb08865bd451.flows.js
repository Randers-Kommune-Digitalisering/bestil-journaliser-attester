const Node = {
  "id": "5753eb08865bd451",
  "type": "function",
  "z": "d35ec07551c9897c",
  "name": "Token",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "btoa",
      "module": "btoa"
    }
  ],
  "x": 570,
  "y": 80,
  "wires": [
    [
      "40abe7e82f91c4bd"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, btoa) {
  msg.auth = btoa(msg.sdUser + ":" + msg.sdPass);
  return msg;
}

module.exports = Node;