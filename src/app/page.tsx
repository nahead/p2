import NewArivel from "@/components/arrivals";
import Hero from "@/components/Herro";
import FontShowcase from "@/components/Retangle";
import BestSelling from "@/components/Selling";
import Products from "./product/page";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/Customer";
import Pro_Detail from "./product/[id]/page";
import Top_sell from "./product/sell";





export default function Home() {
  return (
 <div>
 
 <Hero/>
    <FontShowcase/>
     <NewArivel/>
    <BestSelling/> 
    <Products/>
    <Top_sell/>
    <Dress/>
    <CustomerCarousel/>
 </div>
  );
}
