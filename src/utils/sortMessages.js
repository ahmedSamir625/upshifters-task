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
