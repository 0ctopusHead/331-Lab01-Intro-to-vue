const productDetail = {
    template:
    /*html*/
    `
    <div class="product-detail">
    <ul>
       <li v-for="detail in details">{{detail}}</li>
    </ul>
    </div>
    `,
    props:{
        details:{
            type: Array,
        }
    }
    ,
    setup(props){
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        return{
            details
        }
    }
}