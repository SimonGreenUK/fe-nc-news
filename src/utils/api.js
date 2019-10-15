const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://nc-news-sg.herokuapp.com/api/'
});

export const getArticles = async topic => {
  const { data } = await instance.get('/articles', {
    params: {
      topic
    }
  });

  return data.articles;
};

export const getSingleArticle = async article_id => {
  const { data } = await instance.get(`/articles/${article_id}`);
  return data.article;
};

export const getTopics = async () => {
  const { data } = await instance.get('/topics');

  return data.topics;
};
