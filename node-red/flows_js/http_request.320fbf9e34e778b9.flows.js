const Node = {
  "id": "320fbf9e34e778b9",
  "type": "http request",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
  "name": "",
  "method": "POST",
  "ret": "obj",
  "paytoqs": "ignore",
  "url": "https://sbsip-web-drift01.randers.dk:8543/auth/realms/sbsip/protocol/openid-connect/token",
  "tls": "",
  "persist": false,
  "proxy": "",
  "insecureHTTPParser": true,
  "authType": "",
  "senderr": false,
  "headers": [
    {
      "keyType": "Content-Type",
      "keyValue": "",
      "valueType": "other",
      "valueValue": "application/x-www-form-urlencoded"
    }
  ],
  "x": 690,
  "y": 1540,
  "wires": [
    [
      "53b8a3ba06be10e4"
    ]
  ]
}

module.exports = Node;