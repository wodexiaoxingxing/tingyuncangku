/**
 * 通用表格mixin
 * 此 mixin 是提取表格的显示和操作方法的公用性，
 * 实现了数据的加载加载，分页查询，条件筛选，表格多选，条件重置重置，表格序号功能功能，
 * 通过重写`loadData`这个方法来加载数据，
 * 此方法需要返回一个 Promise，
 * 通过重写`loadSuccess`方法来处理数据成加载的操作，
 * 通过重写`loadFailed`方法来处理数据加载失败的操作，
 * 其他功能可查看代码使用
 */
export default {
  data() {
    return {
      tableData: [],
      tableLoading: false,
      total: 0,
      pageNumber: 1,
      pageSize: 10,
      pageSizes: [10, 20, 50, 100],
      selectList: []
    };
  },
  methods: {
    /**
     * 表格序号
     */
    defineTableIndex(index) {
      return (this.pageNumber - 1) * this.pageSize + index + 1;
    },
    /**
     * 多选改变
     */
    onSelectChange(val) {
      this.selectList = val;
    },
    /**
     * 检索数据
     */
    onSearch() {
      if (this.$refs["table"]) this.$refs["table"].clearSelection();
      this._checkSearchField().then(() => {
        this.pageNumber = 1;
        this.getList();
      });
    },
    /**
     * 重置数据
     */
    onReset() {
      this.$refs["form"].resetFields();
      this.pageNumber = 1;
      this.getList();
    },
    /**
     * 检查搜索条件验证
     * @param formName
     * @returns {Promise<unknown>}
     */
    _checkSearchField() {
      return new Promise((resolve, reject) => {
        if (!this.$refs["form"]) return resolve();
        this.$refs["form"].validate(valid => {
          if (valid) {
            resolve();
          } else {
            reject();
          }
        });
      });
    },
    /**
     * 获取数据列表
     */
    getList() {
      const _this = this;
      try {
        _this.tableLoading = true;
        this.loadData()
          .then(res => _this.loadSuccess(res))
          .catch(error => _this.loadFailed(error))
          .finally(() => {
            _this.tableLoading = false;
          });
      } catch (e) {
        //console.log(e);
      }
    },
    /**
     * 加载数据，需要重写此方法返回一个promise
     */
    async loadData() {
      return null;
    },
    /**
     * 成功加载数据
     */
    loadSuccess() {},
    /**
     * 失败加载数据
     */
    loadFailed() {},
    /**
     * 分页改变
     */
    onPageSizeChange(val) {
      this.pageNumber = 1;
      this.pageSize = val;
      this._checkSearchField()
        .then(() => {
          this.getList();
        })
        .catch(() => {
          this.$message.error("搜索条件有误");
        });
    },
    /**
     * 页码改变
     * @param val
     */
    onPageNumberChange(val) {
      this.pageNumber = val;
      this._checkSearchField()
        .then(() => {
          this.getList();
        })
        .catch(() => {
          this.$message.error("搜索条件有误");
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm._checkSearchField().then(() => {
        vm.getList();
      });
    });
  }
};
