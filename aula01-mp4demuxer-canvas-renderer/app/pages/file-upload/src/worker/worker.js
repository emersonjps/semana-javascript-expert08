import VideoProcessor from "./videoProcessor.js";
import MP4Demuxer from "./mp4Demuxer.js";

const qvgaConstraints = {
  width: 320,
  height: 240,
};
const vgaConstraints = {
  width: 640,
  height: 480,
};
const hdConstraints = {
  width: 1280,
  height: 720,
};

const encoderConfig = {
  ...qvgaConstraints,
  bitrate: 10e6,
  // WebM
  codec: "vp09.00.10.08",
  pt: 4,
  hardwareAcceleration: "prefer-software",

  // MP4
  // codec: 'avc1.42002A',
  // pt: 1,
  // hardwareAcceleration: 'prefer-hardware',
  // avc: { format: 'annexb'}
};

const mp4Demuxer = new MP4Demuxer();
const videoProcessor = new VideoProcessor({
  mp4Demuxer,
});

onmessage = async ({ data }) => {
  debugger;
  await videoProcessor.start({
    file: data.file,
    encoderConfig,
    sendMessege(messege) {
      self.postMessage(messege);
    },
  });

  self.postMessage({
    status: "done",
  });
};
