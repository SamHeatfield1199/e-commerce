import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  row: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
  },
});

const Categories = () => {
  const classes = useStyles();
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
