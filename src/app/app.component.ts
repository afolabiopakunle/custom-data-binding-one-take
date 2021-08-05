import { Component} from '@angular/core';
import { IComputer } from './computer.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  computers: IComputer[] = [];

  onCreateDesktop(pcInfo) {
    this.computers.push({
      type: 'desktop',
      department: pcInfo.department,
      description: pcInfo.description
    })
  }
  
  onCreateLaptop(pcInfo) {
    this.computers.push({
      type: 'laptop',
      department: pcInfo.department,
      description: pcInfo.description
    })
  }

}
