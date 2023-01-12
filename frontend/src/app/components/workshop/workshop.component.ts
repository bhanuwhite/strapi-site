import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceblogService } from 'src/app/services/blog-service.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {

  totalWorkshopDetails: any = []
  body: any = { "name": "", "status": "", "availability": 30, "userId": "", "Email": "" }
  getItem: any = JSON.parse(localStorage.getItem('user') || '{}')
  tableData: any = []

  constructor(public service: ServiceblogService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.totalWorkshop();
    this.actionWhenParams();
    this.tableAction();
  }

  tableAction() {
    this.service.get(`/api/workshops?filters[userId][$eq]=${this.getItem?.id}`).subscribe((apiData) => {
      this.tableData = apiData['data'].reverse();
    })
  }

  actionWhenParams() {
    try {
      this.route.queryParams.subscribe(params => {
        if (Object.keys(params).length > 0) {

          this.service.get(`http://localhost:1337/strapi-stripe/retrieveCheckoutSession/${params.sessionId}`).subscribe((res) => {
            this.body.status = res.status;
            this.body.userId = this.getItem?.id;
            this.body.name = this.getItem?.username;
            this.body.Email = this.getItem?.email;

            this.service.get(`/api/workshops?filters[userId][$eq]=${this.getItem?.id}`).subscribe((apiData) => {
              if (apiData['data'].length > 0) {
                if (apiData['data'][apiData['data'].length - 1]['attributes']['availability'] > 0) {
                  this.body.availability = apiData['data'][apiData['data'].length - 1]['attributes']['availability'] - 1
                }
                else {
                  alert('No availability')
                }
              }
              else {
                this.body.availability = 29;
              }

              this.service.post(`/api/workshops`,{"data": this.body }).subscribe((postRes) => { })

              this.service.post(`/api/email`,{"to":this.getItem?.email,"name":this.getItem?.username,"body":`payment of ${res.amount_total / 100} Successfully done`}).subscribe({
                next: (res: any) => {
                  this.tableAction();
                  this.router.navigateByUrl('/workshop');
                  alert('successfully sent')
                },
                error: (err: any) => {
                  this.tableAction();
                  this.router.navigateByUrl('/workshop');
                }
              }
              )
              // console.log()
            })

          })
        }
      });
    } catch (e) { }
  }

  totalWorkshop() {
    this.service.get(`http://localhost:1337/strapi-stripe/getProduct/0/500/name/asc`).subscribe((res) => {
      this.totalWorkshopDetails = res['res'].reverse();
    })
  }

  cc(d: any) {
    this.service.get(`http://localhost:1337/strapi-stripe/getProduct/${d.id}`).subscribe((res) => {
      console.log(res)
      this.service.post(`http://localhost:1337/strapi-stripe/createCheckoutSession`,
        { "stripePriceId": `${res.stripePriceId}`, "stripePlanId": "", "isSubscription": false, "productId": res.id, "productName": `${res.title}` }).subscribe((res) => {
          window.open(res.url, "_self");
        })
    })
  }

}
