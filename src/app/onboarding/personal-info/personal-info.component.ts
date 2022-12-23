import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnumToArrayPipe } from 'src/app/shared/pipe/EnumToArrayPipe';
import { UserEnum } from 'src/app/shared/utils/UserEnum';
import { FormProvider } from 'src/app/shared/utils/FormProvider';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent extends EnumToArrayPipe implements OnInit {

  form: FormGroup;

  isNext: boolean = true;

  salutations: UserEnum = UserEnum.salutation;
  genders: UserEnum = UserEnum.gender;
  countries: UserEnum = UserEnum.country;

  constructor(private formProvider: FormProvider,
              private commonService: CommonService) {
    super();
    this.form = this.formProvider.getForm().get('personalInfo') as FormGroup;
  }

  ngOnInit(): void {  

  }

  next(): void {
    const object = {name: "Application Information", isNext: true}
    this.commonService.stepInfo = object;
    this.commonService.emitStepInfo();
  }

}
