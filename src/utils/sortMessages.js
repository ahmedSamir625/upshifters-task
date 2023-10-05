export const sortMessagesByPriority = (messages) => {
  const priorityMap = {
    high: 3,
    medium: 2,
    low: 1,
  };
  let sortedMessages = messages.slice();
  sortedMessages.sort((a, b) => {
    let aPriority = priorityMap[a.priority];
    let bPriority = priorityMap[b.priority];
    if (aPriority === bPriority) {
      return 0;
    }
    if (aPriority > bPriority) {
      return -1;
    }
    if (aPriority < bPriority) {
      return 1;
    }
  });
  return sortedMessages;
};

const sortText = (type, messages) => {
  let sortedMessages = messages.slice();

  return sortedMessages.sort((a, b) => {
    if (a[type] > b[type]) {
      return -1;
    }
    if (a[type] < b[type]) {
      return 1;
    }
    return 0;
  });
};

export const sortMessagesByPlatform = (messages) => {
  return sortText("platform", messages);
};

export const sortMessagesByUserSentiment = (messages) => {
  return sortText("sentiment", messages);
};

export const sortMessagesByRepliedTo = (messages) => {
  let sortedMessages = messages.slice();

  return sortedMessages.sort((a, b) => {
    return a.replied_to === b.replied_to ? 0 : a.replied_to ? -1 : 1;
  });
};
