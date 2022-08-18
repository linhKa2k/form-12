<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <div class="avatar"></div>
        <h1 class="text-avatar">welcome</h1>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <router-link :to="{ name: 'status' }">
            <pie-chart-outlined />
            <span>Status</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link :to="{ name: 'account' }">
            <idcard-outlined />
            <span>Account</span>  
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link :to="{ name: 'user' }">
            <user-outlined />
            <span>User</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link :to="{ name: 'role' }">
            <team-outlined />
            <span>Role</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <router-link :to="{ name: 'divideNumber' }">
            <contacts-outlined />
            <span>Chia Số</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="6">
          <router-link :to="{ name: 'login' }">
            <import-outlined />
            <span>Đăng Xuất</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px">

        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">

          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, IdcardOutlined,ContactsOutlined,ImportOutlined} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    IdcardOutlined,
    ContactsOutlined,
    ImportOutlined

  },

  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),

    };
  },

});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
.abc {
  display:flex;
  justify-content: center; 
}

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #eee;
  margin-top: 20px;
}

.text-avatar {
  color: #fff
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>