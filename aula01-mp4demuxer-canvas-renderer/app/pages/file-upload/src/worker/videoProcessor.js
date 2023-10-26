export default class VideoProcessor {
  #mp4Demuxer;
  /**
   *
   * @param {object} options
   * @param {import('./MP4Demuxer.js').default } options.mp4Box
   */
  constructor({ mp4Demuxer }) {
    this.#mp4Demuxer = mp4Demuxer;
  }

  async mp4Decoder(encoderConfig, stream) {
    this.#mp4Demuxer.run(stream, {
      onConfig(config) {
        debugger;
      },
      onChunck(chunck) {
        debugger;
      },
    });
  }

  async start({ file, encoderConfig, sendMessege }) {
    const stream = file.stream();
    const fileName = file.name.split("/").pop().replace(".mp4", "");
    debugger;
    await this.mp4Decoder(encoderConfig, stream);
  }
}
