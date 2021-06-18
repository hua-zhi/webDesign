//数据规范
export interface Menu {
  title: string;
  path?: string;
  children?: Menu[];
}
export interface Lab {
  id?: number;
  number?: string;
  machine?: string;
  choice: boolean;
  description?: string;
}
export interface Teacher {
  id?: number;
  name?: string;
  tel?: string;
  email?: string;
}
export interface Course {
  id?: number;
  name?: string;
  studentNumber?: number;
  lab: Lab[];
}
