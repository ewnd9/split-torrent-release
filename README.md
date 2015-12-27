# split-torrent-release

## Install

```
$ npm install split-torrent-release --save
```

## Usage

```js
import split from 'split-torrent-release';
console.log(split('Brooklyn.Nine-Nine.S03E10.HDTV.x264-KILLERS[ettv].mp4'));
```

## Tests

```js
test('generic series', t => {
  t.same(parse('Brooklyn.Nine-Nine.S03E10.HDTV.x264-KILLERS[ettv].mp4'), {
    title: 'Brooklyn Nine-Nine',
    s: 3,
    ep: 10
  });

  t.same(parse('Arrow.S04E09.720p.HDTV.X264-DIMENSION.mkv'), {
    title: 'Arrow',
    s: 4,
    ep: 9
  });
});

test('generic movie', t => {
  t.same(parse('M.N.Plemya.Izgoyev.2015.DUAL.BDRip.720p.-HELLYWOOD.mkv'), {
    title: 'M N Plemya Izgoyev',
    year: 2015
  });

  t.same(parse('The.Martian.2015.FRENCH.DVDRip.XViD.AC3-FUNKKY.avi'), {
    title: 'The Martian',
    year: 2015
  });

  t.same(parse('The Intern 2015 1080p WEB-DL x264 AC3-JYK.mkv'), {
    title: 'The Intern',
    year: 2015
  });
});
```

## License

MIT © [ewnd9](http://ewnd9.com)
