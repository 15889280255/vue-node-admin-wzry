<template>
  <div>
    <h2>广告位列表</h2>
    <el-table :data="tableData">
      <el-table-column prop="_id" label="id" width="400"></el-table-column>
      <el-table-column prop="name" label="广告位名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="goEdit(scope.row._id)" type="primary" size="small">编辑</el-button>
          <el-button @click="toDelete(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { initAds, deleteAds } from "@/api/system";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      const res = await initAds()
      this.tableData = res.data;
    },

    goEdit(id) {
      this.$router.push(`/system/adsUpdate/${id}`);
    },

    toDelete(row) {
      this.$confirm(`此操作将永久删除 "${row.name}", 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const res = await deleteAds({id:row._id})
          if (res.statusCode === 0) {
            this.$message.success(`${res.msg}`);
            this.initData();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style scoped>
.row-button {
  display: flex;
}
</style>