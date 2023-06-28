const productDisplay = {
    template:
   <div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img v-bind:src="img"></img>
        </div>
    </div>
    <div class='product-info'>
        <h1>{{title}}</h1>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost Out Of Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div v-for="(variant,index) in variants" v-bind:key="variant.key" v-on:mouseover="updateVariant(index)" class="color-circle" v-bind:style="{backgroundColor: variant.color}"></div>
        <button class="button" v-bind:disable='!inStock' v-on:click='addToCart' v-bind:class="{{disableButton: !inStock}}">Add To Cart</button>
    </div>
   </div> 
   ,
    setup(){
        const product = ref('Boots')
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
            {id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg', quantity: 0}
        ])
        const selectedVariant = ref(0)
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)
        function addToCart(){
            cart.value += 1
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
            updateVariant
        }
    }
}