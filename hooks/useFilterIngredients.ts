import { Api } from '@/services/api.client';
import { Ingredient } from '@prisma/client';
import { useEffect, useState } from 'react';

type IngredientItem = {
  value: string;
  text: string;
};

interface ReturnProps {
  ingredients: IngredientItem[];
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<ReturnProps['ingredients']>([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(
          ingredients.map((ingredient) => ({
            value: ingredient.id.toString(),
            text: ingredient.name,
          })),
        );
      } catch (error) {
        console.log(error);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients };
};
