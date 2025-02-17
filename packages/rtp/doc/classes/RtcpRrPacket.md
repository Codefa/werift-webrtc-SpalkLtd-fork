[werift-rtp](../README.md) / [Exports](../modules.md) / RtcpRrPacket

# Class: RtcpRrPacket

## Table of contents

### Constructors

- [constructor](RtcpRrPacket.md#constructor)

### Properties

- [reports](RtcpRrPacket.md#reports)
- [ssrc](RtcpRrPacket.md#ssrc)
- [type](RtcpRrPacket.md#type)
- [type](RtcpRrPacket.md#type-1)

### Methods

- [serialize](RtcpRrPacket.md#serialize)
- [deSerialize](RtcpRrPacket.md#deserialize)

## Constructors

### constructor

• **new RtcpRrPacket**(`props?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Partial`<[`RtcpRrPacket`](RtcpRrPacket.md)\> |

## Properties

### reports

• **reports**: [`RtcpReceiverInfo`](RtcpReceiverInfo.md)[] = `[]`

___

### ssrc

• **ssrc**: `number` = `0`

___

### type

• `Readonly` **type**: ``201``

___

### type

▪ `Static` `Readonly` **type**: ``201``

## Methods

### serialize

▸ **serialize**(): `Buffer`

#### Returns

`Buffer`

___

### deSerialize

▸ `Static` **deSerialize**(`data`, `count`): [`RtcpRrPacket`](RtcpRrPacket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |
| `count` | `number` |

#### Returns

[`RtcpRrPacket`](RtcpRrPacket.md)
