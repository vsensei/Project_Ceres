const SHOP_DATA = {
  pasta: {
    id: 1,
    title: 'Pasta',
    routeName: 'pasta',
    items: [
      {
        id: 1,
        name: 'Pasta #1',
        imageUrl:
          'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 15,
      },
      {
        id: 2,
        name: 'Pasta #2',
        imageUrl:
          'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 25,
      },
      {
        id: 3,
        name: 'Pasta #3',
        imageUrl:
          'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 60,
      },
      {
        id: 4,
        name: 'Pasta #4',
        imageUrl:
          'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 80,
      },
      {
        id: 5,
        name: 'Pasta #5',
        imageUrl:
          'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 80,
      },
    ],
  },
  soup: {
    id: 2,
    title: 'Soup',
    routeName: 'soup',
    items: [
      {
        id: 6,
        name: 'Soup #1',
        imageUrl:
          'https://images.unsplash.com/photo-1591090820777-2966ef650555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 15,
      },
      {
        id: 7,
        name: 'Soup #2',
        imageUrl:
          'https://images.unsplash.com/photo-1591090820777-2966ef650555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 25,
      },
      {
        id: 8,
        name: 'Soup #3',
        imageUrl:
          'https://images.unsplash.com/photo-1591090820777-2966ef650555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 60,
      },
      {
        id: 9,
        name: 'Soup #4',
        imageUrl:
          'https://images.unsplash.com/photo-1591090820777-2966ef650555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 80,
      },
    ],
  },
  salad: {
    id: 3,
    title: 'Salad',
    routeName: 'salad',
    items: [
      {
        id: 10,
        name: 'Salad #1',
        imageUrl:
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        price: 15,
      },
      {
        id: 11,
        name: 'Salad #2',
        imageUrl:
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        price: 25,
      },
      {
        id: 12,
        name: 'Salad #3',
        imageUrl:
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        price: 60,
      },
      {
        id: 13,
        name: 'Salad #4',
        imageUrl:
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        price: 80,
      },
    ],
  },
  sushi: {
    id: 4,
    title: 'Sushi',
    routeName: 'sushi',
    items: [
      {
        id: 14,
        name: 'Sushi #1',
        imageUrl:
          'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        price: 15,
      },
      {
        id: 15,
        name: 'Sushi #2',
        imageUrl:
          'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        price: 25,
      },
      {
        id: 16,
        name: 'Sushi #3',
        imageUrl:
          'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        price: 60,
      },
      {
        id: 17,
        name: 'Sushi #4',
        imageUrl:
          'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        price: 80,
      },
    ],
  },
  pizza: {
    id: 5,
    title: 'Pizza',
    routeName: 'pizza',
    items: [
      {
        id: 18,
        name: 'Pizza #1',
        imageUrl:
          'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        price: 15,
      },
      {
        id: 19,
        name: 'Pizza #2',
        imageUrl:
          'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        price: 25,
      },
      {
        id: 20,
        name: 'Pizza #3',
        imageUrl:
          'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        price: 60,
      },
      {
        id: 21,
        name: 'Pizza #4',
        imageUrl:
          'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        price: 80,
      },
    ],
  },
};

export default SHOP_DATA;
