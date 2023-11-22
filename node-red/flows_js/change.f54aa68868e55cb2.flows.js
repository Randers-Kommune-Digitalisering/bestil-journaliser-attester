const Node = {
  "id": "f54aa68868e55cb2",
  "type": "change",
  "z": "971a7ae6df987a48",
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
  "x": 500,
  "y": 1600,
  "wires": [
    [
      "0d32f9a5406e3c44"
    ]
  ],
  "_order": 55
}

module.exports = Node;