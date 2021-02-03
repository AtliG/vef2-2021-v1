import { readFile } from 'fs/promises';
import express from 'express';
import { getRelatedVideos } from './utils.js'; // eslint-disable-line

const router = express.Router();

async function allVideos(req, res) {
  let data = '';

  try {
    data = await readFile('./videos.json');
    data = JSON.parse(data);
  } catch (e) {
    console.error('error', e);
    res.render('error', { error: e });
  }

  res.render('index', { data });
}

async function extractVideo(id) {
  const obj = { video: '', related: '' };

  try {
    let data = await readFile('./videos.json');
    data = JSON.parse(data);
    const { videos } = data;

    const video = videos.find((el) => el.id === id);
    const related = getRelatedVideos(videos, video.related);

    obj.video = video;
    obj.related = related;
  } catch (e) {
    console.error('error', e);
  }

  return obj;
}

async function videoById(req, res) {
  try {
    const data = await extractVideo(req.params.id);
    res.render('video', { video: data.video, related: data.related });
  } catch (e) {
    console.error('error', e);
    res.render('error', { error: e });
  }
}

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

router.get('/', catchErrors(allVideos));

router.get('/:id?', videoById);

export default router;
