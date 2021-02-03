export function getTimePassed(time) {
  let timePassed = Date.now() - time;

  timePassed = Math.round(timePassed / (1000 * 60 * 60));

  if (timePassed < 24) {
    if (timePassed !== 11 && timePassed % 10 === 1) {
      return `${timePassed} klukkustund`;
    }
    return `${timePassed} klukkustundum`;
  }

  if (timePassed < 24 * 7) {
    timePassed = Math.round(timePassed / 24);
    if (timePassed !== 11 && timePassed % 10 === 1) {
      return `${timePassed} degi`;
    }
    return `${timePassed} dögum`;
  }

  if (timePassed < 24 * 30) {
    timePassed = Math.round(timePassed / (24 * 7));
    if (timePassed !== 11 && timePassed % 10 === 1) {
      return `${timePassed} viku`;
    }
    return `${timePassed} vikum`;
  }

  if (timePassed < 24 * 365) {
    timePassed = Math.round(timePassed / (24 * 30));
    if (timePassed !== 11 && timePassed % 10 === 1) {
      return `${timePassed} mánuði`;
    }
    return `${timePassed} mánuðum`;
  }

  timePassed = Math.round(timePassed / (24 * 365));

  if (timePassed !== 11 && timePassed % 10 === 1) {
    return `${timePassed} ári`;
  }

  return `${timePassed} árum`;
}

export function getRelatedVideos(videos, related) {
  const relatedVideos = [];

  for (let i = 0; i < related.length; i += 1) {
    const relatedVideo = videos.find(el => el.id === related[i]); // eslint-disable-line
    relatedVideos.push(relatedVideo);
  }

  return relatedVideos;
}

export function getDuration(duration) {
  const min = Math.floor(duration / 60);
  let minString = min;

  let sec = duration;

  if (min !== 0) {
    sec = duration - (min * 60);
  }
  let secString = `${sec}`;

  if (min < 10) {
    minString = `0${min}`;
  }

  if (sec < 10) {
    secString = `0${sec}`;
  }

  return `${minString}:${secString}`;
}
