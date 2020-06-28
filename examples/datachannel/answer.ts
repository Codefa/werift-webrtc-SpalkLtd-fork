import { RTCPeerConnection } from "../../src";
import { Server } from "ws";

const server = new Server({ port: 8888 });
console.log("start");

server.on("connection", (socket) => {
  socket.on("message", async (data) => {
    const offer = JSON.parse(data as string);
    console.log(offer);

    const pc = new RTCPeerConnection({
      stunServer: ["stun.l.google.com", 19302],
    });
    pc.iceConnectionStateChange.subscribe((v) =>
      console.log("pc.iceConnectionStateChange", v)
    );
    pc.datachannel.subscribe((channel) => {
      let index = 0;
      setInterval(() => {
        if (index < 4) channel.send(Buffer.from("ping" + index++));
        if (index === 4) {
          channel.close();
          index++;
        }
      }, 1000);

      channel.message.subscribe((data) => {
        console.log("answer message", data.toString());
      });
      channel.stateChanged.subscribe((v) =>
        console.log("channel.stateChanged", v)
      );
    });

    await pc.setRemoteDescription(offer);
    const answer = pc.createAnswer()!;
    await pc.setLocalDescription(answer);
    socket.send(JSON.stringify(answer));
  });
});
