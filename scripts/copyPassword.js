const copyIcon = document.getElementById("copy-icon");
const passwordOutput = document.getElementById("password-output");

copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordOutput.value).then(() => {
        copyIcon.classList.remove("fa-clipboard");
        copyIcon.classList.add("fa-clipboard-check");
    });
});
