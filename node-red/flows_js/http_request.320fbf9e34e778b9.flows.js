const Node = {
  "id": "320fbf9e34e778b9",
  "type": "http request",
  "z": "971a7ae6df987a48",
  "name": "",
  "method": "POST",
  "ret": "obj",
  "paytoqs": "ignore",
  "url": "https://sbsip-web-test01.randers.dk:8543/auth/realms/sbsip/protocol/openid-connect/token",
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
  "x": 710,
  "y": 720,
  "wires": [
    [
      "53b8a3ba06be10e4"
    ]
  ],
  "_order": 32
}

module.exports = Node;