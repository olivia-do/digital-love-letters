module.exports = function () {
  var video = document.querySelector('#camera-stream')

  navigator.getMedia = ( navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia);

    navigator.getMedia(
      { video: true },
      stream => {
        video.srcObject = stream;
        video.play();
      },
      console.log
  )
}
