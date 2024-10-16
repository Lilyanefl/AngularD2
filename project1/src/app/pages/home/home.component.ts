import { Component, OnInit } from '@angular/core';
import { iJSONresponse } from '../../Model/jsonresponse';
import { iPost } from '../../Model/i-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  featuredPost!: iPost;
  postArr: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((res) => {
        this.featuredPost = res.posts[0];
        this.postArr = res.posts.slice(1, 5);
      });
  }
}
