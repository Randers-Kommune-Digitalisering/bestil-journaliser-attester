const Node = {
  "id": "df11964ca73a8d2c",
  "type": "e-mail in",
  "z": "971a7ae6df987a48",
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
  "x": 190,
  "y": 260,
  "wires": [
    [
      "b8926a0fe507d19a"
    ]
  ],
  "_order": 2
}

module.exports = Node;