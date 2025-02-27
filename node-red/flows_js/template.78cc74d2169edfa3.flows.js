const Node = {
  "id": "78cc74d2169edfa3",
  "type": "template",
  "z": "bb3c27172f633c4a",
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
      "ca9aef12ac141708"
    ]
  ]
}

Node.template = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:oio:sd:adgang:1.0.0">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:UserRetrieval>
         <urn:InstitutionIdentifier>RG</urn:InstitutionIdentifier>
         <urn:PersonCivilRegistrationIdentifier>{{rekvisition.cpr_sd}}</urn:PersonCivilRegistrationIdentifier>
         <urn:EffectiveDate>{{today}}</urn:EffectiveDate>
         <urn:StatusActiveIndicator>true</urn:StatusActiveIndicator>
      </urn:UserRetrieval>
   </soapenv:Body>
</soapenv:Envelope>
`

module.exports = Node;