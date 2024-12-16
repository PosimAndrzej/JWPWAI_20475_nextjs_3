import Link from "next/link";
import MealsGrid from "../components/meals/meal-grid";
import classes from './page.module.css';

export default function meals() {
    return (
      <>
        <header className={classes.header}>
          <h1>
            Delicious meals, created{' '}
            <span className={classes.highlight}>by you</span>
          </h1>
          <p>
            Choose your favorite recipe and cook it yourself. It is easy and fun!
          </p>
          <p className={classes.cta}>
            <Link href="meals/share">
              Share Your Favorite Recipe
            </Link>
          </p>
        </header>
        <main>
          <MealsGrid meals={[]} />
        </main>
      </>
      
    );
  }
  