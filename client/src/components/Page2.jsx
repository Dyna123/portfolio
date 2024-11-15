import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const light = useRef(null);
  const codingQuotes = [
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Debugging is like being the detective in a crime movie where you are also the murderer. – Filipe Fortes",
    "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime. – Muhammad Waseem",
    "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie",
    "Code never lies, comments sometimes do. – Ron Jeffries",
    "The most damaging phrase in the language is, 'We’ve always done it this way.' – Grace Hopper",
    "It’s not a bug, it’s an undocumented feature. – Anonymous",
    "Walking on water and developing software from a specification are easy if both are frozen. – Edward V. Berard",
    "In programming, the hard part isn't solving problems, but deciding what problems to solve. – Paul Graham",
    "Programming is not about what you know; it's about what you can figure out. – Chris Pine",
    "The best way to get a project done faster is to start sooner. – Jim Highsmith",
    "Good code is its own best documentation. – Anne Lancaster",
    "There are only two hard things in computer science: cache invalidation and naming things. – Phil Karlton",
    "It's not that we spend five days a week looking for the best programming solution; we spend it looking for the best programming problem. – Anonymous",
    "The future of programming is more about collaboration and communication than it is about coding. – Anonymous",
    "The most important property of a program is whether it accomplishes the intention of its user. – C.A.R. Hoare",
    "Programmers are constantly in a state of uncertainty, and that's where they find their creativity. – John Maeda",
    "The best code is no code at all. – Jeff Atwood",
    "The code you write makes you a programmer, but the code you don’t write makes you a good programmer. – Anonymous",
    "You can't just write code that works. You have to write code that is easy to understand and easy to maintain. – Robert C. Martin",
    "Code is much like humor. When you have to explain it, it’s bad. – Anonymous",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Edsger Dijkstra",
    "There's a way to do it better—find it. – Thomas Edison",
    "The best part about programming is that you can create your own world. – Anonymous",
    "The code you write should be so simple that it can be understood by someone who has just started learning to code. – Anonymous",
    "Life is too short to write bad code. – Anonymous",
    "A good programmer is someone who always looks both ways before crossing a one-way street. – Doug Linder",
    "If you think your users are idiots, only idiots will use it. – Linus Torvalds",
    "In programming, the end is more important than the means. – Anonymous",
    "The goal of software development is to turn data into information and information into insight. – Anonymous",
    "There's no place like 127.0.0.1. – Anonymous",
    "Code should be written to be read by humans, and only incidentally by machines. – Anonymous",
    "The only way to learn is to do. – Anonymous",
    "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
    "A programming language is a tool that can be used to express ideas. – Anonymous",
    "It's not about the technology; it's about the people. – Anonymous",
    "Good programmers know the importance of quality code, but great programmers know the importance of quality time. – Anonymous",
    "An algorithm must be seen to be believed. – Donald Knuth",
    "Code is poetry. – Matt Mullenweg",
    "Sometimes the best solution to a problem is to just let it go. – Anonymous",
    "It’s not enough to write code; it must also be tested and verified. – Anonymous",
    "The real world is where the bugs are. – Anonymous",
    "Code is like a painting. You start with a blank canvas and slowly bring your ideas to life. – Anonymous",
    "Programming is the art of telling another human being what one wants the computer to do. – Donald Knuth",
    "You can’t just throw code at a problem and hope it works. You need to think about what you’re doing. – Anonymous",
    "The best programmers are not the ones who can code the fastest, but the ones who can think the clearest. – Anonymous",
    "Code is the language of the future. – Anonymous",
    "You learn to write code by writing code. – Anonymous",
    "Good software is like good wine; it takes time to develop. – Anonymous",
    "It’s easier to change a program’s source code than to change its user. – Anonymous",
    "When in doubt, use brute force. – Ken Thompson",
    "To iterate is human; to recurse, divine. – L. Peter Deutsch",
    "Software is a great combination between artistry and engineering. – Bill Gates",
    "The sooner you start to code, the longer the program will take. – Alan Perlis",
    "Programming is the process of creating a set of instructions that tell a computer how to perform a task. – Anonymous",
    "You can't make everyone happy, but you can make the right people happy. – Anonymous",
    "Quality is more important than quantity. – Anonymous",
    "The best code is the code you don’t have to write. – Anonymous",
    "You can’t have everything; where would you put it? – Steven Wright",
    "If at first you don’t succeed, call it version 1.0. – Anonymous",
    "When you’re stuck, take a break. The answer often comes to you when you’re not looking for it. – Anonymous",
    "The great thing about software is that you can build and rebuild. – Anonymous",
    "Software development is a team sport. – Anonymous",
    "There's no right way to do the wrong thing. – Anonymous",
    "To be a successful programmer, you need a solid understanding of algorithms and data structures. – Anonymous",
    "The key to great software is a great team. – Anonymous",
    "A user interface is like a joke. If you have to explain it, it’s not that good. – Anonymous",
    "You don’t have to be a genius to write code; you just need to be willing to learn. – Anonymous",
    "In programming, there are no shortcuts. – Anonymous",
    "If you don't like it, change it. If you can't change it, change your attitude. – Anonymous",
    "The best way to predict the future is to invent it. – Alan Kay",
    "A good programmer is someone who thinks logically and understands problems deeply. – Anonymous",
    "Code is a lot like poetry: it has structure, it has rhythm, and it tells a story. – Anonymous",
    "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
    "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. – Stephen Hawking",
    "Good programming is not about how much you know; it’s about how much you understand. – Anonymous",
    "The code you write should be as simple as possible, but no simpler. – Albert Einstein",
    "Sometimes, the best code is the code that doesn't need to be written. – Anonymous",
    "In programming, it’s important to find the right balance between what’s easy to implement and what’s easy to maintain. – Anonymous",
    "The best time to start programming was yesterday. The second best time is now. – Anonymous",
    "A codebase is like a living organism; it needs care and maintenance. – Anonymous",
    "To err is human; to really foul things up requires a computer. – Anonymous",
    "A program is never finished; it’s just released. – Anonymous",
    "The best way to become a better programmer is to read other people's code. – Anonymous",
    "There are no rules, just tools. – Anonymous",
    "Programming is the art of problem-solving. – Anonymous",
    "The code you write is a reflection of who you are. – Anonymous",
    "Every great programmer you know got there by solving problems they were unqualified to solve until they actually did it. – Anonymous",
    "When you write code, you're not just writing for machines, you're writing for people. – Anonymous",
    "Don't worry if it doesn't work right. If everything did, you’d be out of a job. – Anonymous",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Software is like sex; it’s better when it’s free. – Linus Torvalds",
    "Coding is a way of thinking; it's a way of solving problems. – Anonymous",
    "The world is full of abstract ideas, and code is a way",

  ];

  const random=()=>{
    console.log("This is the random number",Math.floor(Math.random()*100));
    return Math.floor(Math.random()*10);
  }
  console.log(random());
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(light.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: light.current,
          scroller: "body",
          start: "top 20%",
          end: "top 40%",
          scrub: 2,
        },
      });
    });

    return () => ctx.revert(); // Clean up on component unmount
  }, []);

  return (
    <div className='h-screen w-screen bg-black '>
      <div className='h-full w-full bg-[url("/spotLight3.png")] bg-no-repeat bg-center flex items-center justify-center ' ref={light}>
        <div className='h-[60%] w-1/2 flex items-center  text-white bg-[url("/page2Hands.png")] bg-cover bg-top  bg-no-repeat '>
          <p className='text-3xl mb-12 opacity-35 text-center'>{codingQuotes[random()]}</p>
        </div>
        <div id='socialMediaContainer' className='h-52 w-20 absolute left-0 flex flex-col gap-10 text-cyan-900 text-3xl items-center justify-center '>
          <Link to="https://www.instagram.com/aye_sambhav/" target='_blank'><FaInstagram className='cursor-pointer hover:text-zinc-400 transition-all duration-100' /></Link>
          <Link to="https://www.linkedin.com/in/sambhav-sharma-93b589251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin className='cursor-pointer hover:text-zinc-400 transition-all duration-100' /></Link>
          <Link to="https://github.com/Dyna123" target='_blank'><FaGithub className='cursor-pointer hover:text-zinc-400 transition-all duration-100' /></Link>
        </div>
      </div>
    </div>
  );
};

export default Page2;
