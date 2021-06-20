<template>
  <div class="login_container">
    <div class="login_box">
      <!-- <p>teacher: 1001; director: 1002; admin: 2002</p> -->

      <el-form class="login_form">
        <label>
          <el-input
            type="text"
            placeholder="请输入用户名"
            v-model="user.number"
            prefix-icon="el-icon-user-solid"
          />
          <br />
          <br />
          <el-input
            type="text"
            placeholder="请输入密码"
            v-model="user.password"
            prefix-icon="el-icon-key"
          />
          <br />
          <br />
          <el-button plain type="success" @click="login">login</el-button>
        </label>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { LOGIN } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const user = ref({ number: "", password: "" });
    const store = useStore();
    const login = () => {
      store.dispatch(LOGIN, user.value);
    };
    return {
      user,
      login,
    };
  },
});
</script>
<style scoped>
.login_container {
  background-color: #9fe6d4;
  height: 100vw;
  width: 100vw;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #7fd1be;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
span {
  text-align: center;
  font-size: 24px;
}
.login_form {
  position: absolute;
  bottom: 50px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>
