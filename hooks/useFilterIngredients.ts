import { Api } from '@/services/api.client';
import { useEffect, useState } from 'react';
import { useSet } from 'react-use';

type IngredientItem = {
  value: string;
  text: string;
};

interface ReturnProps {
  ingredients: IngredientItem[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState<ReturnProps['ingredients']>([]);

  const [selectedIds, { toggle }] = useSet(new Set<string>([]));
  console.log(selectedIds);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(
          ingredients.map((ingredient) => ({
            value: ingredient.id.toString(),
            text: ingredient.name,
          })),
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients, loading, onAddId: toggle, selectedIds };
};
