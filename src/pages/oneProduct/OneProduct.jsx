import React from "react";
import "./oneProduct.css";
import Room from "../home/products/1.mp4";
import Floor from "../home/products/2.mp4";
import Globe from "../home/products/3.mp4";
import P1 from "../home/products/4.mp4";

import { useParams } from "react-router-dom";

const OneProduct = () => {
  const products = {
    room: {
      title: "Immersive Room - Pixel Pitch P1.8 Immersive Experience",
      about:
        "At BritePixl, we bring cutting-edge visual solutions with our Pixel Pitch P1.8 Immersive Room, designed to transform how audiences engage with digital content. This state-of-the-art LED display screen offers crystal-clear resolution, ensuring every detail is visible. Perfect for creating a fully immersive environment, whether it's for corporate presentations, interactive exhibits, or entertainment venues.",
      content: [
        {
          subTitle: "Unparalleled Visual Clarity",
          subContent:
            "The P1.8 LED screen boasts an ultra-fine pixel pitch, making it ideal for high-definition indoor environments. With this level of LED screen precision, you can achieve vivid colors, sharper images, and a seamless display across the entire room. Whether used as a backdrop or an interactive display, the P1.8 immersive room ensures an unforgettable visual experience.",
        },
        {
          subTitle: "Perfect for Indoor LED Applications",
          subContent:
            "This immersive solution is suited for a variety of indoor LED screen applications. From event stages and corporate environments to digital art exhibits, the Pixel Pitch P1.8 LED display offers unmatched flexibility. Our indoor LED screens are designed for maximum engagement, providing an innovative way to deliver your message.",
        },
        {
          subTitle: "Flexible and Customizable LED Display Solutions",
          subContent:
            "At BritePixl, we understand that every project is unique, which is why our immersive room solutions can be tailored to fit your specific needs. Whether you need a customized LED screen for large-scale indoor environments or a more compact immersive room for smaller setups, our LED display experts can design a solution that works for you.",
        },
        {
          subTitle: "The Future of Immersive Technology",
          subContent:
            "With our P1.8 LED screens, experience the next level of visual storytelling. The combination of high-resolution LED panels and flexible screen technology ensures that our immersive room solutions are perfect for any industry looking to captivate their audience. Whether it's for advertising, corporate communications, or entertainment, this immersive LED display provides a dynamic, 360-degree visual experience like no other.",
        },
        {
          subTitle: "Why Choose BritePixl?",
          subContent:
            "We are one of the leading LED screen suppliers in Dubai, offering transparent LED screens, flexible LED displays, and customized LED screens to meet diverse client needs. Our P1.8 immersive room is just one example of how we push the boundaries of visual innovation. For LED screen rentals, indoor or outdoor LED display screens, or any other LED screen solution, trust BritePixl to deliver the best.",
        },
      ],
      video: Room,
    },
    globe: {
      title: "3 Meter Globe - Custom Modules 600 to 650 nits",
      about:
        "At BritePixl, we introduce the 3 Meter Globe, a cutting-edge visual solution featuring custom LED modules with brightness levels ranging from 600 to 650 nits. This product is perfect for creating immersive visual displays in a variety of environments, including retail spaces, corporate events, and exhibitions.",
      content: [
        {
          subTitle: "Superior Brightness and Clarity",
          subContent:
            "The 3 Meter Globe delivers exceptional visual performance, with its high-brightness LED modules ensuring that every detail is visible, even in bright indoor settings. With a brightness range of 600 to 650 nits, this LED display screen offers crisp, clear visuals that captivate any audience, making it the ideal solution for large-scale digital installations.",
        },
        {
          subTitle: "Customized LED Modules for Flexibility",
          subContent:
            "This globe display is designed with custom modules that allow flexibility in installation and content presentation. Whether you need a bespoke display for a specific event or a unique LED installation for permanent setups, the 3 Meter Globe can be tailored to fit your exact requirements.",
        },
        {
          subTitle: "Versatile Visual Solutions",
          subContent:
            "The 3 Meter Globe is not only visually stunning but also highly versatile. It can be used for 360-degree visual displays, interactive exhibits, or as a striking digital centerpiece for events. With its LED technology optimized for clarity and brightness, it is the perfect choice for those looking to create an unforgettable visual experience.",
        },
        {
          subTitle: "Why Choose BritePixl?",
          subContent:
            "At BritePixl, we are dedicated to providing top-tier LED display screens and customized visual solutions. As one of the leading LED screen suppliers in Dubai, we offer a range of products, including transparent LED screens, customized LED modules, and more. The 3 Meter Globe is just one example of how we push the boundaries of visual innovation to help our clients stand out in any environment.",
        },
      ],
      video: Globe,
    },
    floor: {
      title: "Interactive Floor P3.91 500*500 with Built-in Sensors",
      about:
        "At BritePixl, we offer the innovative Interactive Floor P3.91, a high-performance LED display solution designed for events and exhibitions. This interactive floor features 500x500 mm panels with built-in sensors that respond to movement, creating an immersive and engaging experience for attendees. It’s perfect for venues looking to add a dynamic touch to their digital installations.",
      content: [
        {
          subTitle: "Engage Audiences with Interactive LED Floors",
          subContent:
            "The P3.91 interactive floor is equipped with sensor technology that detects and reacts to movement, allowing for real-time interaction with the display. This makes it an ideal solution for exhibitions, corporate events, retail environments, and even stages. Whether you want to create a unique visual experience or an interactive exhibit, this LED floor display enhances audience engagement and immersion.",
        },
        {
          subTitle: "High-Definition Display with P3.91 Pixel Pitch",
          subContent:
            "Featuring a P3.91 pixel pitch, the interactive floor delivers clear, high-resolution visuals, ensuring that content displayed on the floor is sharp and vibrant. With a 500x500 mm modular design, the floor can be easily customized to fit a variety of event spaces, making it perfect for both large and small installations. The display’s durable build also ensures it can handle high foot traffic without compromising on performance.",
        },
        {
          subTitle: "Built-In Sensors for Real-Time Interaction",
          subContent:
            "One of the standout features of the Interactive Floor P3.91 is its built-in sensors, which allow the floor to respond to the movements of people walking or interacting with it. This feature makes the floor ideal for interactive exhibits, gaming zones, and live event stages, where real-time audience participation can be a key part of the experience. The combination of interactive technology and high-quality LED panels provides an unforgettable experience for attendees.",
        },
        {
          subTitle: "Ideal for Events and Exhibitions",
          subContent:
            "With its durable design and interactive capabilities, the Interactive Floor P3.91 is perfect for a wide range of applications, including corporate events, trade shows, art exhibitions, and concerts. The floor’s modular build allows for flexibility in setup, while its high-definition display ensures that visuals remain sharp and engaging throughout the event.",
        },
        {
          subTitle: "Why Choose BritePixl?",
          subContent:
            "As a leading provider of LED display solutions in Dubai, BritePixl offers top-quality products such as the Interactive Floor P3.91 to enhance your event or exhibition. Our interactive floor is just one example of how we bring innovative technology to life, providing customized LED solutions that meet your specific needs. From transparent LED screens to interactive LED displays, we are committed to delivering exceptional visual experiences.",
        },
      ],
      video: Floor,
    },
    p1: {
      title:
        "P1.2 GOB Panel - 640mm/480mm, Brightness 700 to 900 nits, Indoor Use",
      about:
        "Introducing the P1.2 GOB Panel from BritePixl, a premium-grade indoor LED display panel designed to deliver exceptional visual clarity and durability. With a P1.2 pixel pitch and GOB (Glue on Board) technology, this panel is perfect for high-definition indoor displays in settings like control rooms, conference halls, retail spaces, and more. The panel size is 640mm by 480mm, offering flexibility in installation while maintaining brightness levels of 700 to 900 nits for optimal visibility.",
      content: [
        {
          subTitle: "Unmatched Durability with GOB Technology",
          subContent:
            "The P1.2 GOB Panel is built using Glue on Board (GOB) technology, which offers superior protection for the LED modules, making the panel resistant to moisture, dust, and physical impact. This makes the GOB panel an ideal choice for environments that demand long-lasting durability, while ensuring smooth and seamless visual performance. Whether it’s a busy retail space or a high-traffic event venue, the P1.2 GOB Panel is designed to withstand the challenges of indoor use without compromising on quality.",
        },
        {
          subTitle: "Crystal Clear Visuals with P1.2 Pixel Pitch",
          subContent:
            "Featuring a P1.2 pixel pitch, the panel ensures ultra-high resolution, delivering crisp, detailed visuals that are perfect for close-viewing indoor settings. This level of clarity is essential for applications such as control rooms, digital advertising, and corporate presentations, where precise and sharp imagery is critical. The P1.2 GOB Panel guarantees that every detail is visible, even in brightly lit indoor environments, thanks to its impressive 700 to 900 nits of brightness.",
        },
        {
          subTitle: "Optimal Size and Flexibility",
          subContent:
            "The 640mm x 480mm panel size offers flexibility in designing custom indoor displays. Whether you need a large video wall or a more compact installation, the P1.2 GOB Panel is highly adaptable, making it suitable for a wide range of indoor setups. Its sleek design and lightweight build ensure that installation is both easy and efficient, while the GOB technology provides additional durability for long-term use.",
        },
        {
          subTitle: "Brightness and Performance for Indoor Use",
          subContent:
            "With a brightness range of 700 to 900 nits, the P1.2 GOB Panel is optimized for indoor environments, ensuring that visuals remain vibrant and clear even in well-lit spaces. This makes the panel an ideal solution for venues like shopping malls, corporate offices, conference centers, and broadcast studios, where clear, high-quality visuals are a must.",
        },
        {
          subTitle: "Why Choose BritePixl?",
          subContent:
            "At BritePixl, we specialize in providing cutting-edge LED display solutions tailored to meet your specific needs. Our P1.2 GOB Panel represents the latest in LED technology, combining durability, high resolution, and brightness for unparalleled indoor performance. Whether you’re looking for a customized LED screen or a high-definition video wall, we have the expertise and technology to deliver exceptional visual solutions. As one of the leading LED screen suppliers in Dubai, we are dedicated to helping businesses create stunning indoor displays.",
        },
      ],
      video: P1,
    },
  };
  const { id } = useParams();
  return (
    <div className="on_product_page_section">
      <div>
        <div className="one_product_video_slider">
          <video muted src={products[id].video} autoPlay loop />
        </div>
      </div>
      <div>
        <div className="one_product_content">
          <h1>{products[id].title}</h1>
          <p>{products[id].about}</p>
          <div className="one_product_content_list">
            {products[id].content.map((item, index) => (
              <div key={index}>
                <h2>{item.subTitle}</h2>
                <p>{item.subContent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
