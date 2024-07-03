const Node = {
  "id": "fa1857186bec16c8",
  "type": "function",
  "z": "c715449c21b1a61f",
  "g": "ef51f47c59ef9c19",
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
  "x": 410,
  "y": 1040,
  "wires": [
    [
      "f239742b69521d74"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, btoa) {
  msg.auth = btoa(msg.sdUser + ":" + msg.sdPass);
  return msg;
}

module.exports = Node;