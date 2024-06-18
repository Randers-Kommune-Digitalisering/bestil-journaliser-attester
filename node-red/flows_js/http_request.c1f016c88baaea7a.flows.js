const Node = {
  "id": "c1f016c88baaea7a",
  "type": "http request",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
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
  "x": 810,
  "y": 160,
  "wires": [
    [
      "18f35343decfdf73"
    ]
  ]
}

module.exports = Node;