const Node = {
  "id": "f54aa68868e55cb2",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "2d0458ee6b467f9b",
  "name": "Request body: \\n File details",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"SagID\": sagsId,\t    \"DokumentNavn\": \"Straffeattest \" & ( $millis ~> $fromMillis[\"[D01]/[M01]-[Y0001]\"] ),\t    \"Beskrivelse\": \"Automatisk journaliseret af robot\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 1700,
  "wires": [
    [
      "0d32f9a5406e3c44"
    ]
  ]
}

module.exports = Node;