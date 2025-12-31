'use client'

import { useQuery } from '@tanstack/react-query'
import { AboutRepositoryImpl } from '../../data/about/AboutRepositoryImpl'
import { GetAboutUseCase } from '../../domain/about/usecase/GetAboutUseCase'
import { AboutView } from './AboutView'

const useCase = new GetAboutUseCase(
  new AboutRepositoryImpl()
)

export function AboutPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['about'],
    queryFn: () => useCase.execute()
  })

  if (isLoading) return <div>Loading...</div>
  return <AboutView about={data!}/>
}