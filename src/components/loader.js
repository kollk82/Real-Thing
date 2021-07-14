export default {
    data() {
        return {
            loading: true,
        };
    },
    mounted() {
        window.onload = function() {
            document.querySelector('.loader').style.display = 'none';
            this.loading = false;
        };
    },
};

