const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://nc-news-sg.herokuapp.com/api/'
});

exports.getArticles = async topic => {
  const { data } = await instance.get('/articles', {
    params: {
      topic
    }
  });

  return data.articles;
};

exports.getTopics = async () => {
  const { data } = await instance.get('/topics');

  return data.topics;
};
