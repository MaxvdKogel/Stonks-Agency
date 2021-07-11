const antiRag = {
    run: function(targets) {
        targets.forEach(target => {

            if(typeof document.querySelector(target) === "undefined") return console.error("Anti Ragging error: Target '" + target + "' could not be found");
    
            var el = document.querySelector(target),
                max_line_length = el.getBoundingClientRect().width,
                font_size = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size')),
                font_weight = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-weight')),
                entities_raw = String(el.innerHTML).split(" "),
                total_entities = entities_raw.length,
                entities = [],
                grid = [];
    
            entities_raw.forEach((inner, i) => {
                if(inner.search(/<em|<span/) > -1) {
                    entities_raw[i] = entities_raw[i] + " " + entities_raw[i + 1];
                    entities_raw[i + 1] = "";
                }
            });
    
            entities_raw = entities_raw.filter(n => n);

            entities_raw.forEach((entity, i) => {
                entities.push({
                    i,
                    element: {
                        type: entity.search(/em/) > -1 ? "em" : "span",
                        classList: (entity.search("class=") > -1) ? entity.split("class=")[1].split('\"')[1] : null,
                        text: (entity.search("class=") > -1) ? entity.split("class=")[1].split('\"')[2].split("</")[0].replace(">", "") : entity,
                        html: function() {
                            var el = document.createElement(this.type);
                                el.appendChild(document.createTextNode(this.text));
                                el.innerHTML += "&nbsp;";
                                el.style.fontSize = font_size + "px";
                                el.style.fontWeight = font_weight;
                                el.setAttribute("data-id", i);
                                (this.classList != null) && el.classList.add(...this.classList.split(" "));
    
                            return el;
                        },
                        width: function() {
                            var clone = this.html(),
                                id = "_" + Math.round(Math.random() * 100000);
                                clone.classList.add(id, "hide-entity");
                                document.body.appendChild(clone);
    
                            var value = document.querySelector("." + id).getBoundingClientRect().width;
                                clone.remove();
    
                            return value;
                        }
                    }
                })
            });

            var track = 0,
                track_arr = [];
    
            entities.forEach((entity, i) => {

                console.log(entities[i].element.width());

                if((track + entities[i].element.width()) < max_line_length) {
                    track += entities[i].element.width();
                    track_arr.push(entities[i].element);

                    if(i == (entities.length - 1)) grid.push(track_arr);

                    return;
                } else {
                    track = 0;
                    track += entities[i].element.width();
    
                    grid.push(track_arr);
                    track_arr = [];
    
                    track_arr.push(entities[i].element);
    
                    if(i == (entities.length - 1)) grid.push(track_arr);
    
                    return;
                }
            });

            if(grid.length > 1 && grid[grid.length - 1].length < 2) {
                grid[grid.length - 1].unshift(grid[grid.length - 2].pop());
            }
    
            el.innerHTML = "";

            grid.forEach(line => {
                line.forEach((entity, i) => (
                    el.appendChild(entity.html()),
                    // (i < line.length - 1) && (el.innerHTML += "&nbsp;"),
                    (i == line.length - 1) && (el.innerHTML += "<br>")
                ));
            });

            console.log(grid);
        });
    }
}

export default antiRag;