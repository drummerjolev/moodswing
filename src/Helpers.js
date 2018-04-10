export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateId = () => {
  const id = Math.floor((Math.random() * 100000) + 1);
  return id.toString();
}

export const generateRecommendation = () => {
  const times = [
    'now',
    'in 5min',
    'in 10min',
    'in 12min',
    'in 15min',
    'in 20min',
    'in 25min',
    'in 30min',
    'at 09:15AM',
    'at 09:00AM',
  ];
  const titles = [
    'Play John Mayer',
    'Play Taylor Swift (really)',
    'Play Jazz',
    'Play Country',
    'Play Chill Radio Station',
    'Play Happy Radio Station',
    'Play the Top 100 songs in the US',
    'Play Piano-heavy music',
    'Play songs without lyrics'
  ];
  return {
    'id': getRandomInt(1, 100000),
    'title': titles[getRandomInt(0, titles.length - 1)],
    'time': times[getRandomInt(0, times.length - 1)],
    'link': 'https://www.pandora.com/artist/link/AR7K5Zp25c2hZ2q',
  }
}
