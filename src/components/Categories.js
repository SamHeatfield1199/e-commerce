import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import {  Grid } from "@material-ui/core";


const Categories = () => {
  return (
    <Grid container justify="center" spacing={1}>
      {categories.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
          <CategoryItem item={item} key={item.id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
