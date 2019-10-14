export const topicFormatter = ({ topic, ...args }) => {
  const formattedTopic =
    topic
      .slice()
      .charAt(0)
      .toUpperCase() + topic.slice(1);

  return { topic: formattedTopic, ...args };
};
