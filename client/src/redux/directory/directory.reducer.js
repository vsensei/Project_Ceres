const imageWidth = '500';

const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'pasta',
      imageUrl:
        'https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=' +
        imageWidth,
      linkUrl: 'pasta',
    },
    {
      id: 2,
      title: 'soup',
      imageUrl:
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=' +
        imageWidth,
      linkUrl: 'soup',
    },
    {
      id: 3,
      title: 'salad',
      imageUrl:
        'https://images.unsplash.com/photo-1547496502-affa22d38842?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=' +
        imageWidth,
      linkUrl: 'salad',
    },
    {
      id: 4,
      title: 'sushi',
      imageUrl:
        'https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=' +
        imageWidth,
      size: 'large',
      linkUrl: 'sushi',
    },
    {
      id: 5,
      title: 'pizza',
      imageUrl:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=' +
        imageWidth,
      size: 'large',
      linkUrl: 'pizza',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
