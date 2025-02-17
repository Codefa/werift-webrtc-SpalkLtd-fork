import { decode, encode, types } from "binary-data";

import { FragmentedHandshake } from "../../../record/message/fragment";
import { Handshake } from "../../../typings/domain";
import { ProtocolVersion } from "../../binary";
import { HandshakeType } from "../../const";

// 4.2.1.  Denial-of-Service Countermeasures

export class ServerHelloVerifyRequest implements Handshake {
  msgType = HandshakeType.hello_verify_request_3;
  messageSeq?: number;
  static readonly spec = {
    serverVersion: ProtocolVersion,
    cookie: types.buffer(types.uint8),
  };

  constructor(
    public serverVersion: { major: number; minor: number },
    public cookie: Buffer
  ) {}

  static createEmpty() {
    return new ServerHelloVerifyRequest(undefined as any, undefined as any);
  }

  static deSerialize(buf: Buffer) {
    return new ServerHelloVerifyRequest(
      //@ts-ignore
      ...Object.values(decode(buf, ServerHelloVerifyRequest.spec))
    );
  }

  serialize() {
    const res = encode(this, ServerHelloVerifyRequest.spec).slice();
    return Buffer.from(res);
  }

  get version() {
    return {
      major: 255 - this.serverVersion.major,
      minor: 255 - this.serverVersion.minor,
    };
  }

  toFragment() {
    const body = this.serialize();
    return new FragmentedHandshake(
      this.msgType,
      body.length,
      this.messageSeq!,
      0,
      body.length,
      body
    );
  }
}
