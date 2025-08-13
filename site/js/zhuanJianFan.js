function createZhuanJianFanToggle(containerId, contentA, contentB) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const content = document.createElement("div");
    content.innerHTML = contentA;
    content.style.fontSize = "1.1em";

    const button = document.createElement("button");
    button.textContent = "繁体转简体";
    button.style.padding = "8px";
    button.style.fontSize = "1em";
    button.style.marginLeft = "8px";

    let showingA = true;
    button.addEventListener("click", function () {
        content.innerHTML = showingA ? contentB : contentA;
        button.textContent = showingA ? "簡體轉繁體" : "繁体转简体";
        showingA = !showingA;
    });

    container.appendChild(content);
    container.appendChild(button);
}
