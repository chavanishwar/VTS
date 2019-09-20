(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Master-owner-registration-owner-regi-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Master/owner-registration/owner-regi/owner-registration.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Master/owner-registration/owner-regi/owner-registration.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-wrapper\" style=\"padding-top: 58px\"></div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2 border-right \" style=\"min-height:90vh!important\">\n      <div  [formGroup]=\"SerahForm\">\n          <label class=\"mb-0\">State</label>\n          <select class=\"form-control mb-2\" (change)=\"onchangeStateBindDist()\"  formControlName=\"StateId\"  >\n            <option value=\"0\">Select State</option>\n            <option *ngFor=\"let state of stateArr\" [ngValue]=\"state.StateId\">{{state.State}}</option>\n          </select>\n\n      <label class=\"mb-0\">District</label>\n      <select class=\"form-control mb-2\" formControlName=\"DistrictId\"  >\n        <option value=\"0\">Select District</option>\n        <option *ngFor=\"let dist of district\" [ngValue]=\"dist.DistrictId\">{{dist.District}}</option>\n      </select>\n      <label class=\"mb-0\">Search</label>\n      <input class=\"form-control mb-1\" formControlName=\"Search\" >\n \n    </div>\n\n\n\n<button class=\"btn btn-dark\" (click)=\"bindData()\" type=\"button \">Search</button>\n  </div>\n\n    <div class=\"col-md-10\">\n\n\n  <button class=\"btn btn-light border bottom position-absolute\"  data-toggle=\"modal\" data-target=\"#myModal\" title=\"Add new record\" (click)=\"OpenModel()\"  ><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n  <table class=\"table\" *ngIf=\"dataSourceflag\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Sr</th>\n         \n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Company</th>\n          <th scope=\"col\">Mobile No</th>\n          <th scope=\"col\">District</th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let dt of dataSource\">\n          <td scope=\"row\">{{dt.RowNumber}}</td>\n   \n          <td>{{dt.Name}}</td>\n          <td>{{dt.OwnerCompany}}</td>\n          <td>{{dt.MobileNo}}</td>\n          <td>{{dt.District}}</td>\n          <td (click)=\"Edit($event,dt.RowNumber)\"  data-target=\"#myModal\" data-toggle=\"modal\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></td>\n        </tr>\n       \n      </tbody>\n    </table>    \n    <div class=\"alert alert-danger mt-2\" *ngIf=\"!dataSourceflag\" role=\"alert\">\n      Data not Found !\n    </div>\n\n\n</div>\n\n\n    <div class=\"modal fade\" aria-modal=\"false\" id=\"myModal\">\n      <div class=\"modal-dialog\" style=\"max-width: 71%!important;\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\"><h5>Owner Registration</h5>\n            <button  type=\"button\" class=\"close\" (click)=\"hideModal()\">&times;</button></div>\n            <div class=\"modal-body\">\n              <form  [formGroup]=\"vehicleOwnerForm\" (ngSubmit)=\"onSubmit()\" >\n            <div class=\"container\">\n                <div class=\"row\">\n    \n                  <div class=\"col-4\">\n                    <label class=\"mb-0\" for=\"OwnerCompany\">Owner Compnay <i class=\"fa fa-asterisk text-danger fs-1\" aria-hidden=\"true\"></i></label>\n                    <div class=\"\"> <input type=\"text\" autocomplete=\"off\" placeholder=\"Enter Owner Compnay Name\" class=\"form-control validate-alphabets\" formControlName=\"OwnerCompany\" required id='OwnerCompany' /> </div>\n                    <span class=\"help-block mb-2\" *ngIf=\"!vehicleOwnerForm.get('OwnerCompany').valid && vehicleOwnerForm.get('OwnerCompany').touched\"> Please Enter a Owner Company Name</span>\n                </div>\n                    <div class=\"col-4\">\n                        <label class=\"mb-0\" for=\"forVehicleOwner\">Owner Name <i class=\"fa fa-asterisk text-danger fs-1\" aria-hidden=\"true\"></i></label>\n                        <div class=\"\"> <input type=\"text\" autocomplete=\"off\" placeholder=\"Enter Owner Name\" class=\"form-control validate-alphabets\" formControlName=\"Name\" required id='forVehicleOwner' length=\"50\" /> </div>\n                        <span class=\"help-block mb-2\" *ngIf=\"!vehicleOwnerForm.get('Name').valid && vehicleOwnerForm.get('Name').touched\"> Please Enter a Owner Name</span>\n                    </div>\n                    <div class=\"col-4\">\n                        <label class=\"mb-0\">Mobile No. <i class=\"fa fa-asterisk text-danger fs-1\" aria-hidden=\"true\"></i></label>\n                        <div class=\"\">\n                            <input type=\"text\" autocomplete=\"off\"  formControlName=\"MobileNo\"  data-entry=\"MobileNo\" placeholder=\"9999999999\" class=\"form-control validate-number\"  minlength=10 maxlength=10 required  />\n                        </div>\n                        <span class=\"help-block mb-2\" *ngIf=\"!vehicleOwnerForm.get('MobileNo').valid && vehicleOwnerForm.get('MobileNo').touched\"> Please Enter a Valid mobile No</span>\n                    </div>\n\n                    <div class=\"col-4 mt-2\">\n                        <label class=\"mb-0\">Emaill Id <i class=\"fa fa-asterisk text-danger fs-1\" aria-hidden=\"true\"></i></label>\n                        <div class=\"\">\n                            <input type=\"text\" autocomplete=\"off\"  formControlName=\"EmailId\"  placeholder=\"Enter Email Id\" class=\"form-control\"   required email  />\n                        <span class=\"help-block\" *ngIf=\"!vehicleOwnerForm.get('EmailId').valid && vehicleOwnerForm.get('EmailId').touched \"> Please enter a valid email id</span>\n                          </div>\n                    </div>\n\n                    <div class=\"col-4\">\n                        <label class=\"mb-0\">GSTIN <i class=\"fa fa-asterisk text-danger fs-1\" aria-hidden=\"true\"></i></label>\n                        <div class=\"\">\n                            <input type=\"text\" autocomplete=\"off\"  formControlName=\"GSTNo\"  placeholder=\"Enter GSTN\" class=\"form-control validate-alpha-number\"   required   />\n                        <span class=\"help-block\" *ngIf=\"!vehicleOwnerForm.get('GSTNo').valid && vehicleOwnerForm.get('GSTNo').touched \"> Please enter a GSTN No </span>\n                          </div>\n                    </div>\n                    \n                    <div class=\"col-4\">\n                        <label class=\"mb-0\">State <i class=\"fa fa-asterisk text-danger fs-1\" aria-hidden=\"true\"></i></label>\n                        <div class=\"mb-3\">\n                            <select  class=\"form-control\" (change)=\"onchangeStateBindDistData()\"  formControlName=\"StateId\"  required>\n                                <option value=\"\">Select State</option>\n                                <option *ngFor=\"let state of stateArr\" [ngValue]=\"state.StateId\">{{state.State}}</option>\n                            </select>\n                        <span class=\"help-block\" *ngIf=\"!vehicleOwnerForm.get('StateId').valid && vehicleOwnerForm.get('StateId').touched \"> Please Select State</span>\n                        </div>\n                    </div>\n                    <div class=\"col-4\">\n                        <label class=\"mb-0\">District <i class=\"fa fa-asterisk text-danger fs-1\" aria-hidden=\"true\"></i></label>\n                        <div class=\"mb-3\">\n                            <select  class=\"form-control\" formControlName=\"DistrictId\"   (change)=\"onchangeDistDataBindTaluka()\"    required >\n                                <option value=\"\">Select Disrict</option>\n                                <option *ngFor=\"let dist of districtArr\" [ngValue]=\"dist.DistrictId\">{{dist.District}}</option>\n\n                            </select>\n                        <span class=\"help-block\" *ngIf=\"!vehicleOwnerForm.get('DistrictId').valid && vehicleOwnerForm.get('DistrictId').touched \"> Please Select District</span>\n    \n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <label class=\"mb-0\">Address <i class=\"fa fa-asterisk text-danger fs-1\" aria-hidden=\"true\"></i></label>\n                        <div class=\"mb-3\">\n                            <textarea  formControlName=\"Address\" placeholder=\"Address\" class=\"form-control\"  rows=\"1\" required></textarea>\n                            <span class=\"help-block\" *ngIf=\"!vehicleOwnerForm.get('Address').valid && vehicleOwnerForm.get('Address').touched \"> Please Enter Address</span>\n                        \n                          </div>\n                    </div>\n                    <div class=\"col-4\">\n                        <label class=\"mb-0\">Lattitude</label>\n                        <div class=\"\">\n                            <input type=\"text\" autocomplete=\"off\"  formControlName=\"Latitude\"  data-entry=\"MobileNo\" placeholder=\"9999999999\" class=\"form-control validate-decimal-number\" maxlength=10 />\n                        </div>\n                        <span class=\"help-block mb-2\" *ngIf=\"!vehicleOwnerForm.get('Latitude').valid && vehicleOwnerForm.get('Latitude').touched\"> Please Enter a Valid lattitude</span>\n                    </div>\n                    <div class=\"col-4\">\n                        <label class=\"mb-0\">Longitude</label>\n                        <div class=\"\">\n                            <input type=\"text\" autocomplete=\"off\"  formControlName=\"Longitude\"   placeholder=\"9999999999\" class=\"form-control validate-decimal-number\"   maxlength=10   />\n                        </div>\n                        <span class=\"help-block mb-2\" *ngIf=\"!vehicleOwnerForm.get('Longitude').valid && vehicleOwnerForm.get('Longitude').touched\"> Please Enter a Valid Longitude</span>\n                    </div>\n                    <!-- <div class=\"col-1 mt-3 pt-1\" title=\"Select latlong from map\"><button class=\"btn btn-info py-1\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></button></div> -->\n                    <!-- <div class=\"col-12 border m-2\" *ngIf=\"mapFlag\" >\n                        <div  #map style=\"width:100%;height:200px\"></div>\n                    </div> -->\n                    <div class=\"col-12 mt-2\">\n                        <button ng-click=\"onClickSave()\" type=\"submit\" class=\"btn btn-primary btnS mr-2\" id=\"btnSave\"   [ngModel]=\"SaveUpdate\"  ngDefaultControl  [ngModelOptions]=\"{standalone: true}\" title=\"\">{{SaveUpdate}}</button>\n                        <input type=\"button\" (click)=\"refreshContent()\" class=\"btn btn-primary btnS\" value=\"Refresh\" title=\"Refresh\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"pt-3\">\n                \n            </div>\n        </form>\n    \n    </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n \n</div>\n");

