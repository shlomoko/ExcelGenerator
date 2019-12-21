import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GeneratorService } from 'src/app/Services/GeneratorService/generator-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  notPdf = false;
  uploadedFiles: String = null ;

  constructor(
              private generatorService: GeneratorService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {

  }

  fileChange(element) {
      this.uploadedFiles = element.target.files[0].name;
  }

  upload() {
      // let formData = new FormData();
      // for (var i = 0; i < this.uploadedFiles.length; i++) {
      //     formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
      // }
      this.spinner.show;
      this.generatorService.uploadFiles(this.uploadedFiles)
      .pipe {
        takeUntil
      }
      .subscribe((response) => {
        this.spinner.hide;
    });
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      if (element.name.endsWith(".pdf")) {
        this.uploadedFiles = element.name;
        this.notPdf = false
      } else {
        this.notPdf = true;
      }
    }  
  }
  deleteAttachment() {
    this.uploadedFiles = null;
  }

}
