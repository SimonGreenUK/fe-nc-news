export const articleFormatter = ({ topic, created_at, ...args }) => {
  const formattedTopic =
    topic
      .slice()
      .charAt(0)
      .toUpperCase() + topic.slice(1);

  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  };
  const formattedDate = new Date(created_at.slice()).toLocaleDateString(
    'en-GB',
    options
  );

  return { topic: formattedTopic, created_at: formattedDate, ...args };
};

export const topicFormatter = ({ slug, ...args }) => {
  const formattedSlug =
    slug
      .slice()
      .charAt(0)
      .toUpperCase() + slug.slice(1);

  return { slug: formattedSlug, ...args };
};
