import DefineTableIndex from "./modules/DefineTableIndex";

/**
 * 定义全局混入
 * 在此引入定义的mixin将会定义到全局
 * @param Vue
 */
const installMixin = Vue => {
  /**
   * el-table 序号计算方法
   */
  Vue.mixin(DefineTableIndex);
};

export default installMixin;
