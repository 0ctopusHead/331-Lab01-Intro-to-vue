const { createApp, ref , computed, reactive} = Vue

const app = createApp({
 setup(){
    const cart = ref([])
    const premium = ref(false)
    function updateCart(id){
        cart.value.push(id)
    }
    function removeUpdate(id){
        const index = cart.value.findIndex((item=> item === id))
        if(index !== -1){
            cart.value.splice(index,1)
        }
    }
    return{
        cart,
        premium,
        updateCart,
        removeUpdate
    }

 }
})
app.component('product-display',productDisplay)
app.component('review-form',reviewForm)
app.component('review-list',reviewList)
app.component('product-detail',productDetail)
app.mount('#app')