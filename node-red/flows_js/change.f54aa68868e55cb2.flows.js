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
      "to": "{\t    \"SagID\": sagsId,\t    \"DokumentNavn\": (erAfvist = true ? 'Afvist rekvisition - ' : '')\t                    & (attestTypeString ~> $exists() ?\t                        (attestTypeString ~> $substring(0, 1) ~> $uppercase()) & (attestTypeString ~> $substring(1)) & \" \"\t                        :\t                        \"Attest \")\t                    & ($millis() ~> $fromMillis(\"[D01]-[M01]-[Y0001]\")),\t    \"Beskrivelse\": \"Automatisk journaliseret af robot\",\t    \"OmfattetAfAktindsigt\": true\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "filename",
      "pt": "msg",
      "to": "attachments ~> $type() = \"array\" ?\tattachments[0].filename : attachments.filename",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 2420,
  "wires": [
    [
      "be7de7d7233ed5ff"
    ]
  ]
}

module.exports = Node;