export default {
    data() {
        return {
            loading: true,
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            setTimeout(() => {
                this.loading = false;
            }, 500);
        },
    },
};
