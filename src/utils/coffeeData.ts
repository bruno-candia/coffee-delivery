interface Coffee {
  id: number;
  name: string;
  tags: string[];
  description: string;
  price: number;
  stock: number;
  image: string;
}

export const coffeeData: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    tags: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    stock: 10,
    image: '/traditional-express.png',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 12.9,
    stock: 0,
    image: '/american-express.png',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    tags: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 14.9,
    stock: 5,
    image: '/cream-express.png',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    tags: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 16.9,
    stock: 3,
    image: '/cold-express.png',
  },
  {
    id: 5,
    name: 'Café com Leite',
    tags: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 10.9,
    stock: 8,
    image: '/coffee-milk.png',
  },
  {
    id: 6,
    name: 'Latte',
    tags: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 12.9,
    stock: 6,
    image: '/latte.png',
  },
  {
    id: 7,
    name: 'Cappuccino',
    tags: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 13.9,
    stock: 6,
    image: '/cappuccino.png',
  },
  {
    id: 8,
    name: 'Macchiato',
    tags: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 11.9,
    stock: 9,
    image: '/macchiato.png',
  },
  {
    id: 9,
    name: 'Mocaccino',
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 15.9,
    stock: 4,
    image: '/mocaccino.png',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    tags: ['tradicional', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 17.9,
    stock: 2,
    image: '/hot-chocolate.png',
  },
  {
    id: 11,
    name: 'Cubano',
    tags: ['especial', 'alcoólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 14.9,
    stock: 5,
    image: '/cuban.png',
  },
  {
    id: 12,
    name: 'Havaiano',
    tags: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 15.9,
    stock: 4,
    image: '/hawaiian.png',
  },
  {
    id: 13,
    name: 'Árabe',
    tags: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 16.9,
    stock: 3,
    image: '/arabic.png',
  },
  {
    id: 14,
    name: 'Irlandês',
    tags: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 18.9,
    stock: 1,
    image: '/irish.png',
  },
];