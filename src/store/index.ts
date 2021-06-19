import { ActionTree, createStore, MutationTree } from "vuex";
import { Menu, Lab, Teacher } from "@/role/Menu";
import router from "@/router";
import * as types from "./VuexTypes";
import axios from "@/axios";
import { ResultVO } from "./Response";
import { setRole } from "@/role/Role";
import { LabLists, updateLab } from "@/role/LabLists";
import { UserLists } from "@/role/UserList";

export interface State {
  menuList?: Menu[];
  exception?: string;
  labList?: Lab[];
  lab?: Lab;
  userList?: Teacher[];
}

const state: State = {
  menuList: [],
  exception: "",
  labList: [],
  lab: { id: "" },
  userList: [],
};

const getters = {
  premission: () => (level: string[]) =>
    level.some((l) => l == sessionStorage.getItem("role")),
};
const mutations: MutationTree<State> = {
  [types.LAB_LISTS]: (state, data: Lab[]) => (state.labList = data),
  [types.UPDATE_LAB]: (state, data: Lab) => (state.lab = data),
  [types.USER_LISTS]: (state, data: Teacher[]) => (state.userList = data),
};
const actions: ActionTree<State, State> = {
  [types.LOGIN]: async (_, data: any) => {
    // 此处向后端发出登录请求。后端返回token以及加密role，置于sessionstorage
    // 每次请求在header中携带token
    // 并基于role加载对应的角色权限路由/功能列表等信息，也可加载对应的API请求操作
    const resp = await axios.post<ResultVO>("login", data);
    if (resp.data.code == 200) {
      const roleId = resp.headers.role;
      setRole(roleId);
      sessionStorage.setItem("role", roleId);
      sessionStorage.setItem("token", resp.headers.token);
      router.push("/main");
    }
  },
  [types.LAB_LISTS]: ({ commit, state }) => {
    if (state.labList?.length == 0) {
      setTimeout(() => {
        commit(types.LAB_LISTS, LabLists());
      }, 50);
    }
  },
  [types.USER_LISTS]: ({ commit, state }) => {
    if (state.userList?.length == 0) {
      setTimeout(() => {
        commit(types.USER_LISTS, UserLists());
      }, 50);
    }
  },
  async [types.UPDATE_LAB]({ commit }, upt: Lab) {
    // try {
    //   const resp = await axios.post<ResultVO>("updateLab", upt);
    // } catch (error) {
    //   console.log(error);
    // }
    setTimeout(() => {
      commit(types.UPDATE_LAB, LabLists());
    });
  },
};

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
});
