window.pc = null;
window.dc = null;
const store = require("../../redux/store");
const socketIO = require("../services/socketio");

// config
const configPeerSTUN = {
  iceServers: [
    { urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"] },
  ],
};
const configPeerTURN = {
  iceServers: [
    {
      urls: "turn:14.162.161.195:3478",
      username: "testuser",
      credential: "superpwd",
    },
  ],
};

const config = {
  maxBuffer: 262144,
  lowBuffer: 16384,
  chunkSize: 16384,
};

function createPeerConnection() {
  pc = new RTCPeerConnection(configPeerSTUN);
  pc.onicecandidate = (e) => {
    socketIO.sendRTCData({ cand: e.candidate });
  };
  pc.onnegotiationneeded = async () => {
    try {
      await pc.setLocalDescription();
      socketIO.sendRTCData({ sdp: pc.localDescription });
    } catch (error) {
      console.log(error);
    }
  };
  pc.onicegatheringstatechange = (e) => {
    if (e.target.iceGatheringState == "gathering") {
      store.dispatch({ type: "UPDATE_WEBRTC_STATUS", data: "new" });
      return;
    }
    if (e.target.iceGatheringState == "complete") {
      store.dispatch({ type: "UPDATE_WEBRTC_STATUS", data: "checking" });
      return;
    }
  };
  pc.onconnectionstatechange = (e) => {
    if (e.target.connectionState == "connected") {
      store.dispatch({ type: "UPDATE_WEBRTC_STATUS", data: "connected" });
    }
    if (e.target.connectionState == "fail") {
      store.dispatch({ type: "UPDATE_WEBRTC_STATUS", data: "fail" });
    }
  };
  window.buffer = [];
  window.recvLength = 0;
  pc.ondatachannel = (e) => {
    fileTemp = { info: "", data: new ArrayBuffer() };
    createDataChannel(e.channel);
    dc.onmessage = (e) => {
      // console.log("received");
      // window.buffer.push(e.data);
      if (typeof e.data == "string") {
        fileTemp.info = JSON.parse(e.data);
        // console.log(fileTemp);
        // asyncHandle();
        return;
      }
      recvLength += e.data.byteLength;
      if (recvLength % (maxBuffer * 10) == 0) {
        console.log("clear");
        URL.revokeObjectURL(URL.createObjectURL(new Blob([1])));
      }
      // console.log(e.data);
      // dc.send("received " + arrayTemp.length);
      buffer.push(...new Uint8Array(e.data));
      if (recvLength >= fileTemp.info.size) {
        // console.log(buffer);
        compose();
      }
      // temp = data;
      // insertText(e.data);
    };
  };
}

function createDataChannel(dataChannel) {
  if (!pc) {
    console.log("Peer Connection is null");
    return;
  }
  if (!dataChannel) {
    dataChannel = pc.createDataChannel("tranfer-file");
  }
  dataChannel.binaryType = "arraybuffer";
  dataChannel.bufferedAmountLowThreshold = config.chunkSize;
  dataChannel.onopen = () => {
    store.dispatch({ type: "UPDATE_WEBRTC_STATUS", data: "completed" });
    console.log("Connected data channel");
  };
  dataChannel.onerror = (e) => {
    console.log(e);
  };

  dataChannel.onclose = (e) => {
    store.dispatch({ type: "UPDATE_WEBRTC_STATUS", data: "idle" });
    console.log("Data channel closed");
  };
  dataChannel.onbufferedamountlow = (e) => {
    sendFile(inputFile.files[0]);
  };
  dc = dataChannel;
}

module.exports.startChannel = () => {
  createPeerConnection();
  createDataChannel();
};
module.exports.closeChannel = () => {
  if (!dc && !pc) {
    return;
  }
  if (dc) {
    dc.close();
    dc = null;
  }
  if (pc) {
    pc.close();
    pc = null;
  }
  URL.revokeObjectURL(URL.createObjectURL(new Blob([1])));
};

module.exports.handleChannel = async ({ sdp, cand }) => {
  if (sdp) {
    if (pc == null) {
      createPeerConnection();
    }
    await pc.setRemoteDescription(sdp);
    if (sdp.type == "offer") {
      await pc.setLocalDescription();
      socketIO.sendRTCData({ sdp: pc.localDescription });
    }
  } else if (cand) {
    const iceCand = new RTCIceCandidate(cand);
    pc.addIceCandidate(iceCand);
  }
};
