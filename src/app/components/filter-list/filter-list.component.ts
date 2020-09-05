import { Component, OnInit } from '@angular/core';
import { ALL_SIZES, Size } from '../../types/size';

@Component({
    selector: 'filter-list',
    templateUrl: 'filter-list.component.html',
    styleUrls: ['./filter-list.component.scss'],
})

export default class FilterList {
    sizes: Size[] = ALL_SIZES;
}