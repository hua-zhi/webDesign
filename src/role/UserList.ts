import { Teacher } from "@/role/Menu";
const userList: Teacher[] = [
  {
    id: 1,
    name: "lily",
    tel: "15030829674",
    email: "1111@163.com",
  },
  {
    id: 2,
    name: "mint",
    tel: "15011111111",
    email: "2111@163.com",
  },
  {
    id: 3,
    name: "rose",
    tel: "15032232343",
    email: "3111@163.com",
  },
  {
    id: 4,
    name: "kapok",
    tel: "15044444444",
    email: "4111@163.com",
  },
];
export function UserLists() {
  return userList;
}
