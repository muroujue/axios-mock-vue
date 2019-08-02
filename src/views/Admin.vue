<template>
  <div class="admin">
    <el-container>
      <el-header><span>Vue Admin</span></el-header>
      <el-container>
        <el-aside width="240px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '后台主界面'
    }
  }
}
</script>

<style scoped>
.el-header {
  border-bottom: 1px solid #eaecef;
  color: #2c3e50;
  font-size: 20px;
  font-weight: 600;
  padding: 0 0 0 20px;
  display: flex;
  align-items: center;
  line-height: 1.5;
}
.el-aside {
  box-sizing: border-box;
  border-right: 1px solid #eaecef;
  overflow-y: auto;
}
</style>
