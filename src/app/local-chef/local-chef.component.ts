import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-local-chef',
  templateUrl: './local-chef.component.html',
  styleUrls: ['./local-chef.component.css'],
})
export class LocalChefComponent implements OnInit {
  title = 'Hi Local Chefs.';
  description = 'Please Sign In or Register to get started.';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  signin() {
    this.router.navigate(['signin'], { relativeTo: this.route });
  }
  register() {
    this.router.navigate(['signin'], { relativeTo: this.route });
  }
}
