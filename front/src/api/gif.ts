const API_URL = 'https://ruddy-mail.glitch.me/api/gacha';

export default {
  async random() {
    const response = await fetch(API_URL);
    return await response.json();
  },
};
