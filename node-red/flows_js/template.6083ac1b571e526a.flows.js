const Node = {
  "id": "6083ac1b571e526a",
  "type": "template",
  "z": "d35ec07551c9897c",
  "name": "Request body",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 400,
  "y": 140,
  "wires": [
    [
      "8dfa9c89f42a83cf"
    ]
  ]
}

Node.template = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:oio:sd:adgang:1.0.0">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:UserRetrieval>
         <urn:InstitutionIdentifier>RG</urn:InstitutionIdentifier>
         <urn:PersonCivilRegistrationIdentifier>{{rekvisitus}}</urn:PersonCivilRegistrationIdentifier>
         <urn:EffectiveDate>{{today}}</urn:EffectiveDate>
         <urn:StatusActiveIndicator>true</urn:StatusActiveIndicator>
      </urn:UserRetrieval>
   </soapenv:Body>
</soapenv:Envelope>
`

module.exports = Node;