<script>
export default {
  props: {
    info: String
  },
  data() {
    return {
      msg: 'hello world',
      input: ''
    }
  },
  render() {
    return (
      <div>
        <div>{this.info}</div>
        <div vOn:click={this.newTodoText}>点击</div>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type='primary'>主要按钮</el-button>
          <el-button type='success'>成功按钮</el-button>
          <el-button type='info'>信息按钮</el-button>
          <el-button type='warning'>警告按钮</el-button>
          <el-button type='danger'>危险按钮</el-button>
        </el-row>
        <el-input
          vModel={this.input}
          vOn:blur={this.my_blur}
          placeholder='请输入内容'
        ></el-input>
      </div>
    )
  },
  methods: {
    newTodoText() {
      alert('dian')
    },
    my_blur() {
      alert('blur')
    }
  }
}
</script>
