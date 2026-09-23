import { About } from "@/components/sections/about";
import { Categories } from "@/components/sections/categories";
import { FreshPicks } from "@/components/sections/fresh-picks";
import { Hero } from "@/components/sections/hero";
import { Visit } from "@/components/sections/visit";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { hasOwnPhoto } from "@/lib/format";
import { getCategories, getProducts, getStore, type Product } from "@/lib/store-api";

export default async function Home() {
  const [store, categories, products] = await Promise.all([
    getStore(),
    getCategories(),
    getProducts(),
  ]);

  // Only products photographed in the shop; the rest carry the generic stock
  // images seeded for the WhatsApp catalog and would look borrowed here.
  const shootable = products.filter((p) => hasOwnPhoto(p.image_url) && Number(p.current_stock) > 0);

  // One product per aisle, so the picks row spans the shop rather than showing
  // four kinds of fruit.
  const byCategory = new Map<number, Product>();
  for (const p of shootable) {
    if (!byCategory.has(p.category_id)) byCategory.set(p.category_id, p);
  }
  const picks = [...byCategory.values()].slice(0, 8);

  const pickIds = new Set(picks.map((p) => p.id));
  const rest = shootable.filter((p) => !pickIds.has(p.id));

  return (
    <>
      <Hero store={store} showcase={rest.slice(0, 3)} />
      <Categories categories={categories} />
      <FreshPicks products={picks} />
      <WhyChooseUs store={store} />
      <About
        store={store}
        categoryCount={categories.length}
        productCount={products.length}
        collage={rest.slice(3, 7)}
      />
      <Visit store={store} />
    </>
  );
}
