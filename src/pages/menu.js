import Element from "../elementClass";

const content = document.querySelector(".content");

export default function loadMenu() {
  const menuElement = new Element("div")
    .addAttributes({ id: "menu-tab", class: "tab" })

    .addChild(new Element("h1").setInnerText("Our Daily Menu"))

    .addChild(
      new Element("div")
        .addAttributes({ class: "container-div", id: "menu-container" })

        .addChild(
          new Element("img").addAttributes({
            class: "div-child",
            id: "menu-img",
          })
        )

        .addChild(
          new Element("div")
            .addAttributes({ class: "div-child", id: "menu-child" })
            
            .addChild(new Element("h2").setInnerText("Fancy Sooshi"))
            .addChild(
              new Element("ul")
                .addAttributes({ class: "menu-list", id: "sushi-list" })
                .addChild(new Element("li").setInnerText("Philadelphia classic"))
                .addChild(new Element("li").setInnerText("Fusion"))
                .addChild(new Element("li").setInnerText("Tempura"))
                .addChild(new Element("li").setInnerText("Golden Dragon Roll"))
                .addChild(new Element("li").setInnerText("Maguro Dragon Roll"))
                .addChild(
                  new Element("li").setInnerText("Green Dragon Roll")
                )
            )

            .addChild(new Element("h2").setInnerText("Drinks"))
            .addChild(
              new Element("ul")
                .addAttributes({ class: "menu-list", id: "drinks-list" })
                .addChild(new Element("li").setInnerText("Mugi Shochu"))
                .addChild(new Element("li").setInnerText("Lemon Sour"))
                .addChild(new Element("li").setInnerText("Oolong Hai"))
                .addChild(new Element("li").setInnerText("Whiskey Highball"))
                .addChild(new Element("li").setInnerText("Umeshu"))
                .addChild(new Element("li").setInnerText("Atsukan"))
            )
        )
    );

  content.appendChild(menuElement.build());
}