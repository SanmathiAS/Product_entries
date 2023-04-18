import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import productDetails from "../productDetails.json";

interface Product {
  productId: Number;
  productName: String;
  productCode: String;
  releaseDate: String;
  description: String;
}

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  public productsDetails: Product[] = productDetails;
  public fetchProductData: undefined | Product;

  ngOnInit() {
    let id = +this.route.snapshot.params["id"];
    this.findData(id);
  }
  findData(id) {
    this.fetchProductData = this.productsDetails.find((i) => i.productId === id);

    if (typeof this.fetchProductData === "undefined") {
      return null;
    }

    return this.fetchProductData;
  }
}
