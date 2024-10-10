import { Component, OnInit } from '@angular/core';
import { iJSONresponse } from '../../Model/jsonresponse';
import { iPost } from '../../Model/i-post';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent implements OnInit {
  postArr: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((res) => {
        this.postArr = res.posts.filter((post) => !post.active);
      });
  }
}
