import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Gagan',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'Theora',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
  products: [
      {
          name: 'Baby onesies',
          category: 'baby suit',
          image: '/images/p1.jpg',
          price: '999',
          countInStock: 10,
          brand: 'Babyoye',
          rating: '4.5',
          numReviews: '50',
          description: 'excellent quality product',
      },
      {
          name: 'Nike slim shirt',
          category: 'shirts',
          image: '/images/p2.jpg',
          price: '4999',
          countInStock: 12,
          brand: 'Nike',
          rating: '4.6',
          numReviews: '57',
          description: 'excellent quality product',
      },
      {
          name: 'cobb white shirt',
          category: 'Shirts',
          image: '/images/p3.jpeg',
          price: '3999',
          countInStock: 0,
          brand: 'Cobb',
          rating: '4.4',
          numReviews: '40',
          description: 'excellent quality product',
      },
      {
          name: 'Wrangler pant',
          category: 'Pants',
          image: '/images/p4.jpg',
          price: '4499',
          countInStock: 22,
          brand: 'Wrangler',
          rating: '4.3',
          numReviews: '47',
          description: 'excellent quality product',
      },
      {
          name: 'Adidas pant',
          category: 'Pants',
          image: '/images/p5.jpeg',
          price: '6999',
          countInStock: 10,
          brand: 'Adidas',
          rating: '4.0',
          numReviews: '36',
          description: 'excellent quality product',
      },
      {
          name: 'Baby ',
          category: 'Baby suit',
          image: '/images/p1.jpg',
          price: '999',
          countInStock: 5,
          brand: 'Babyoye',
          rating: '4.5',
          numReviews: '50',
          description: 'excellent quality product',
      },
  ],
};
export default data;