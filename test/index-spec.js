import test from 'ava';
import 'babel-core/register';
import split from './../src/index';

test('generic series', t => {
  t.same(split('Brooklyn.Nine-Nine.S03E10.HDTV.x264-KILLERS[ettv].mp4'), {
    type: 'show',
    title: 'Brooklyn Nine-Nine',
    s: 3,
    ep: 10
  });

  t.same(split('Arrow.S04E09.720p.HDTV.X264-DIMENSION.mkv'), {
    type: 'show',
    title: 'Arrow',
    s: 4,
    ep: 9
  });
});

test('generic season', t => {
  t.same(split('Master of None S01 Season 1 Complete 1080p WEB-DL [rartv]'), {
    type: 'season',
    title: 'Master of None',
    s: 1
  });
});

test('generic movie', t => {
  t.same(split('M.N.Plemya.Izgoyev.2015.DUAL.BDRip.720p.-HELLYWOOD.mkv'), {
    type: 'movie',
    title: 'M N Plemya Izgoyev',
    year: 2015
  });

  t.same(split('The.Martian.2015.FRENCH.DVDRip.XViD.AC3-FUNKKY.avi'), {
    type: 'movie',
    title: 'The Martian',
    year: 2015
  });

  t.same(split('The Intern 2015 1080p WEB-DL x264 AC3-JYK.mkv'), {
    type: 'movie',
    title: 'The Intern',
    year: 2015
  });
});
