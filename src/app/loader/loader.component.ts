import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // Show the loader when the component initializes
    this.showLoader();

    // Simulate an asynchronous operation
    setTimeout(() => {
      // Hide the loader after the operation is complete
      this.hideLoader();
    }, 3000);
  }

  showLoader(): void {
    this.spinner.show();
  }

  hideLoader(): void {
    this.spinner.hide();
  }
}
