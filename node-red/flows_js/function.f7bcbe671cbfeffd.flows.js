const Node = {
  "id": "f7bcbe671cbfeffd",
  "type": "function",
  "z": "90c6b0b502e346fa",
  "name": "HTTP Request",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "request",
      "module": "request"
    }
  ],
  "x": 1040,
  "y": 2200,
  "wires": [
    [
      "6b4ee32d8471f348",
      "e62246bc7846a299"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, request) {
  const fileData = msg.payload;
  const formBody = JSON.stringify(msg.json);
  
  var formData = {};
  
  formData.file = {
      value: fileData,
      options: {
          filename: msg.filename,
          contentType: 'application/pdf'
      }
  };
  
  formData.json = formBody;
  
  const options = {
      method: 'POST',
      url: msg.url,
      headers: msg.headers,
      formData: formData
  };
  
  await request(options, function (error, response, body)
  {
      if (error)
          throw new Error(error);
  
      msg.statusCode = response.statusCode;
  
      try
      {
          msg.payload = JSON.parse(body);
      }
      catch
      {
          msg.payload = body;
      }
      
      node.send(msg);
  });
  
  //return msg;
}

module.exports = Node;