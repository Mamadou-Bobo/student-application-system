import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { FormProvider } from '../shared/utils/FormProvider';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],
  providers: [{ provide: FormProvider, useExisting: OnboardingComponent }]
})
export class OnboardingComponent extends FormProvider implements OnInit {

  constructor(private commonService: CommonService) {
    super();
  }

  show: boolean = false;

  onboardingForm = new FormGroup({
    personalInfo: new FormGroup({
      salutation: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
      passportNumber: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      contactAddress: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    }),
    applicationInfo: new FormGroup({
      entryLevel: new FormControl('', Validators.required),
      courseInterested: new FormControl('', Validators.required),
      studyMode: new FormControl('', Validators.required)
    })
  });

  ngOnInit(): void {
  }

  getForm(): FormGroup<any> {
    return this.onboardingForm;
  }

  open(): void {
    const object = {name: "Personal Information", isNext: false}
    this.commonService.stepInfo = object;
    this.commonService.emitStepInfo();
    this.show = true;
  }

}
