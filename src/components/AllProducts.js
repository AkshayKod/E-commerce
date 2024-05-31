import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link, useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Alert, Box, TextField } from "@mui/material";

function AllProducts() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      setProducts(res.data.products);
    })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  let filteredData = search ? products.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())) : products;




  return (
    <div style={{ padding: 10 }}>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField label={"Search products here"} name="searchbar" onChange={(e) => setSearch(e.target.value)} />
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
      >


        {
          filteredData.length>0 ?  
        
          filteredData?.map((product, i) => (
            <Card sx={{ maxWidth: 345, background: '#EBE3D5' }} key={i} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                width="200"
                image={product.thumbnail}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="h6">₹{product.price} </Typography>

                <Typography
                  variant="h6"
                  style={{ textAlign: "end", width: "100%" }}
                >
                  {product.brand}
                </Typography>
              </CardActions>
            </Card>))
          :
          <Alert severity="warning" variant="outlined">search valid products " {search} " not found</Alert> 
          }
      </Grid>
    </div>
  );
}

export default AllProducts;