/***/ }),

/***/ "./src/app/Master/owner-registration/owner-regi-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/Master/owner-registration/owner-regi-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: OwnerRegiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerRegiRoutingModule", function() { return OwnerRegiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _owner_regi_owner_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-regi/owner-registration.component */ "./src/app/Master/owner-registration/owner-regi/owner-registration.component.ts");




const routes = [{ path: '', component: _owner_regi_owner_registration_component__WEBPACK_IMPORTED_MODULE_3__["OwnerRegistrationComponent"] }];
let OwnerRegiRoutingModule = class OwnerRegiRoutingModule {
};
OwnerRegiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OwnerRegiRoutingModule);



/***/ }),

/***/ "./src/app/Master/owner-registration/owner-regi.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Master/owner-registration/owner-regi.module.ts ***!
  \****************************************************************/
/*! exports provided: OwnerRegiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerRegiModule", function() { return OwnerRegiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _owner_regi_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-regi-routing.module */ "./src/app/Master/owner-registration/owner-regi-routing.module.ts");
/* harmony import */ var _owner_regi_owner_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owner-regi/owner-registration.component */ "./src/app/Master/owner-registration/owner-regi/owner-registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let OwnerRegiModule = class OwnerRegiModule {
};
OwnerRegiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_owner_regi_owner_registration_component__WEBPACK_IMPORTED_MODULE_4__["OwnerRegistrationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _owner_regi_routing_module__WEBPACK_IMPORTED_MODULE_3__["OwnerRegiRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]
    })
], OwnerRegiModule);



