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
    this.spinner.show();

    setTimeout(() => {
         this.spinner.hide();
    }, 1000);
  }

  fileChange(element) {
      this.uploadedFiles = element.target.files[0].name;
  }

  upload() {
      // let formData = new FormData();
      // for (var i = 0; i < this.uploadedFiles.length; i++) {
      //     formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
      // }
      setTimeout(() => this.spinner.show(), 25);
      this.generatorService.uploadFiles(this.uploadedFiles)
      .subscribe((response) => {
        setTimeout(() => this.spinner.hide(), 25);
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
