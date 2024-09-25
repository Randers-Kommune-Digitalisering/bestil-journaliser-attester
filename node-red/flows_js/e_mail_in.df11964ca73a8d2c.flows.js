const Node = {
  "id": "df11964ca73a8d2c",
  "type": "e-mail in",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "",
  "protocol": "IMAP",
  "server": "${MAIL_IMAP_URL}",
  "useSSL": false,
  "autotls": "required",
  "port": "143",
  "authtype": "BASIC",
  "saslformat": true,
  "token": "oauth2Response.access_token",
  "box": "INBOX",
  "disposition": "None",
  "criteria": "UNSEEN",
  "repeat": "300",
  "fetch": "trigger",
  "inputs": 1,
  "x": 130,
  "y": 300,
  "wires": [
    [
      "b8926a0fe507d19a",
      "9893c0468d1b5d27"
    ]
  ]
}

module.exports = Node;