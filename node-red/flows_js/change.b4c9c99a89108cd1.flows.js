const Node = {
  "id": "b4c9c99a89108cd1",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "set msg.payload",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "bestilling.attestType @ $attestType . (\t\t    /* Get var into scope */\t    $attestType := $attestType;\t\t    /* Set attest type and sub type */\t    $$.bestilling ~> | $ | {\t        \"attestType\": $attestType,\t        \"attestSubType\": $attestType = 1 ? -1 : /* Set -1 for attestType 1 */\t                         attestSubType[attestType = $attestType].subType,\t        \"erAfvist\": $$.erAfvist\t    } | \t\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $type() = \"array\" ? payload : [payload]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 1700,
  "wires": [
    [
      "6b31538eabfc45bc"
    ]
  ]
}

module.exports = Node;