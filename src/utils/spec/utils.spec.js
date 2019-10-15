import { articleFormatter, topicFormatter } from '../utils';

describe('articleFormatter()', () => {
  it('does not mutate passed in object', () => {
    const input = {
      author: 'weegembump',
      title: 'Seafood substitutions are increasing',
      article_id: 33,
      topic: 'cooking',
      created_at: '2018-05-30T15:59:13.341Z',
      comment_count: '6',
      votes: 0
    };
    articleFormatter(input);
    expect(input).toEqual({
      author: 'weegembump',
      title: 'Seafood substitutions are increasing',
      article_id: 33,
      topic: 'cooking',
      created_at: '2018-05-30T15:59:13.341Z',
      comment_count: '6',
      votes: 0
    });
  });
  it('returns an article object with the first character of the topic capitalised and the date format converted to weekday, month, day, year, time plus timezone', () => {
    const input = {
      author: 'weegembump',
      title: 'Seafood substitutions are increasing',
      article_id: 33,
      topic: 'cooking',
      created_at: '2018-05-30T15:59:13.341Z',
      comment_count: '6',
      votes: 0
    };
    expect(articleFormatter(input)).toEqual({
      author: 'weegembump',
      title: 'Seafood substitutions are increasing',
      article_id: 33,
      topic: 'Cooking',
      created_at: 'Wed, May 30, 2018, 4:59 PM GMT+1',
      comment_count: '6',
      votes: 0
    });
  });
});

describe('topicFormatter()', () => {
  it('does not mutate the passed in object', () => {
    const input = {
      description: 'Code is love, code is life',
      slug: 'coding'
    };
    topicFormatter(input);
    expect(input).toEqual({
      description: 'Code is love, code is life',
      slug: 'coding'
    });
  });
  it('returns a topic object with the first character of the slug capitalised', () => {
    const input = {
      description: 'Code is love, code is life',
      slug: 'coding'
    };
    expect(topicFormatter(input)).toEqual({
      description: 'Code is love, code is life',
      slug: 'Coding'
    });
  });
});
