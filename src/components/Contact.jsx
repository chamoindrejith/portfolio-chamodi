"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon, Linkedin, Github, InfoIcon } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const contact = () => {
  const [result, setResult] = React.useState("");

  React.useEffect(() => {
    if (result && result !== "Sending....") {
      const timer = setTimeout(() => {
        setResult("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [result]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4410a400-b150-46c2-9d84-275d3d8670b7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="w-full px-5 sm:px-[10%] lg:px-[15%] mt-10 mb-10 py-16 md:py-10 scroll-mt-20 items-center justify-center"
    >
      <h4 className="text-center mb-2 text-lg geistMono text-gray-900 dark:text-gray-100">Get In Touch</h4>
      <h2 className="text-center text-5xl geistMono text-gray-900 dark:text-gray-100">
        I'd love to <span className="text-orange-500">hear from you!</span>
      </h2>
      <p className="text-center mt-4 text-gray-700 dark:text-gray-400">
        If you have any inquiries or just want to say hi, feel free to reach
        out!
      </p>

      <div className="w-full mt-10 flex flex-col items-center justify-center">
        <form
          className="w-full max-w-md md:max-w-2xl mx-auto mt-10 px-10"
          onSubmit={onSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500 dark:focus:border-orange-500"
                id="fname"
                name="fname"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500 dark:focus:border-orange-500"
                id="lname"
                name="lname"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500 dark:focus:border-orange-500"
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <textarea
                className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500 dark:focus:border-orange-500"
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="md:flex text-xs px-4 md:px-8 py-2.5 md:text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-400 rounded-full hover:bg-gray-800 hover:text-white hover:border-white hover:transition-all hover:duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
          {result && (
            <div className="text-center mt-4 text-sm text-gray-600 flex items-center justify-center animate-in fade-in duration-300">
              <div className="grid w-full max-w-md items-start gap-4">
                <Alert>
                  {result === "Form Submitted Successfully" ? (
                    <CheckCircle2Icon className="text-green-500" size={16} />
                  ) : (
                    <InfoIcon className="text-red-500" size={16} />
                  )}
                  <AlertTitle>{result}</AlertTitle>
                </Alert>
              </div>
            </div>
          )}
        </form>
      </div>
      <div className="w-full flex flex-wrap px-auto mt-20 gap-6 items-center justify-center">
       <div>
        <Link
          href="https://www.linkedin.com/in/chamodi-indrejith/"
          target="_blank"
          className="text-gray-700 dark:text-gray-300 hover:text-white transition-colors duration-300 mb-6 flex items-center gap-4 border-2 border-gray-700 dark:border-gray-400 rounded-md px-4 py-2 hover:border-orange-500 hover:bg-orange-500 hover:transition-all hover:duration-300"
        >
          <Linkedin size={24} />
          <p className="text-s">/chamodi-indrejith</p>
        </Link>
        <Link
          href="https://www.github.com/chamoindrejith"
          target="_blank"
          className="text-gray-700 dark:text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-4 border-2 border-gray-700 dark:border-gray-400 rounded-md px-4 py-2 hover:border-orange-500 hover:bg-orange-500 hover:transition-all hover:duration-300"
        >
          <Github size={24} />
          <p className="text-s">/chamoindrejith</p>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default contact;
