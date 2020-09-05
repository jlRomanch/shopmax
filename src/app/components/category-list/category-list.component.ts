import { Component, OnInit } from '@angular/core';
import { ALL_CATEGORIES, Category } from '../../types/category';

@Component({
    selector: 'category-list',
    templateUrl: 'category-list.component.html',
    styleUrls: ['./category-list.component.scss'],
})

export default class CategoryList {
    categories: Category[] = ALL_CATEGORIES;
}