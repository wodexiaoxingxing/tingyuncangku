/**
 * el-table index
 * 序号计算方法
 * 详情参考 element-ui官网表格index字段使用方法
 * 需要提供 pageNumber 和 pageSize 属性
 */
export default {
  methods: {
    defineTableIndex(index) {
      return (this.pageNumber - 1) * this.pageSize + index + 1;
    }
  }
};
