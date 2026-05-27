const passwords = ["abcde", "12345", "pass@123", "secret!"];

const hasStrongPassword = passwords.some(pwd => {
  const hasNumber = /[0-9]/.test(pwd);
  const hasSpecial = /[!@#$%^&*]/.test(pwd);
  return hasNumber && hasSpecial;
 })
console.log(hasStrongPassword);


const projects = [
  { id: 1, status: "completed" },
  { id: 2, status: "delayed" },
  { id: 3, status: "in-progress" }
];

const isAnyProjectDelayed = projects.some(proj => proj.status === "delayed");

console.log(isAnyProjectDelayed);
