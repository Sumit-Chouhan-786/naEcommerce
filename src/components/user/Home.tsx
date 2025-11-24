// Home.tsx
import HomeCommonProduct from "./HomeCommonProduct";
import { categoriesData } from "../../utils/helpers.js";

export default function Home() {
  return (
    <div>
      {categoriesData.map((item) => (
        <HomeCommonProduct
          key={item.id}
          title={item.title}
          products={item.products}
        />
      ))}
    </div>
  );
}
