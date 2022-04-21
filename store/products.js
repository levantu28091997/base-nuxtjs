export const state = () => ({
    products : [],
    product: []
})

export const mutations = {
    SET_PRODUCTS(state, payload) {
        state.products = payload
    },
    SET_PRODUCT(state, payload) {
        state.product = payload
        state.products = {...state.products, [payload.name]:payload.data}
    },
    DEL_PRODUCT(state, payload) {
        console.log(state.products);
        if(state.products[payload]) {
            delete state.products[payload]
            console.log(state.products);
            return state.products
        }
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
    },
    async setProduct({commit}, id) {
        const res = await this.$repositories.product.show(id)
        const {status, data } = res
        if( status === 200 && data){
            commit('SET_PRODUCT', data)
        }else{
            // handle error
        }
    },
    async createProduct({commit}, payload) {
        const res = await this.$repositories.product.create(payload)
        const {status, data} = res
        if( status === 200 && data){
            commit('SET_PRODUCT', {name: data.name, data: payload})
        }else{
            // handle error
        }
    },
    async updateProduct({commit}, payload) {
        const res = await this.$repositories.product.update(payload.id, payload.data)
        const {status, data} = res
        if( status === 200 && data){
            commit('SET_PRODUCT', data)
        }else{
            // handle error
        }
    },
    async deleteProduct({commit}, id) {
        const res = await this.$repositories.product.delete(id)
        const {status, data} = res
        if( status === 200){
            console.log(id);
            commit('DEL_PRODUCT', id)
        }else{
            // handle error
        }
    }
}

export const getters = {
    getAllProduct(state) {
        return state.products
    },
    showProduct(state) {
        return state.product
    }
}

