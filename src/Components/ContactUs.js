import React from "react";

const ContactUs = () => {
  return (
    <div class="contactForm">
      <form
        action="https://formsubmit.co/mehuljain0503@gmail.com"
        method="POST"
      >
        Want to Hire ME,
        <br></br>
        Drop your Email Below!
        <div class="mb-3">
          <label for="clientEmail" class="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="clientEmail"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="clientPhone" class="form-label">
            Phone
          </label>
          <input
            name="phone"
            type="number"
            class="form-control"
            id="clientPhone"
            placeholder="1234567890"
          />
        </div>
        <div id="emailHelp" class="form-text">
          (We'll never share your Email and Phone with anyone else.)
        </div>
        <div class="mb-3" id="form-check">
          <input
            name="checkbox"
            type="checkbox"
            class="form-check-input"
            id="isClient"
          />
          <label class="form-check-label" for="isClient">
            Want to Work with me
          </label>
        </div>
        <div class="btn">
          <button type="submit" class="btn">
            Submit
          </button>
        </div>
      </form>
      <div class="line1"></div>
      <div class="social">
        Contact ME at my Socials
        <a href="https://www.instagram.com/mehuljain0503/" target="_blank">
          <i class="fa-solid fa-envelope" style={{color: "#444444"}}></i>
          mehuljain0503@gmail.com
        </a>
        <a href="https://www.instagram.com/mehuljain0503/" target="_blank">
          <i class="fa-brands fa-instagram" style={{color: "#444444"}}></i>
          mehuljain0503
        </a>
        <a
          href="https://www.linkedin.com/in/mehul-jain-b88254223/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin" style={{color: "#444444"}}></i>Mehul Jain
        </a>
        <a href="#" target="_blank">
          <i class="fa-solid fa-phone" style={{color: "#444444"}}></i>+91 9664439824
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
