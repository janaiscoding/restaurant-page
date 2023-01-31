import Element from "../elementClass";

const content = document.querySelector("#content");

export default function loadContact() {
    const contactElement = new Element("div")
      .addAttributes({ id: "contact-tab", class: "tab" })

      .addChild(new Element("h1").setInnerText("Contact Us"))

      .addChild(
        new Element("div")
          .addAttributes({
            class: "container-div",
            id: "contact-container",
          })

          .addChild(
            new Element("div")
              .addAttributes({
                class: "div-child",
                id: "contact-child",
              })
              .addChild(
                new Element("h3")
                  .addAttributes({ id: "contact-h2" })
                  .setInnerText("Order delicious sooshi from us")
              )
              .addChild(
                new Element("ul").addChild(
                  new Element("p")
                    .addAttributes({ id: "contact-about-p" })
                    .setInnerText(
                      "In only a few minutes, one of our riders will deliver you sushi to enjoy wherever you are."
                    )
                )
              )
              .addChild(
                new Element("h3")
                  .addAttributes({ id: "contact-h2" })
                  .setInnerText("Our Hours")
              )
              .addChild(
                new Element("p")
                  .addAttributes({ id: "contact-about-p" })
                  .setInnerText("We are open 24 hours!")
              )
              .addChild(
                new Element("h3")
                  .addAttributes({ id: "contact-h2" })
                  .setInnerText("Phone")
              )
              .addChild(
                new Element("p")
                  .addAttributes({ id: "contact-about-p" })
                  .setInnerText("123-456-789")
              )
              .addChild(
                new Element("h3")
                  .addAttributes({ id: "contact-h2" })
                  .setInnerText("Email")
              )
              .addChild(
                new Element("p")
                  .addAttributes({ id: "contact-about-p" })
                  .setInnerText("sooshi@sooshi.com")
              )
          )
          .addChild(
            new Element("div")
              .addAttributes({
                class: "div-child",
                id: "contact-child",
              })
              .addChild(
                new Element("img").addAttributes({
                  class: "tab-img",
                  id: "contact-img",
                })
              )
              .addChild(
                new Element("h3")
                  .addAttributes({ id: "contact-h2" })
                  .setInnerText("Location")
              )
              .addChild(
                new Element("p")
                  .addAttributes({ id: "contact-about-p" })
                  .setInnerText("We are.... nearby.")
              )
          )
      );
    content.appendChild(contactElement.build());
  }