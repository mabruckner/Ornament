import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TextParam } from './textparam'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Omaha Ornament Customizer';
    labels: [TextParam] = [{
        font: "Roboto",
        size: 25,
        text: "text",
        x: 200,
        y: 200
    }];
    val = 0;
    modal = false;
    code = "";
    
    constructor(private http: HttpClient) {}
    submit() {
        this.http.post("/api/register", this.labels).subscribe(data => {
            this.modal=true;
            this.code=data['code'];
        });
    }

    addVal() {
        console.log("ADD!");
        console.log(this.labels);
        this.labels.push({
            font: "Roboto",
            size: 12,
            text: "text",
            x: 200,
            y: 100
        });
    }

    deleteVal(idx) {
        console.log("DELETE");
        this.labels.splice(idx, 1);
    }

    tracker(index, value) {
        return index
    }

    close() {
        this.modal=false;
    }
}
