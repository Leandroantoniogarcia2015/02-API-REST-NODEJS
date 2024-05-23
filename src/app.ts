import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)
// o app.register injeta o arquivo de rota dentro do app
// o prefixo, serve como uma base_url para as rotas do arquivo transactionsRoutes
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
