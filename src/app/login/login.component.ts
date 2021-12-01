import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(data: any) {
    this.submitted = true;

    if (this.loginForm.invalid) {
      alert("Error Found");
      return;
    }

    this.dataService.login(data).subscribe(
      (result: any) => {
        if(result) {
          alert("LogedIn Successfully");
          localStorage.setItem("token", result.token);
          this.router.navigate(['/category'])
        } else {
          alert("User not found");
          this.loginForm.reset();
        }
      },
      (error: any) => {
        alert("Error Found");
        return error;
      }
    );
  }

}
