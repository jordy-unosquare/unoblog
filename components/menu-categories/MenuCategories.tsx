import React from "react";
import Link from "next/link";
import { getCategories } from "@/lib/data";

import styles from "./MenuCategories.module.css";

const MenuCategories = async () => {
  const categories = await getCategories();

  if (!categories.length) {
    return <div>404</div>;
  }

  return (
    <div className={styles.categoryList}>
      {categories.map((item) => (
        <Link
          href={`/blog?cat=${item.slug}`}
          key={item.id}
          className={`${styles.categoryItem}`}
          style={{ backgroundColor: item.color! }}
        >
          {item.title}
        </Link>
      ))
      }
    </div>
  );
};

export default MenuCategories;
