const resource = process.env.baseApiUrl + 'deck.json'
export default($axios)=>({
    all(){
        return $axios.get(`${resource}`)
    },
    show(id){
        return $axios.get(`${resource}/${id}`)
    },
    create(payload){
        return $axios.post(`${resource}`,payload)
    },
    edit(payload){
        return $axios.put(`${resource}`, payload)
    }
})