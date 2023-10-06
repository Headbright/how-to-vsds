# Introduction

::: info
This is a practical guide on how to publish data as Linked Data Event Stream (LDES).
:::

## What is LDES?

A [Linked Data Event Stream](https://semiceu.github.io/LinkedDataEventStreams/) is a collection of immutable versioned objects. Every occurrence of an object represents the momentary state of an object. An object may appear several times in a stream. Whenever an object is updated, the change must be appended to the stream.

Objects in the LDES stream are described in [N-Triple](https://www.w3.org/TR/n-triples/) [RDF](https://www.w3.org/RDF/) form. This means that the LDES stream contains not only the raw data, but also associated semantic and ontology information, linking back to the origin of the data.

## Example

::: info
LDES uses the N-Triples notation for RDF data. This is a compact and readable alternative to RDF XML.
:::

Let's consider the following JSON object describing the state of an IoT device:

```json
{
  "id": "urn:ngsi-v2:cot-imec-be:Device:imec-iow-DR7drcZ49ZBTJHayVVJpR1",
  "observedAt": "2023-05-12T11:52:37.412Z",
  "healthState": "up"
}
```

Once transformed to an immutable, versioned linked data object in RDF form, it will appear as the following LDES member:

```turtle
@prefix default-context: <https://uri.etsi.org/ngsi-ld/default-context/> .
@prefix ldes:            <https://w3id.org/ldes#> .
@prefix ngsi-ld:         <https://uri.etsi.org/ngsi-ld/> .
@prefix prov:            <http://www.w3.org/ns/prov#> .
@prefix rdf:             <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix terms:           <http://purl.org/dc/terms/> .
@prefix tree:            <https://w3id.org/tree#> .


<urn:ngsi-v2:cot-imec-be:Device:imec-iow-DR7drcZ49ZBTJHayVVJpR1/2023-05-12T11:52:37.412Z>
        rdf:type                        default-context:Device ;
        terms:isVersionOf               <urn:ngsi-v2:cot-imec-be:Device:imec-iow-DR7drcZ49ZBTJHayVVJpR1> ;
        prov:generatedAtTime            "2023-05-12T11:52:37.412Z"^^<http://www.w3.org/2001/XMLSchema#dateTime> ;

        default-context:healthState     [ rdf:type          ngsi-ld:Property ;
                                          ngsi-ld:hasValue  "up"
                                        ] ;
```

Within the constraints of LDES, a stream is always immutable. So if the example device object changes state (for example, the `healthState` property changes to `down`), the updated must be **appended** to the stream:

```turtle
@prefix default-context: <https://uri.etsi.org/ngsi-ld/default-context/> .
@prefix ldes:            <https://w3id.org/ldes#> .
@prefix ngsi-ld:         <https://uri.etsi.org/ngsi-ld/> .
@prefix prov:            <http://www.w3.org/ns/prov#> .
@prefix rdf:             <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix terms:           <http://purl.org/dc/terms/> .
@prefix tree:            <https://w3id.org/tree#> .


<urn:ngsi-v2:cot-imec-be:Device:imec-iow-DR7drcZ49ZBTJHayVVJpR1/2023-05-12T11:52:37.412Z>
        rdf:type                        default-context:Device ;
        terms:isVersionOf               <urn:ngsi-v2:cot-imec-be:Device:imec-iow-DR7drcZ49ZBTJHayVVJpR1> ;
        prov:generatedAtTime            "2023-05-12T11:52:37.412Z"^^<http://www.w3.org/2001/XMLSchema#dateTime> ;

        default-context:healthState     [ rdf:type          ngsi-ld:Property ;
                                          ngsi-ld:hasValue  "up"
                                        ] ;

<urn:ngsi-v2:cot-imec-be:Device:imec-iow-DR7drcZ49ZBTJHayVVJpR1/2023-05-12T12:30:37.412Z>
        rdf:type                        default-context:Device ;
        terms:isVersionOf               <urn:ngsi-v2:cot-imec-be:Device:imec-iow-DR7drcZ49ZBTJHayVVJpR1> ;
        prov:generatedAtTime            "2023-05-12T12:30:37.412Z"^^<http://www.w3.org/2001/XMLSchema#dateTime> ;

        default-context:healthState     [ rdf:type          ngsi-ld:Property ;
                                          ngsi-ld:hasValue  "down"
                                        ] ;
```
