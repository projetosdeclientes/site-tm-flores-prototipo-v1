import { createFileRoute } from '@tanstack/react-router'
import { ProductPage } from '@/pages/ProductPage'

export const Route = createFileRoute('/cestas-chocolates/$slug')({
  component: ProductPage,
})