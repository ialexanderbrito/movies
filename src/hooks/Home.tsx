import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useCategory } from 'contexts/Category';
import { useToast } from 'contexts/Toast';

import { getMovies, getMultiSearch, getTrending } from 'services/get/movies';
import { getTVSeries } from 'services/get/tv';

export function useHome() {
  const { toast } = useToast();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const { selectedCategory } = useCategory();

  const {
    data: movies,
    isError: isErrorMovies,
    isLoading: isLoadingMovies,
  } = useQuery(['movies'], () => getMovies(), {
    staleTime: 50000,
  });

  const {
    data: trendings,
    isError: isErrorTrendings,
    isLoading: isLoadingTrendings,
  } = useQuery(['trendings'], () => getTrending(), {
    staleTime: 50000,
  });

  const {
    data: series,
    isLoading: isLoadingTVSeries,
    isError: isErrorTVSeries,
  } = useQuery(['tv'], () => getTVSeries(), {
    staleTime: 50000,
  });

  const { data: allSearch, isLoading: isLoadingSearch } = useQuery(
    ['allSearch', search, page],
    () => getMultiSearch(search, page),
    {
      staleTime: 50000,
    },
  );

  if (isErrorMovies || isErrorTrendings || isErrorTVSeries) {
    return toast.error('Erro ao buscar dados');
  }

  return {
    movies,
    trendings,
    series,
    allSearch,
    isLoadingSearch,
    isLoadingTVSeries,
    isErrorTVSeries,
    search,
    setSearch,
    page,
    setPage,
    selectedCategory,
    isLoadingMovies,
    isLoadingTrendings,
  };
}
