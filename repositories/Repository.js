import ProductRepository from '~/repositories/ProductRepository'

export default($axios) => ({
    product : ProductRepository($axios)
})