

console.log("booted...");


// helpers
const get = (name) => document.getElementById(name);


// business logic
get("file-upload").onsubmit = (formEvent) => {
  formEvent.preventDefault();
  const { files } = get("file-input");
  // files aren't true arrays, so we have to coerce it into being one
  Array.from(files).map((file) => {
    console.log(file);

    fetch("http://localhost:3000/api", {
      method: "POST",
      body: "TNIS IS SOME DATA"
    });
  });
};
