const Node = {
  "id": "be7de7d7233ed5ff",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "d774a29ec2b63a5e",
  "name": "Sæt payload",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "attachments ~> $type() = \"array\" ?\tattachments[0].content : attachments.content",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 2420,
  "wires": [
    [
      "865424cbe3ef7eb0"
    ]
  ]
}

module.exports = Node;