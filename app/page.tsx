import { Container, Categories, Title, SortPopUp, Filters } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <div>
      {/* Заголовок */}
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      {/* Top Bar */}
      <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-1000">
        <Container className="flex items-center justify-between ">
          <Categories />
          <SortPopUp />
        </Container>
      </div>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[90px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                products={[
                  {
                    id: 1,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Комбо"
                products={[
                  {
                    id: 1,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:760x760/019a897c5ea574b889475bd98412de7b.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
