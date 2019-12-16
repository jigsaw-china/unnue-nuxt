const isProdMode = Object.is(process.env.NODE_ENV, 'production')

export const baseURL = isProdMode ? 'https://api.unnue.com' : 'http://localhost:3001';
export const timeout = 10000;

// 网站信息
export const SITE = {
  postfix: ' _开媛笔记 💳',
  adminUrl: isProdMode ? 'https://admin.unnue.com' : 'http://localhost:8081'
};

// 百度联盟id
export const adId = 'u5768008';
