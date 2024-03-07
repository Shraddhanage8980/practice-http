import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from "../shared/services/http-data.service";

@Component({
    selector : 'app-one',
    templateUrl :'./one.component.html',
    styleUrls : ['./one.component.scss']
})
export class OneComponent implements OnInit{
    myStdForm: FormGroup | any;
    allStdArr : any[] = [];
    editMode : boolean = false;
    currentStudentId : any;

    constructor(private httpServ : HttpService){}
    ngOnInit(): void {
        this.myStdForm = new FormGroup({
            fullName : new FormControl('',Validators.required),
            emailId : new FormControl('',Validators.required),
            contact : new FormControl('',Validators.required)
        })
        // this.getAllStudentsData()
        // this.httpServ.deleteStudents()
    }
    onSubmit(myStdForm : any){
        if(!this.editMode){
            this.httpServ.postStudents(this.myStdForm.value);
        }else{
            this.httpServ.updateData(this.currentStudentId, this.myStdForm.value)
        }
        this.getAllStudentsData()
    }
    getAllStudentsData(){
        this.httpServ.getStudents().subscribe({
            next :(param : any)=>{
                this.allStdArr = param;
            }
        })
    }
    onDeleteProducts(id : any){
        this.httpServ.deleteData(id);
        this.getAllStudentsData()
    }
    onEdit(id : string){
        this.currentStudentId  = id;
        let currentProduct = this.allStdArr.find((p)=>{return p.id === id})
        console.log(this.myStdForm);
        this.myStdForm.setValue({
            contact : currentProduct.contact,
            emailId : currentProduct.emailId,
            fullName : currentProduct.fullName
        });
        this.editMode = true;
    }
}