const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://nc-news-sg.herokuapp.com/api/'
});

export const getArticles = async (topic, sort_by) => {
  const { data } = await instance.get('/articles', {
    params: {
      topic,
      sort_by
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

export const getComments = async article_id => {
  const { data } = await instance.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const postComment = async (article_id, username, body) => {
  const { data } = await instance.post(`/articles/${article_id}/comments`, {
    username: `${username}`,
    body: `${body}`
  });
  return data.comment;
};

export const deleteComment = async comment_id => {
  const { data } = await instance.delete(`/comments/${comment_id}`);
  return data;
};
