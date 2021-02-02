import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import util from 'util';
import express from 'express';

const path = dirname(fileURLToPath(import.meta.url));

export const router = express.Router();


function errorHandler(err, req, res, next) {

}

async function allVideos(req, res) {
  const title = "Fræðslumyndbandaleigan";

  console.log('here');

  var data = '';

  try {
    console.log('tryin');
    data = await readFile('./videos.json', );
    console.log('going well');
    data = JSON.parse(data);
  } catch (e) {
    console.error('error', e);
    res.render('error', { error });
  }

  console.log('lit');
    
  res.render('index', { data });

  console.log('lit');
}

async function extractVideo(id) {
  
}


async function videoById(req, res, id) {
  
}

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

router.get('/', catchErrors(allVideos));

router.get('/:id?', videoById);

router.use(errorHandler);
