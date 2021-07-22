export default function(nodes){
    return new Promise((resolve) => {
        nodes
        .forEach((identiefier) => {
            var img = new Image(),
                node = typeof identiefier === "string" ? document.querySelector(identiefier) : identiefier,
                src = node.getAttribute("data-src");
                img.onload = () => {
                    node.src = src;
                };
                img.src = src;
        });
        resolve();
    })
};