/***/ }),

/***/ "./src/app/Master/owner-registration/owner-regi/owner-registration.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/Master/owner-registration/owner-regi/owner-registration.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n    border: 1px solid red \r\n }\r\n /* [data-target=\"#myModal\"]{\r\n     position: absolute;\r\n     bottom: 5px;\r\n } */\r\n .form-control-sm, .form-control, .input-group-sm > .form-control, .input-group-sm > .input-group-append > .btn, .input-group-sm > .input-group-append > .input-group-text, .input-group-sm > .input-group-prepend > .btn {\r\n    font-size: 0.8rem;\r\n    background-color: rgb(241, 243, 244);\r\n    padding: 0.5rem;\r\n}\r\n .fs-1{\r\n    font-size: 0.5rem!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWFzdGVyL293bmVyLXJlZ2lzdHJhdGlvbi9vd25lci1yZWdpL293bmVyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7Q0FDSDtDQUNBOzs7SUFHRztDQUNIO0lBQ0csaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0NBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9NYXN0ZXIvb3duZXItcmVnaXN0cmF0aW9uL293bmVyLXJlZ2kvb3duZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsIHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCwgc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQgXHJcbiB9XHJcbiAvKiBbZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiXXtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYm90dG9tOiA1cHg7XHJcbiB9ICovXHJcbiAuZm9ybS1jb250cm9sLXNtLCAuZm9ybS1jb250cm9sLCAuaW5wdXQtZ3JvdXAtc20gPiAuZm9ybS1jb250cm9sLCAuaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYXBwZW5kID4gLmJ0biwgLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWFwcGVuZCA+IC5pbnB1dC1ncm91cC10ZXh0LCAuaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtcHJlcGVuZCA+IC5idG4ge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDMsIDI0NCk7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuLmZzLTF7XHJcbiAgICBmb250LXNpemU6IDAuNXJlbSFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Master/owner-registration/owner-regi/owner-registration.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Master/owner-registration/owner-regi/owner-registration.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OwnerRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerRegistrationComponent", function() { return OwnerRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_WebService_district_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/WebService/district.service */ "./src/app/WebService/district.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_WebService_Master_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/WebService/Master/registration.service */ "./src/app/WebService/Master/registration.service.ts");






let OwnerRegistrationComponent = class OwnerRegistrationComponent {
    constructor(distsrvc, registrationService) {
        this.distsrvc = distsrvc;
        this.registrationService = registrationService;
        this.latlng = true;
        this.stateArr = [];
        this.district = [];
        this.talukaArr = [];
        this.districtArr = [];
        this.jsonObj = [];
        this.dataSource = [];
        this.SaveUpdate = 'Save';
        this.dataSourceflag = false;
    }
    ngOnInit() {
        this.userinfo = JSON.parse(localStorage.info).checkLogin[0];
        this.distsrvc.getState(this.userinfo.UserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(responseData => { let resData = []; for (const key in responseData) {
            resData = responseData[key];
        } return resData; })).subscribe(dt => { this.stateArr = dt; });
        this.defaultForm();
        this.SerahForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({ StateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1), DistrictId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0), Search: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''), UserId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.userinfo.UserId), PageNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1) });
        if (this.SerahForm.value.StateId == 0) {
            this.SerahForm.patchValue({ DistrictId: 0 });
            this.district = [];
        }
        else {
            let o = { "UserId": this.userinfo.UserId, "StateId": this.SerahForm.value.StateId };
            this.distsrvc.getdistrict(o).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(responseData => { let resData = []; for (const key in responseData) {
                resData = responseData[key];
            } return resData; })).subscribe(dt => { this.district = dt; });
        }
        this.bindData();
    }
    bindData() {
        debugger;
        let obj = this.SerahForm.value;
        this.registrationService.getVehicleOwnerDetails(obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(responseData => {
            let resData = [];
            if (responseData == null || responseData == '') {
                return resData;
            }
            else {
                for (const key in responseData) {
                    resData.push(responseData[key]);
                }
                return resData;
            }
        }))
            .subscribe(dt => {
            debugger;
            if (dt.length) {
                this.jsonObj = dt[1] == '' ? [] : dt[1];
                this.dataSource = dt[0];
                this.dataSourceflag = true;
            }
            else {
                this.dataSourceflag = false;
            }
        });
    }
    onchangeStateBindDist() { if (this.SerahForm.value.StateId == 0) {
        this.SerahForm.patchValue({ DistrictId: 0 });
        this.district = [];
    }
    else {
        let o = { "UserId": this.userinfo.UserId, "StateId": this.SerahForm.value.StateId };
        this.distsrvc.getdistrict(o).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(responseData => { let resData = []; for (const key in responseData) {
            resData = responseData[key];
        } return resData; })).subscribe(dt => { this.district = dt; });
    } }
    hideModal() { document.getElementById('myModal').click(); this.refreshContent(); } // for hide popUp
    onSubmit() {
        debugger;
        if (this.vehicleOwnerForm.valid) {
            this.registrationService.saveVehicleOwner(this.vehicleOwnerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(responseData => { let resData = []; for (const key in responseData) {
                resData = responseData[key];
            } return resData; })).subscribe(resdata => {
                alert(resdata[0].Msg);
                this.bindData();
                this.hideModal();
            });
        }
        else {
            alert('Please fill the mandatory field ');
        }
    }
    onchangeStateBindDistData() { if (this.vehicleOwnerForm.value.StateId == 0) {
        this.vehicleOwnerForm.patchValue({ DistrictId: 0 });
        this.districtArr = [];
    }
    else {
        let o = { "UserId": this.userinfo.UserId, "StateId": this.vehicleOwnerForm.value.StateId };
        this.distsrvc.getdistrict(o).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(responseData => { let resData = []; for (const key in responseData) {
            resData = responseData[key];
        } return resData; })).subscribe(dt => { this.districtArr = dt; });
    } }
    OpenModel() { }
    refreshContent() { this.defaultForm(); ; this.SaveUpdate = 'Save'; }
    Edit(ev, rn) {
        debugger;
        this.SaveUpdate = 'Update';
        let o = this.dataSource.find(function (cr) { return cr.RowNumber == rn; });
        //  o.CreatedBy=this.userinfo.UserId
        this.vehicleOwnerForm.patchValue({
            Name: o.Name,
            MobileNo: o.MobileNo,
            EmailId: o.EmailId,
            Address: o.Address,
            StateId: o.StateId,
            GSTNo: o.GSTNo,
            Longitude: o.Longitude,
            Latitude: o.Longitude,
            DistrictId: o.DistrictId,
            OwnerCompany: o.OwnerCompany,
            VehicleOwnerId: o.VehicleOwnerId,
            CreatedBy: this.userinfo.UserId,
        });
        this.onchangeStateBindDistData();
    }
    defaultForm() {
        this.vehicleOwnerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            MobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            EmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            StateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            GSTNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            Longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            Latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            DistrictId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            OwnerCompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            VehicleOwnerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
            CreatedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.userinfo.UserId), SaveUpdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Save')
        });
    }
};
OwnerRegistrationComponent.ctorParameters = () => [
    { type: src_app_WebService_district_service__WEBPACK_IMPORTED_MODULE_2__["DistrictService"] },
    { type: src_app_WebService_Master_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OwnerRegistrationComponent.prototype, "mapElement", void 0);
OwnerRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-owner-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./owner-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Master/owner-registration/owner-regi/owner-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./owner-registration.component.css */ "./src/app/Master/owner-registration/owner-regi/owner-registration.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_WebService_district_service__WEBPACK_IMPORTED_MODULE_2__["DistrictService"], src_app_WebService_Master_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"]])
], OwnerRegistrationComponent);



/***/ }),

/***/ "./src/app/WebService/Master/registration.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/WebService/Master/registration.service.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RegistrationService = class RegistrationService {
    constructor(http) {
        this.http = http;
    }
    saveVehicleOwner(vehilceOwnerRegi) {
        debugger;
        if (vehilceOwnerRegi.VehicleOwnerId == 0) {
            return this.http.post('http://192.168.1.235:5455/api/VehicleOwner', vehilceOwnerRegi);
        }
        else {
            return this.http.post('http://192.168.1.235:5455/api/VehicleOwner/Update_VehicleOwner_1_0', vehilceOwnerRegi);
        }
    }
    getVehicleOwnerDetails(obj) {
        return this.http.post('http://192.168.1.235:5455/api/VehicleOwner/getVehicleOwnerDetails_1_0', obj);
    }
};
RegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RegistrationService);



/***/ })

}]);
//# sourceMappingURL=Master-owner-registration-owner-regi-module-es2015.js.map