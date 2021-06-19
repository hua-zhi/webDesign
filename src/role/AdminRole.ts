import { RouteRecordRaw } from "vue-router";
import { Menu } from "./Menu";
import router from "@/router/index";

const routes: Array<RouteRecordRaw> = [
  {
    name: "main",
    path: "/main",
    component: () => import("@/views/main/Main.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/main/admin/AdminHome.vue"),
      },
      {
        path: "/admin/backup",
        component: () => import("@/views/main/admin/Backup.vue"),
      },
      {
        // 实验室管理
        path: "/admin/labManage",
        component: () => import("@/views/main/admin/LabManage.vue"),
      },
      {
        //教师管理
        path: "/admin/teacherManage",
        component: () => import("@/views/main/admin/TeacherManage.vue"),
      },
      {
        path: "/admin/addLab",
        component: () => import("@/views/main/admin/AddLab.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "main" },
  },
];

// ----------------

const menuList: Menu[] = [
  {
    title: "管理员管理",
    children: [
      {
        title: "添加实验室",
        path: "/admin/addLab",
      },
      {
        title: "实验室管理管理",
        path: "/admin/labManage",
      },
      {
        title: "系统备份管理",
        path: "/admin/backup",
      },
      {
        title: "教师管理",
        path: "/admin/teacherManage",
      },
    ],
  },
];

// --------------------

export function getRoleMenus() {
  router.removeRoute("nomatch");
  routes.forEach((r) => router.addRoute(r));
  return menuList;
}
