var Btn = {
    render: function (createElement) {
        return createElement('button', {
            attrs: {
                value: '查看'
            },
            on: {
                click: this.handleClick
            }
        })
    },
    methods: {
        handleClick: function () {
            alert('click');
        }
    },
}

Vue.component('data-table', {
    render: function (createElement) {
        return createElement(
            "table", null, []
        )
    },
    props: ['comments'],
    data: function () {
        return {
            headers: [
                { title: 'Name' },
                { title: 'Email' },
                { title: 'Body' },
                { title: 'Body' },
                //{ title: 'href' }
            ],
            rows: [],
            dtHandle: null
        }
    },
    watch: {
        comments: function (val, oldVal) {
            let vm = this;
            vm.rows = [];
            val.forEach(function (item) {
                let row = [];
                row.push(item.name);
                row.push('<a href="mailto://' + item.email + '">' + item.email + '</a>');
                row.push(item.body);
                row.push("<Btn></Btn>");
                //row.push('<button></button>');
                vm.rows.push(row);
            });
            vm.dtHandle.clear();
            vm.dtHandle.rows.add(vm.rows);
            vm.dtHandle.draw();
        }
    },
    mounted: function () {
        let vm = this;
        vm.dtHandle = $(this.$el).DataTable({
            columns: vm.headers,
            data: vm.rows,
            searching: true,
            paging: true,
            info: false
        });
    }
});

