import { Component, OnInit } from '@angular/core';
import { iJSONresponse } from '../../Model/jsonresponse';
import { iPost } from '../../Model/i-post';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent implements OnInit {
  postArr: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((res) => {
        this.postArr = res.posts.filter((post) => post.active);
      });
  }
}
