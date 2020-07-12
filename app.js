var app = new Vue({
    el: '#tabledemo',
    data: {
        comments: [],
        search: ''
    },
    computed: {
        filteredComments: function () {
            let self = this
            let search = self.search.toLowerCase()
            return self.comments.filter(function (comments) {
                return comments.name.toLowerCase().indexOf(search) !== -1 ||
                    comments.email.toLowerCase().indexOf(search) !== -1 ||
                    comments.body.toLowerCase().indexOf(search) !== -1
            })
        }
    },
    mounted: function () {
        console.log("mounted");
        let vm = this;
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/comments',
            success:function(res) {
                console.log(res);
                //this.comments = res;
                vm.comments = res;
            }
        });
    },
    methods: {
        getComment:function(val) {
            console.log(val);
        }
    },
});
function getdata() {
    app.getComment("1310731047");
}