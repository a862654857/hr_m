window.addEventListener('load', function() {
    var zujian = {
        data() {
            return {
                optionList: ['全部事件', '未完成事件', '完成事件'],
                option: '请选择事件类型',
                inputValue: '',
                // 要修改的索引号
                reviseid: 0,
                // 按钮显示
                buttonname: '',
                lists: [{ name: '未完成事件1', status: false }, { name: '未完成事件2', status: false }, { name: '未完成事件3', status: false }, { name: '完成事件1', status: true }, { name: '完成事件2', status: true }, { name: '完成事件3', status: true }],
            }
        },
        template: `<div class="box">
        <select v-model="option">
        <option>请选择事件类型</option>
        <option v-for="(item,i) in optionList">{{item}}</option>
    </select>
        <input type="text" v-model='inputValue'>
        <button @click="reviselist" v-if="buttonname=='修改事件'">修改事件</button>
        <button @click="addlist" v-else>添加事件</button>
        <ul v-if="option=='全部事件'">
            <li v-for="(item,i) in lists">
                <span :class="item.status==true? 'xian':''">{{item.name}}</span>
                <button @click='deleteid(i)'>删除</button>
            </li>
        </ul>
        <ul v-if="option=='未完成事件'">
            <li v-for="(item,i) in lists" v-if="item.status==false">
                <span>{{item.name}}</span>
                <button @click='complete(i)'>完成</button>
                <button @click='deleteid(i)'>删除</button>
                <button @click="revise(item,i)">修改</button>
            </li>
        </ul>
        <ul v-if="option=='完成事件' ">
            <li v-for="(item,i) in lists " v-if="item.status==true ">
                <span class="xian ">{{item.name}}</span>
                <button @click='deleteid(i)'>删除</button>
            </li>
        </ul>
    </div>`,
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
    }
    var vm = new Vue({
        el: "#app",
        components: {
            'test': zujian
        }
    })
})