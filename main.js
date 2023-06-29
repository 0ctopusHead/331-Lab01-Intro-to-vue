const { createApp, ref ,computed} = Vue

const app = createApp({
 setup(){
    const cart = ref([])
    const premium = ref(true)
    function updateCart(id){
        cart.value.push(id)
    }
    function removeUpdate(){
        cart.value = []
        console.log(cart.value)
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
app.mount('#app')