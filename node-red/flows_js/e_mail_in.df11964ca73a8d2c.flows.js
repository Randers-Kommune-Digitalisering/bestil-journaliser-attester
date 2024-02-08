const Node = {
  "id": "df11964ca73a8d2c",
  "type": "e-mail in",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "",
  "protocol": "IMAP",
  "server": "outlook.office365.com",
  "useSSL": true,
  "autotls": "required",
  "port": "993",
  "authtype": "BASIC",
  "saslformat": true,
  "token": "oauth2Response.access_token",
  "box": "INBOX",
  "disposition": "Read",
  "criteria": "UNSEEN",
  "repeat": "300",
  "fetch": "auto",
  "inputs": 0,
  "x": 150,
  "y": 140,
  "wires": [
    [
      "b8926a0fe507d19a",
      "d4a9d98f17c1a2c9",
      "df3d3b02ded5a122"
    ]
  ]
}

module.exports = Node;