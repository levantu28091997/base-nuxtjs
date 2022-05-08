export const state = () => ({
    products : [],
    product: {}
})

export const mutations = {
    SET_PRODUCTS(state, payload) {
        const arr = Object.keys(payload).map((item) => {
            return item = {...payload[item], id: item}
        })

        state.products = arr
    },
    SET_PRODUCT(state, payload) {
        state.product = payload
        state.products.push({...payload.data, id:payload.name})
    },
    DEL_PRODUCT(state, payload) {
        const index = state.products.findIndex(object => {
            return object.id === payload
        });

        if(index > -1) {
            state.products.splice(index, 1)
        }
    }
}

export const actions = {
    async setProducts({commit}) {
        const res = await this.$repositories.product.all()
        const {status, data } = res
        if( status !== 200 || !data){
            return
        }
        commit('SET_PRODUCTS', data)
    },
    async setProduct({commit}, id) {
        const res = await this.$repositories.product.show(id)
        const {status, data } = res
        if( status !== 200 || !data){
            return
        }
        commit('SET_PRODUCT', data)
    },
    async createProduct({commit}, payload) {
        return new Promise((resolve, reject)=>{
            this.$repositories.product.create(payload)
            .then((res)=>{
                commit('SET_PRODUCT', {name: res.data.name, data: payload})
                resolve({success:true})
            })
            .catch((err)=>{
                reject(err.response)
            })
        })
    },
    async updateProduct({commit}, payload) {
        return new Promise((resolve, reject)=>{
            this.$repositories.product.update(payload.id, payload.data)
            .then((res)=>{
                commit('SET_PRODUCT', res.data)
                resolve({success:true})
            })
            .catch((err)=>{
                reject(err.response)
            })
        })
    },
    async deleteProduct({commit}, id) {
        return new Promise((resolve, reject)=>{
            this.$repositories.product.delete(id)
            .then((res)=>{
                commit('DEL_PRODUCT', id)
                resolve({success:true})
            })
            .catch((err)=>{
                reject(err.response)
            })
        })
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

