import Element from "../elementClass";

const content = document.querySelector(".content");

export default function loadHome() {
    const homeElement = new Element("div")
      .addAttributes({ id: "home-tab", class: "tab" })

      .addChild(new Element("h1").setInnerText("Enjoy the best Sushi in Town!"))

      .addChild(
        new Element("img").addAttributes({ class: "tab-img", id: "home-img" })
      )

      .addChild(
        new Element("p")
          .addAttributes({ class: "blurb" })
          .setInnerText(
            "Did you know? Sushi is not originally Japanese, but it is a Japanese dish that has become popular around the world."
          )
      )

      .addChild(new Element("h2").setInnerText("Authentic Wasabi Is Expensive"))

      .addChild(
        new Element("p").setInnerText(
          "Yes, authentic wasabi can be expensive. The root of the wasabi plant is grated to create the paste, and because the plant is difficult to cultivate, the price of the real stuff can be high and it is hard to find.  You may be served fake wasabi without knowing."
        )
      );
  
    content.appendChild(homeElement.build());
  }
  