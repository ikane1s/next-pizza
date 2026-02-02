import { Container, Categories, Title, SortPopUp, Filters } from '@/components/shared';

export default function Home() {
  return (
    <div>
      {/* Заголовок */}
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      {/* Top Bar */}
      <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
        <Container className="flex items-center justify-between ">
          <Categories />
          <SortPopUp />
        </Container>
      </div>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список пицц</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
