import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AcademicQualification } from 'src/app/model/AcademicQualification';
import { UserService } from 'src/app/services/user.service';
import { EnumToArrayPipe } from 'src/app/shared/pipe/EnumToArrayPipe';
import { FormProvider } from 'src/app/shared/utils/FormProvider';
import { UserEnum } from 'src/app/shared/utils/UserEnum';

@Component({
  selector: 'app-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
})
export class ApplicationInfoComponent extends EnumToArrayPipe implements OnInit {
[x: string]: Object;

  form: FormGroup;

  entryLevels: UserEnum = UserEnum.entryLevel;
  studyModes: UserEnum = UserEnum.studyMode;
  coursesInterested: UserEnum = UserEnum.courseInterested;

  academicQualification: AcademicQualification = new AcademicQualification();

  constructor(private formProvider: FormProvider,
              private userService: UserService,
              private router: Router) {
    super();
    this.form = this.formProvider.getForm().get('applicationInfo') as FormGroup;
  }

  ngOnInit(): void {
    // console.log(this.removeUnderscore(this.studyModes));
  }

  addAcademicQualification(): void {
    this.academicQualification = this.formProvider.getForm().get('personalInfo')?.value;

    this.academicQualification.entryLevel = 
    this.formProvider.getForm().get('applicationInfo')?.get('entryLevel')?.value;

    this.academicQualification.courseInterested = 
    this.formProvider.getForm().get('applicationInfo')?.get('courseInterested')?.value;
    this.academicQualification.studyMode = 
    this.formProvider.getForm().get('applicationInfo')?.get('studyMode')?.value;

    console.log(this.academicQualification);

    this.userService.addAcademicQualification(this.academicQualification).subscribe({
      next: (data) => console.log(data),
      error: (e) => console.log(e),
      complete: () => {
        console.log("complete");
        this.router.navigate(['/onboarding']);
      }
    });
  }

}
