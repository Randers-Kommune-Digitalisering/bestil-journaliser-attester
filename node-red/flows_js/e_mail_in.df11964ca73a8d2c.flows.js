const Node = {
  "id": "df11964ca73a8d2c",
  "type": "e-mail in",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "",
  "protocol": "IMAP",
  "server": "outlook.randers.dk",
  "useSSL": false,
  "autotls": "required",
  "port": "143",
  "authtype": "BASIC",
  "saslformat": true,
  "token": "oauth2Response.access_token",
  "box": "INBOX",
  "disposition": "Read",
  "criteria": "UNSEEN",
  "repeat": "300",
  "fetch": "trigger",
  "inputs": 1,
  "x": 310,
  "y": 160,
  "wires": [
    [
      "b8926a0fe507d19a",
      "d4a9d98f17c1a2c9"
    ]
  ]
}

module.exports = Node;