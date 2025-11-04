import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  likes: number;
  link: string;
  passwordProtected?: boolean;
}

const PortfolioItem = ({ title, category, image, likes, link, passwordProtected }: PortfolioItemProps) => {
  return (
    <Card className="bg-dark border-none overflow-hidden rounded-xl group">
      <div className="relative">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Link href={link} target="_blank" className="text-white hover:text-pink transition-colors">
            <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          </Link>
         
        </div>

        <div className="absolute top-5 left-5">
          <Badge className="bg-dark/80 text-white hover:bg-dark/90 backdrop-blur-sm">
            {category}
          </Badge>
        </div>

        <div className="absolute top-5 right-5">
          <Badge className="bg-dark/80 text-white hover:bg-dark/90 backdrop-blur-sm">
            {likes}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">
          <Link href={link} target="_blank" className="text-white hover:text-pink transition-colors">
            {title}
          </Link>
        </h3>

       
      </CardContent>
    </Card>
  );
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-sm text-zinc-400 mb-3 inline-block">Visit my Project and keep your feedback</span>
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient">My Project </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<PortfolioItem
  title="Trend Dashboard"
  category="Web Application Click Here"
  image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
  likes={1245}
  link="https://trand-dashboard-frontend.vercel.app/dashboard"
  passwordProtected={false}
/>

<PortfolioItem
  title="SwiftRide"
  category="Web Application Click Here"
  image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
  likes={1103}
  link="https://swiftride-phi.vercel.app/"
  passwordProtected={false}
/>

<PortfolioItem
  title="ShopVista"
  category="E-Commerce Click Here"
  image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
  likes={987}
  link="https://shopvista-eight.vercel.app/"
  passwordProtected={false}
/>

<PortfolioItem
  title="RecipeHub"
  category="Web Application Click Here"
  image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
  likes={1024}
  link="https://recipehub-three.vercel.app/"
  passwordProtected={false}
/>

<PortfolioItem
  title="Task Management (Frontend)"
  category="Productivity Click Here"
  image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
  likes={880}
  link="https://task-management-frontend-mauve-two.vercel.app/"
  passwordProtected={false}
/>

<PortfolioItem
  title="Task Management (Backend)"
  category="Productivity Click Here"
  image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
  likes={935}
  link="https://task-management-pi-pearl.vercel.app"
  passwordProtected={false}
/>

<PortfolioItem
  title="Gitex Driver User App"
  category="Web Application Click Here"
  image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
  likes={1168}
  link="https://gitexdriver.vercel.app/"
  passwordProtected={false}
/>

<PortfolioItem
  title="Cara Mart (Online Marketplace)"
  category="E-Commerce Click Here"
  image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
  likes={1200}
  link="https://cart-mart.netlify.app/login.html"
  passwordProtected={false}
/>

        </div>
      </div>
    </section>
  );
}
