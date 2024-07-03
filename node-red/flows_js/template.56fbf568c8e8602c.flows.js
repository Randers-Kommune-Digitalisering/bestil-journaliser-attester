const Node = {
  "id": "56fbf568c8e8602c",
  "type": "template",
  "z": "c715449c21b1a61f",
  "g": "cd103be25bfed5cd",
  "name": "Request body",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 280,
  "y": 1160,
  "wires": [
    [
      "77d333b9c9d34487",
      "9321a3b9e907031a"
    ]
  ]
}

Node.template = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:oio:sd:adgang:1.0.0">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:UserRetrieval>
         <urn:InstitutionIdentifier>RG</urn:InstitutionIdentifier>
         <urn:PersonCivilRegistrationIdentifier>{{cpr}}</urn:PersonCivilRegistrationIdentifier>
         <urn:EffectiveDate>{{today}}</urn:EffectiveDate>
         <urn:StatusActiveIndicator>true</urn:StatusActiveIndicator>
      </urn:UserRetrieval>
   </soapenv:Body>
</soapenv:Envelope>
`

module.exports = Node;