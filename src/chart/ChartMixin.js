
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        isShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        printTitle() {
            console.log(this.title);
        }
    }
}