import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ResultVO } from "@/store/Response";
import { TEACHER, DIRECTOR, ADMIN } from "@/role/Role";
import { LabLists, updateLab } from "@/role/LabLists";
import _Result from "element-plus/lib/el-result";
const mock = new MockAdapter(axios);

// config，axios config对象。包含请求信息
// 返回数组，[status, {data对象}, {header对象}]
mock.onPost("login").reply((c) => {
  console.log("mock login");

  const resultVO: ResultVO = { code: 200 };
  // 获取请求数据
  // 此时请求的js对象已转为json字符串。因此需要转换回JS对象
  const data = c.data;
  const { number, password } = JSON.parse(data);

  // 模拟teacher
  if (number == "1001" && password == "1001") {
    return [
      200,
      resultVO,
      {
        role: TEACHER,
        token:
          "744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6",
      },
    ];
  }
  // 模拟主任
  if (number == "1002" && password == "1002") {
    return [
      200,
      resultVO,
      {
        role: DIRECTOR,
        token:
          "744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6",
      },
    ];
  }
  // 模拟admin
  if (number == "2002" && password == "2002") {
    return [
      200,
      resultVO,
      {
        role: ADMIN,
        token:
          "744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6",
      },
    ];
  }

  resultVO.code = 401;
  resultVO.message = "用户名密码错误";
  return [200, resultVO];
});

// 模拟请求携带token是否合法
mock.onGet("home").reply((c) => {
  const resultVO: ResultVO = { code: 200 };
  const auth = c.headers?.authorization;
  if (
    auth ==
    "744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6"
  ) {
    resultVO.code = 200;
    resultVO.data = { courses: [] };
    return [200, resultVO];
  }
  resultVO.code = 403;
  resultVO.message = "无权限";
  return [200, resultVO];
});
//模拟请求实验室列表  数组
//config是axios config
//返回一个数组[status, data, headers]
mock.onGet("LabLists").reply((c) => {
  return [
    200,
    {
      labLists: [
        {
          id: 1,
          number: "901",
          machine: "48",
          choice: true,
          description: "vscode、idea",
        },
        {
          id: 2,
          number: "902",
          machine: "120",
          choice: true,
          description: "非常好的实验室",
        },
        {
          id: 3,
          number: "903",
          machine: "48",
          choice: false,
          description: "vscode、idea",
        },
        {
          id: 4,
          number: "904",
          machine: "120",
          choice: true,
          description: "904实验室",
        },
        {
          id: 5,
          number: "905",
          machine: "77",
          choice: true,
          description: "905的实验室",
        },
      ],
    },
  ];
});
mock.onPost("updateLab").reply((c) => {
  const resultVO: ResultVO = { code: 200 };
  const data = c.data;
  const { id, number, machine, choice, description } = JSON.parse(data);
  const upd = {
    id: id,
    number: number,
    machine: machine,
    choice: choice,
    description: description,
  };
  const updateLabIn = updateLab(upd);
  resultVO.data = { updateLabIn };
  return [200, resultVO];
});
