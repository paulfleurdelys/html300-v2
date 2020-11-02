export default {
    data() {
        return {
            isClicked: false
        }
    },
    methods: {
        toggleBorder() {
            this.isClicked = !this.isClicked;
        }
    }
}