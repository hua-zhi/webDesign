<template class="login_container">
  <div class="login_container">
    <span>欢迎来到实验室管理系统</span>
    <div class="login_box">
      <!-- <p>teacher: 1001; director: 1002; admin: 2002</p> -->

      <form class="login_form">
        <label>
          账号:<input
            type="text"
            placeholder="请输入用户名"
            v-model="user.number"
          />
          <br />
          <br />
          密码:<input
            type="text"
            placeholder="请输入密码"
            v-model="user.password"
          />
          <br />
          <button @click="login" class="btns">login</button>
        </label>
      </form>
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
template {
  background-color: #000;
}
.login_container {
  /* background-color: #7fd1be; */
  height: 100%;
  width: 100%;
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
  bottom: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
