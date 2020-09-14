window.addEventListener('load', function() {
    var vm = new Vue({
        el: "#app",
        data: {
            todolist: [
                {}
            ],
            optionList: ['全部事件', '未完成事件', '完成事件'],
            option: '请选择事件类型',
            inputValue: '',
            // 要修改的索引号
            reviseid: 0,
            // 按钮显示
            buttonname: '',
            lists: [{ name: '未完成事件1', status: false }, { name: '未完成事件2', status: false }, { name: '未完成事件3', status: false }, { name: '完成事件1', status: true }, { name: '完成事件2', status: true }, { name: '完成事件3', status: true }],
        },
        methods: {
            addlist() {
                if (this.inputValue != '') {
                    var obj = { name: this.inputValue, status: false }
                    this.lists.push(obj)
                    this.inputValue = ''
                } else {
                    alert('您输入的事件为空')
                }
            },
            complete(index) {
                this.lists[index].status = true

            },
            deleteid(index) {
                this.lists.splice(index, 1)
            },
            revise(item, index) {
                this.buttonname = '修改事件'
                this.inputValue = item.name
                this.reviseid = index
            },
            reviselist() {
                this.lists[this.reviseid].name = this.inputValue
                this.inputValue = ''
                this.buttonname = ''
            }
        }
    })
})