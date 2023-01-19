

console.log("booted...");


// helpers
const get = (name) => document.getElementById(name);


// business logic
const form = get("file-upload");

form.onsubmit = (formEvent) => {
  formEvent.preventDefault();
  const {files} = get("file-input");
  console.log("file is");
  console.log(files);
};
