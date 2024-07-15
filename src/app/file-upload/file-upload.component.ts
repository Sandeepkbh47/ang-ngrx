import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
})
export class FileUploadComponent {
  selectedFile: string = '';
  uploadProgress: number = 0;
  constructor(private http: HttpClient) {}

  onSelect(event: any) {
    let files = event.target.files;
    const formData = new FormData();
    for (let file of files) {
      formData.append(file.name, file);
    }
    this.http
      .post('http://localhost:3000/api/v1/test/file', formData, {
        reportProgress: true,
        observe: 'events',
        // headers: {
        //   'content-type': 'application/octet-stream',
        //   // Accept: 'application/json',
        //   // 'Content-Disposition': 'attachment;filename=XYZ.excel',
        // },
      })
      .subscribe((event) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(
            100 * (event.loaded / (event.total || 1))
          );
          console.log(this.uploadProgress);
        } else if (event.type == HttpEventType.Response) {
          console.log(event.body);
        }
      });
  }
}
