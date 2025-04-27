interface Student {
  name: string;
  age: number;
  marks: number | "Fail";
  isPassed: boolean;
  grade?: string;
}
const studentInfo: Student = {
  name: "Tayyab",
  age: 20,
  marks: 717,
  isPassed: true
};
