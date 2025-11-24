import Categories from "@/components/user/Categories";
import ContactUs from "@/components/user/ContactUs";
import Features from "@/components/user/Features";
import Hero from "@/components/user/Hero";
import HomeCommonProduct from "@/components/user/Home";
export default function Home() {
  return (
   <>
   <Hero/>
   <Categories/>
   <HomeCommonProduct />
   <ContactUs/>
   <Features/>
   </>
  );
}
