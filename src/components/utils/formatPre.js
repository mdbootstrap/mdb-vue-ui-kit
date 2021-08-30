export const formatPre = () => {
  const pre = document.querySelectorAll("pre");

  pre.forEach((el) => (el.innerText = el.innerHTML));

  pre.forEach(
    (el) =>
      (el.innerText = el.innerText
        .replace(/data-v-(.*?)=""/g, "")
        .replace(/=""/g, "")
        .replace(/" {2}>/g, '">')
        .replace(/ {2}>/g, ">")
        .trimEnd())
  );
};
