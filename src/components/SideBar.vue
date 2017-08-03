<template>
  <el-menu default-active="1">
    <el-menu-item index="1">
      Dashboard
    </el-menu-item>
    <el-menu-item index="2">
      Logs
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
