const resource = process.env.baseApiUrl+'deck'
const suffixes = '.json'
export default($axios)=>({
    all() {
        return $axios.get(`${resource}${suffixes}`)
    },
    show(id) {
        return $axios.get(`${resource}/${id}${suffixes}`)
    },
    create(payload) {
        return $axios.post(`${resource}${suffixes}`,payload)
    },
    update(id, payload) {
        return $axios.put(`${resource}/${id}${suffixes}`, payload)
    },
    delete(id) {
        return $axios.delete(`${resource}/${id}${suffixes}`)
    }
})