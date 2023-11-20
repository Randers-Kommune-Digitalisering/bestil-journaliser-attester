const Node = {
  "id": "7ee3ca33239a3c60",
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
  "x": 930,
  "y": 720,
  "wires": [
    [
      "72ebddae5d339f3a"
    ]
  ],
  "_order": 25
}

module.exports = Node;