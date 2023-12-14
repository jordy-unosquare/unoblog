

import CardList from "./components/card-list/CardList";
import CategoryList from "./components/category-list/CategoryList";
import Featured from "./components/featured/Featured";
import Menu from "./components/menu/Menu";
import styles from "./page.module.css";

interface HomeProps {
  searchParams: {
    cat: string;
    page: string;
    limit: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const cat = searchParams.cat || "";
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 4;

  return (
    <main>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} cat={cat} limit={limit} />
        <Menu />
      </div>
    </main>
  );
}
