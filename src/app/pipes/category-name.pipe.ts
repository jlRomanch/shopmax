import { Pipe, PipeTransform } from "@angular/core";
import { Category } from "../types/category";

@Pipe({ name: "categoryName" })
export default class CategoryNamePipe implements PipeTransform {
  transform(value: Category): string {
    switch (value) {
      case Category.Men:
        return "Men";
      case Category.Women:
        return "Women";
      case Category.Children:
        return "Children";
    }
  }
}
