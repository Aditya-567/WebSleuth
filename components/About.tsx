"use client";

const About = () => {
  return (
    <div className="flex flex-row px-20 pt-20 ">
      <img src="assets/images/about.png" height={400} width={500}></img>

      <div className="founder flex-1 px-12 justify-content">
        <h1 className="head-text flex items-center">
          <span className="text-indigo-500">ABOUT&nbsp;</span>
          <span>WebSleuth</span>
          <img src="assets/icons/logo.svg" height={50} width={60} />
        </h1>
        <p className="mt-6 justify-content pr-20">
          At WebSleuth, we understand the frustration of seeing a product's
          price fluctuate on Amazon, only to wonder if you've missed out on a
          better deal. That's why we created a solution: a powerful yet
          user-friendly price tracking application designed to empower consumers
          like you.
        </p>
        <p className="mt-6 justify-content pr-20 flex-1">
          Our mission is simple: to help you make informed purchasing decisions
          by providing real-time price tracking and historical data for products
          on Amazon. We believe that every consumer deserves access to accurate
          pricing information, enabling them to save money and shop confidently.
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/aditya-kumar-820a8b227/"
              target="_blank"
            >
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
            </a>
            <a href="https://leetcode.com/Aditya000567/" target="_blank">
              <img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=leetcode&logoColor=yellow" />
            </a>
          </div>
        </p>

        {/* Other content can go here */}
      </div>
    </div>
  );
};
export default About;
