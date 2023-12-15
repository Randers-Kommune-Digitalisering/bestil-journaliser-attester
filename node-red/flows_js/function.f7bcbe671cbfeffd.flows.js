const Node = {
  "id": "f7bcbe671cbfeffd",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "2d0458ee6b467f9b",
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
  "x": 960,
  "y": 1520,
  "wires": [
    [
      "6b4ee32d8471f348",
      "e62246bc7846a299"
    ]
  ],
  "_order": 116
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, request) {
  const fileData = msg.payload;
  const formBody = msg.body;
  
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
      url: 'https://sbsysapitest.randers.dk/api/dokument/journaliser',
      headers: msg.headers,
      formData: formData
  };
  
  request(options, function (error, response, body)
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