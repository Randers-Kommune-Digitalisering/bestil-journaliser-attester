const Node = {
  "id": "b4c9c99a89108cd1",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "bestilling.attestType @ $attestType . (\t\t    /* Get var into scope */\t    $attestType := $attestType;\t\t    /* Set attest type and sub type */\t    $$.bestilling ~> | $ | {\t        \"attestType\": $attestType,\t        \"attestSubType\": attestSubType[attestType = $attestType].subType\t    },\t    \t    /* Delete sub type for attest type 1 (has no subtypes) */\t    [\t        attestType = 1 ? \"attestSubType\"\t    ] | \t\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 1000,
  "wires": [
    [
      "6b31538eabfc45bc"
    ]
  ]
}

module.exports = Node;