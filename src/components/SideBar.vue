<template>
  <el-menu :router="true" default-active="/">
    <el-menu-item index="/">
      ダッシュボード
    </el-menu-item>
    <el-menu-item index="/logs">
      ログ
    </el-menu-item>
  </el-menu>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import ElSubmenu from '../../node_modules/element-ui/packages/menu/src/submenu';

  export default {
    components: {ElSubmenu},
    data () {
      return {};
    },
    methods: {
    },
    computed: {
    }
  };
</script>

<style scoped>
</style>
