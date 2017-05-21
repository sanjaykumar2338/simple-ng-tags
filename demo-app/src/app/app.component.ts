import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tags: any[] = ['tag 1', 'tag 2', 'tag 3'];
  tagsControl:FormControl;

  ngOnInit() {
    this.tagsControl = new FormControl(['tag 1', 'tag 2', 'tag 3'], Validators.required);
    this.tagsControl.valueChanges.subscribe(tags => {
      console.log(tags);
    });
  }
}
