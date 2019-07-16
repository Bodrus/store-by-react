const getJson = () => {
  const data = [
    {
      id: '1',
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
      id: '2',
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    },
    {
      id: '3',
      title: 'Structure and Interpretation of Computer Programs',
      author: 'Gerald Jay Sussman',
      price: 30,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/51H17R%2BbW8L._SX331_BO1,204,203,200_.jpg'
    },
    {
      id: '4',
      title: 'Code: The Hidden Language of Computer Hardware and Software',
      author: 'harles Petzold',
      price: 45,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/313vXSokMiL._SX330_BO1,204,203,200_.jpg'
    },
    {
      id: '5',
      title: 'Grokking Algorithms: An illustrated guide for programmers',
      author: 'Aditya Bhargava',
      price: 45,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/61uUPXbhMxL._SX397_BO1,204,203,200_.jpg'
    }
  ];

  return JSON.stringify(data);
};

export default getJson;
