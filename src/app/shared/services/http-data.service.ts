import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable()

export class HttpService{
    constructor( private http : HttpClient){}
    postStudents(stdData : any){
        let myHttpParams = new HttpParams();
        // myHttpParams = myHttpParams.append('day','saturday');
        // myHttpParams = myHttpParams.append('date','02-Feb-2024');
        myHttpParams = myHttpParams.appendAll({
            'day' : 'Monday',
            'date' : '02-Feb-24'
        })
        this.http.post('https://sign-in-form-bffb5-default-rtdb.firebaseio.com/student.json',stdData,{
            // params : new HttpParams().set('day','Monday')
            params : myHttpParams,
            headers : new HttpHeaders({
                'batch' : 'EA-28'
            })
        }).subscribe({
            next : (param : any)=>{
                console.log(param);
            }
        })
    }
    getStudents(){
        return this.http.get('https://sign-in-form-bffb5-default-rtdb.firebaseio.com/student.json').pipe(map((resp : any)=>{
            const myStdArr = [];
            for(let stdId in resp){
                myStdArr.push({...resp[stdId],id : stdId})
            }
            console.log(myStdArr);
            return myStdArr;
        }))
    }
    deleteData(id : any){
        this.http.delete('https://sign-in-form-bffb5-default-rtdb.firebaseio.com/student/'+id+'.json').subscribe()
    }

    deleteStudents(){
        this.http.delete('https://sign-in-form-bffb5-default-rtdb.firebaseio.com/student.json').subscribe({
            next : (param : any)=>{
                console.log('param for delete',param);
            }
        })
    }
    updateData(id : string, value : any){
        this.http.put('https://sign-in-form-bffb5-default-rtdb.firebaseio.com/student/'+id+'.json', value).subscribe()
    }
}