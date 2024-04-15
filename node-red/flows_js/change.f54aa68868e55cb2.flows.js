const Node = {
  "id": "f54aa68868e55cb2",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "d774a29ec2b63a5e",
  "name": "Request body: \\n File details",
  "rules": [
    {
      "t": "set",
      "p": "json",
      "pt": "msg",
      "to": "{\t    \"SagID\": sagsId,\t    \"DokumentNavn\": \"Straffeattest \" & ( $millis() ~> $fromMillis(\"[D01]-[M01]-[Y0001]\") ),\t    \"Beskrivelse\": \"Automatisk journaliseret af robot\",\t    \"OmfattetAfAktindsigt\": true\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 2420,
  "wires": [
    [
      "d1cc64f3d1b414df"
    ]
  ]
}

module.exports = Node;