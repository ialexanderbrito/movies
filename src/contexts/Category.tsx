import { createContext, useContext, useState } from 'react';

type CategoryProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const Category = createContext({} as CategoryProps);

export function CategoryProvider({ children }: any) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <Category.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </Category.Provider>
  );
}

export function useCategory() {
  const context = useContext(Category);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
}
