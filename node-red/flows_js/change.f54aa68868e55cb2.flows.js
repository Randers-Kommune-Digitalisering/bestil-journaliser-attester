const Node = {
  "id": "f54aa68868e55cb2",
  "type": "change",
  "z": "971a7ae6df987a48",
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
  "x": 440,
  "y": 1520,
  "wires": [
    [
      "0d32f9a5406e3c44"
    ]
  ],
  "_order": 142
}

module.exports = Node;