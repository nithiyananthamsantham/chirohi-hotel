import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from '../models/loginRequest';
import { ReservationService } from '../reservation/reservation.service';
import { LoginResponse } from '../models/loginResponse';

@Component({
  selector: 'app-reservation-login',
  templateUrl: './reservation-login.component.html',
  styleUrls: ['./reservation-login.component.css']
})

export class ReservationLoginComponent implements OnInit {
    loginForm: FormGroup = new FormGroup({});
    loginRes!: LoginResponse;         
  
    constructor(private formBuilder: FormBuilder,
      private reservationService: ReservationService,
      private router: Router,
      private actvatedRoute: ActivatedRoute,
      
           
    ) {
  
    }
  
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })

    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        let loginRequest: LoginRequest = this.loginForm.value;
        this.reservationService.logonAndGgetToken(loginRequest).subscribe((response)=>{
          this.loginRes = response;
          console.log('Login email:', this.loginRes.email);
          console.log('Login token:', this.loginRes.token);
          if(response.token){
            localStorage.setItem('token', response.token);
            this.router.navigateByUrl('/dashboard')

          }
          else{
            this.router.navigateByUrl('/login')
          }
          
        })
        
       
      }
    }
}  
  //let loginForm: FormGroup = new FormGroup({});
  


  // constructor(private formBuilder: FormBuilder) {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     // Perform login logic here (e.g., send credentials to an API)
  //     console.log('Login submitted:', this.loginForm.value);
  //   }
  // }

//}
