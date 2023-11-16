import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Our experience working with this web developer has been exceptional. They demonstrated a keen understanding of our requirements, delivering a website that not only meets but exceeds our expectations. Their attention to detail, timely communication, and technical proficiency make them a valuable partner in web development. We highly recommend their services.",
    },
    {
      img: profilePic2,
      review:
        "Exceptional service from start to finish! This web developer brought our ideas to life with a user-friendly and visually impressive website. Their responsiveness, flexibility, and ability to exceed expectations make them a top choice for any web development project. Couldn't be happier with the results.",
    },
    {
      img: profilePic3,
      review:
        "Our project with this web developer was a true collaboration. They exhibited a deep understanding of our business needs, delivering a website that is not only visually appealing but also highly functional. Their professionalism and dedication to quality make them a go-to choice for web development..",
    },
    {
      img: profilePic4,
      review:
        "Working with this web developer was a fantastic experience. They translated our vision into a stunning website, demonstrating a perfect blend of creativity and technical expertise. Timely communication and a commitment to excellence set them apart. Highly satisfied with the outcome!.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
