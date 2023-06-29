const productDisplay = {
   template:
    ` 
    <div class="product-display">
     <div class="product-container">
         <div class="product-image">
             <img :class="{'out-of-stock-img': !inStock}" :src="image">
         </div>
     </div>
     <div class='product-info'>
         <h1><a :href='link'>{{title}}</a></h1>
         <p v-if="inStock">In Stock</p>
         <p v-else>Out of Stock</p>
         <p>Shipping: {{shipping}}</p>
         <ul>
             <li v-for="detail in details">{{detail}}</li>
         </ul>
         <div v-for="(variant,index) in variants" :key="variant.key" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}"></div>
         <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>
         <button class="button" @:click="toggleInStock">Toggle</button>
         <button class="button" @:click="removeElement">Remove</button>
     </div>
    </div> 
    `,
    props:{
        premium: Boolean
    },
    setup(props, { emit }){
        const shipping = computed(() =>{
            if(props.premium){
                return 'Free'
            } else{
                return 30
            }
        })
        const product = ref('Socks')
        const brand = ref('SE 331')
        const description = ref('I am description')
        //const inStock = ref(true)
        //const image = ref('./assets/images/socks_green.jpg')
        const image = computed(() =>{
            return variants.value[selectedVariant.value].image
        })
        const link = ref('https://www.camt.cmu.ac.th')
        const inStock = computed(() =>{
            return variants.value[selectedVariant.value].quantity
        })
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', image:'./assets/images/socks_green.jpg',quantity: 50},
            {id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg', quantity: 50}
        ])
        const selectedVariant = ref(0)
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)
        function addToCart(){
            emit('add-to-cart', variants.value[selectedVariant.value].id)
        }
        function removeElement(){
           emit('remove-the-cart',cart.value)
        }
        const title = computed(() =>{
            return brand.value + ' ' + product.value
        })
        function updateImage(variantImage){
            image.value = variantImage
        }
        function toggleInStock(){
           inStock.value = !inStock.value
           console.log(inStock.value)
        }
        function updateVariant(index){
            selectedVariant.value = index
        }
        return{
            title,
            description,
            image,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleInStock,
            updateVariant,
            shipping,
            removeElement
        }
    }

}