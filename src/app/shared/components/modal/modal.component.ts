import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  purpleColor: string = "#8e44ad";
  greyColor: string = "#bdc3c7";

  @Input() show: boolean = false;

  stepData: any = {};

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.stepInfoSubject.subscribe({
      next: (data) => {
        console.log(data);
        this.stepData = data;
      },
      error: (e) => console.log(e),
      complete: () => console.log("complete")
    });
  }

  test(): void {
    console.log(this.stepData);
  }

}
