import { Component, OnInit } from '@angular/core';
// import { ServiceblogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceblogService } from 'src/app/services/blog-service.service';
import { Blog } from '../blog-type';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: any;
  blogDetail: Blog | null = null;
  blogArray: any;

  constructor(activatedRouter: ActivatedRoute, public service: ServiceblogService, public router: Router) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    // this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];
    this.getDetailedBlog();
  }

  getDetailedBlog() {
    this.service.get(`/api/blogs/${this.id}?populate=*`).subscribe((res: any) => {
      this.blogArray = res['data']['attributes'];
      // console.log(this.blogArrayTitle)
    })
  }

  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.service.showEdit = false;
    this.router.navigate([('/post')]);

  }

  editPost() {
    this.service.showEdit = false;
    this.router.navigate([('/editPost'), this.blogDetail?.id]);
  }

  // editPost(){
  //   this.router.navigate([('/editPost'), this.service?.detailId]);

  // }

}
