import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Checkdate } from '../check-date';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

 

  constructor(private breakpointObserver: BreakpointObserver,private toastr:ToastrService) {}

  selectedstartdate:Date=null;
  private checkdate =new Checkdate()

  ngOnInit(): void {}

  livestreamdata = new FormGroup({
    title : new FormControl('',[Validators.required,Validators.maxLength(100)]),
    startdate : new FormControl('',this.checkdate.Datecheck()),

    starttime :new FormControl('',Validators.required),

    enddate: new FormControl('',this.checkdate.checkEndDate()),

    endtime: new FormControl('',Validators.required)
    
  })

  submitdata(){
   this.toastr.success('records are added sucessfully')
  }

  get title()
  {
    return this.livestreamdata.get('title')
  }

  get startdate(){
    return this.livestreamdata.get('startdate')
  }

  get starttime(){
    return this.livestreamdata.get('starttime')
  }

  get enddate(){
    return this.livestreamdata.get('enddate')
  }

  get endtime(){
    return this.livestreamdata.get('endtime')
  }


}
