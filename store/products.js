export const state = () => ({
    products : []
})

export const mutations = {
    SET_PRODUCTS(state, payload) {
        state.products = payload
    }
}

export const actions = {
    async setProducts({commit}) {
        const res = await this.$repositories.product.all()
        const {status, data } = res
        if( status === 200 && data){
            commit('SET_PRODUCTS', data)
        }else{
            // handle error
        }
    }
}

export const getters = {
    getAllProduct(state) {
        return state.products
    }
}

