const Node = {
  "id": "010bbe211842d0b2",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "9160d58a4a4565ba",
  "name": "Tekst",
  "field": "text",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 870,
  "y": 1320,
  "wires": [
    [
      "cea7e9ac7626b03d",
      "8deadcdaf293a2f4",
      "d311c5c737814de3"
    ]
  ]
}

Node.template = `
Din bestilling af en eller flere attester på {{navn}} er udløbet, da den har overskredet den maksimale behandlingstid på 19 dage.

Genbestil attesten hvis du stadig har behov for denne.
`

module.exports = Node;