const Node = {
  "id": "f7bcbe671cbfeffd",
  "type": "function",
  "z": "971a7ae6df987a48",
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
  "x": 900,
  "y": 1120,
  "wires": [
    [
      "6b4ee32d8471f348"
    ]
  ],
  "_order": 40
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
  
      msg.payload = JSON.parse(body);
      node.send(msg);
  });
  
  //return msg;
}

module.exports = Node;