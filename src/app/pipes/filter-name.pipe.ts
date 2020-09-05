import { Pipe, PipeTransform } from "@angular/core";
import { Size } from "../types/size";

@Pipe({ name: "filterName" })
export default class FilterNamePipe implements PipeTransform {
  transform(value: Size): string {
    switch (value) {
      case Size.Small:
        return "Small";
      case Size.Medium:
        return "Medium";
      case Size.Large:
        return "Large";
    }
  }
}