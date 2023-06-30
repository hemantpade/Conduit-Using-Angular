import { Component } from '@angular/core';
import { TagdataService } from '../services/tagdata.service';

@Component({
  selector: 'app-tags-container',
  templateUrl: './tags-container.component.html',
  styleUrls: ['./tags-container.component.css']
})
export class TagsContainerComponent {
  tags: any[] = [];
  constructor(private tagsData: TagdataService) {}

  ngOnInit() {
    this.tagsData.tag().subscribe((data) => {
      console.warn('data tags', data);
      this.tags = data.tags;
    });
  }
}
