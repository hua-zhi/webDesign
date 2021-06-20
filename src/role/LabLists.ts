import { Lab } from "./Menu";

const LabList: Lab[] = [
  {
    id: "1",
    number: "901",
    machine: "48",
    choice: true,
    description: "vscode、idea",
  },
  {
    id: "2",
    number: "902",
    machine: "120",
    choice: true,
    description: "非常好的实验室",
  },
  {
    id: "3",
    number: "903",
    machine: "48",
    choice: false,
    description: "vscode、idea",
  },
  {
    id: "4",
    number: "904",
    machine: "120",
    choice: true,
    description: "904实验室",
  },
  {
    id: "5",
    number: "905",
    machine: "77",
    choice: true,
    description: "905的实验室",
  },
];
export function LabLists() {
  return LabList;
}
export function updateLab(updLap: Lab) {
  LabList.forEach((u) => {
    if (u.id === updLap.id) {
      LabList.splice(LabList.indexOf(u), 1, updLap);
    }
  });
  return updLap;
}
export function deleteLab(del: string) {
  LabList.forEach((x) => {
    if (x.id == del) {
      LabList.splice(LabList.indexOf(x), 1);
    }
  });
}
