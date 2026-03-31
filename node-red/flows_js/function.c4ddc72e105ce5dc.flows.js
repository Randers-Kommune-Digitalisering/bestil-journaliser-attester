const Node = {
  "id": "c4ddc72e105ce5dc",
  "type": "function",
  "z": "bb3c27172f633c4a",
  "name": "Token",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 570,
  "y": 80,
  "wires": [
    [
      "82153341d1c80bf4"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          const encodeBase64 = (data) => {
              return Buffer.from(data).toString('base64');
          }
          msg.auth = encodeBase64(msg.sdUser + ":" + msg.sdPass);
          return msg;
        
      
    
  
}

module.exports = Node;