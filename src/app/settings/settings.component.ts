import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Params {
  accountId: string;
  apiKey: string;
  querystring?: any;
  metadata?: any;
  requestBody: Blob;
}

const params: Params = {
  accountId: 'FW25bT3',
  apiKey: 'public_FW25bT36ZmE6TTwa1L8Uo9Ewb51N',
  requestBody: new Blob(['Example Data'], { type: 'text/plain' }), // Or: pass a 'file' object from an input element.
};
var result:any=''
async function basicUpload(params: Params) {
  const baseUrl = 'https://api.upload.io';
  const path = `/v2/accounts/${params.accountId}/uploads/binary`;
  const entries = (obj: any) =>
    Object.entries(obj).filter(([, val]) => (val ?? null) !== null);
  const query = entries(params.querystring ?? {})
    .flatMap(([k, v]) => (Array.isArray(v) ? v.map((v2) => [k, v2]) : [[k, v]]))
    .map((kv) => kv.join('='))
    .join('&');
  const response = await fetch(
    `${baseUrl}${path}${query.length > 0 ? '?' : ''}${query}`,
    {
      method: 'POST',
      body: params.requestBody,
      headers: {
        Authorization: `Bearer ${params.apiKey}`,
        // 'X-Upload-Metadata': JSON.stringify(params.metadata),
      },
    }
  );
  result = await response.json();
  console.log('result', result)
  if (Math.floor(response.status / 100) !== 2)
    throw new Error(`Upload API Error: ${JSON.stringify(result)}`);
  return result;
}

// basicUpload({
//   accountId: 'FW25bT3',
//   apiKey: 'public_FW25bT36ZmE6TTwa1L8Uo9Ewb51N',
//   requestBody: new Blob(['Example Data'], { type: 'text/plain' }), // Or: pass a 'file' object from an input element.
//   // - Optional -
//   // metadata: {
//   //  myCustomField1: true,
//   //  myCustomField2: {
//   //    hello: "world"
//   //  },
//   //  anotherCustomField: 42
//   //},
//   // querystring: {
//   //  fileName: "image.jpg",
//   //  fileNameFallback: "image.jpg",
//   //  fileNameVariablesEnabled: true,
//   //  filePath: "/uploads/image.jpg",
//   //  folderPath: "/uploads",
//   //  folderPathVariablesEnabled: true,
//   //  originalFileName: "example.jpg",
//   //  tag: ["example_tag"]
//   //}
// });

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  username: string | null = localStorage.getItem('username');
  img: string | null = localStorage.getItem('img');
  email: string | null = localStorage.getItem('email');
  token: string | null = localStorage.getItem('token');
  token1 = '';
  email1 = '';
  username1 = '';
  img1 = result.fileUrl;
  password = '';
  bio = '';
  profilePictureFile: File | null = null;
  profilePictureUrl: string | ArrayBuffer | null = null;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // this.convertImg();
    this.convert();
    this.convertEmail();
    this.convertToken();
  }

  convertEmail() {
    if (this.email != null) {
      this.email1 = this.email.replace(/"/g, '');
    }
  }

  // convertImg() {
  //   if (this.img != null) {
  //     this.img1 = this.img.replace(/"/g, '');
  //   }
  // }

  convert() {
    if (this.username != null) {
      this.username1 = this.username.replace(/"/g, '');
    }
  }

  convertToken() {
    if (this.token != null) {
      this.token1 = this.token.replace(/"/g, '');
    }
  }

  clickLogout() {
    localStorage.clear();
    this.router.navigate(['login']);
    this.loginService.isLoggedIn = false;
  }

  updateUserInfo() {
    console.log('in update');
    const url = 'https://api.realworld.io/api/user';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Requested-With', 'XMLHttpRequest')
      .set('Authorization', `Token ${this.token1}`);


      const articleBody = (<HTMLInputElement>document.getElementById('articleBody')).value;
    const body = {
      user: {
        email: this.email1,
        password: this.password,
        bio: articleBody,
        image: this.img1,
      },
    };

    // Make the HTTP request
    this.http.put(url, body, { headers }).subscribe(
      (result) => console.log(result),
      (error) => console.log('error', error)
    );
  }

  handleImageUpload(event: Event): void {
    const el = event.target as HTMLInputElement;
    if (!el || (el.files && el.files.length == 0)) return;
    const file = el.files?.[0];
    if (!file) return;
    // const reader = new FileReader();
    // reader.onloadend = function(){
    //   console.log(this)
    basicUpload({
      accountId: params.accountId,
      apiKey: params.apiKey,
      requestBody: new Blob([file],{type:'image/jpeg'}),
    })

    .then((result) => {
      this.img1 = result.fileUrl; // Assign the uploaded image URL to img1
      console.log(result);
    })
      .catch(console.log);
    // }
    // reader.readAsDataURL(file);
  }

  // clearImagePreview() {
  //   this.profilePictureUrl = null; // Reset image preview URL
  //   this.img1 = ''; // Clear the img1 variable
  //   this.handleImageUpload(event)
  // }

  // clearProfilePictureInput() {
  //   const fileInput = document.getElementById('profile-picture-input') as HTMLInputElement;
  //   fileInput.value = ''; // Clear the selected file from the input
  //  // Reset image preview
  // }

  // previewImage(file: File) {
  //   const reader = new FileReader();
  //   reader.onload = (e: any) => {
  //     this.profilePictureUrl = e.target.result;
  //   };
  //   reader.readAsDataURL(file);
  // }

  generateImageUrl(file: File) {
    console.log('inside genenarateImageUrl()');
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result?.toString();
      console.log('base6Data', base64Data);
      if (base64Data) {
        this.img1 = base64Data;
      }
    };
    reader.readAsDataURL(file);
  }


}
