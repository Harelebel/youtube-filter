

function init() {

    console.log('inits...')
    function skip() {
        var v = document.getElementsByTagName('video')[0]
        var skipShots = [
            { start: 1, end: 4 },
            { start: 6, end: 10.2 },
            { start: 11, end: 14 },
            { start: 19, end: 21 },
            { start: 21, end: 24 },
            { start: 27, end: 34 },
            { start: 41, end: 46 },
            { start: 51, end: 54 }
        ];
        function timeUpdateHandler(event) {
            if (skipShots.length == 0) { v.removeEventListener('timeupdate', timeUpdateHandler); return }
            let shotToSkip = skipShots.filter(shot => shot.start - v.currentTime < 1);
            v.currentTime = v.currentTime + shotToSkip[0].end - shotToSkip[0].start
            skipShots.splice(skipShots.indexOf(shotToSkip), 1)
            console.log(skipShots)
        }
        v.addEventListener('timeupdate', timeUpdateHandler)
    }

    document.addEventListener('DOMContentLoaded', function () {
        skip();
    });

    //# sourceURL=netflixScript.js

}
function inject(fn) {
    const script = document.createElement('script')
    script.text = `(${fn.toString()})();`
    document.documentElement.appendChild(script)
}

inject(init)
