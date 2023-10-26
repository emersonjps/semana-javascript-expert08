import { createFile } from "../deps/mp4box.0.5.2";

export default class MP4Demuxer {
  constructor(params) {}
  #onConfig;
  #onChunck;
  #file;

  /**
   *
   * @param {ReadableStream} stream
   * @param {object} options
   * @param {(config: object) => void} options.onConfig
   *
   * @returns {Promise<void>}
   */
  async run(stream, { onConfig, onChunck }) {
    this.#onConfig = onConfig;
    this.#onChunck = onChunck;

    this.#file = createFile();
    this.#file.onReady = (args) => {
      debuggers;
    };

    this.#file.onError = (error) =>
      console.error("deu ruim mp4Demuxer0", error);
    debugger;
    return this.#init(stream);
  }

  /**
   *
   * @param {ReadableStream} stream
   * @returns  Promise<void>
   */
  #init(stream) {
    const consumeFile = new WritableStream({
      write: (chunck) => {
        debugger;
      },
      close: () => {
        debugger;
      },
    });
    return stream.pipeTo(consumeFile);
  }
}
