(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Map/tracking/tracking.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Map/tracking/tracking.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-wrapper\" style=\"padding-top: 58px\"></div>\n<p>\n  tracking works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Master/vehicle-registration/vehicle-registration.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Master/vehicle-registration/vehicle-registration.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-wrapper\" style=\"padding-top: 58px\"></div>\n\n<div class=\"container-fluid\">\n  <button class=\"btn btn-light border my-3\" data-toggle=\"modal\" data-target=\"#myModal\"  >Add New Entry</button>\n  <!-- <i class=\"fas fa-plus text-success\"></i> -->\n<div class=\"modal fade\" id=\"myModal\">\n  <div class=\"modal-dialog\" style=\"max-width: 71%!important;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\"><h5>Vehicle Registration</h5>\n        <button  type=\"button\" class=\"close\" (click)=\"hideModal()\">&times;</button></div>\n\n\n        <div class=\"modal-body\">\n    \n          <form class=\"dataFormContainer\" id=\"dataFormContainer\"  (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Vehicle Category</label>\n                    <div class=\"mb-3\">\n                        <select  class=\"form-control  \"  ng-options=\"x.VehicleCategory for x in VehicleCategory track by x.VehicleCategory\" ngModel  name=\"VehicleCategory\" required #Vcategory=\"ngModel\">\n                            <option value=\"0\">Select Vehicle Category</option>\n                        </select>\n                    <span class=\"help-block\" *ngIf=\"!Vcategory.valid && Vcategory.touched \"> Please Select Vehicle Category</span>\n\n                    </div>\n                </div>\n\n                <div class=\"col-4\">\n                    <label class=\"mb-0\" ng-if=\"isVehicle\">Number Format </label>\n                    <div class=\"mb-3 form-control\" ng-show=\"isVehicle\">\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\"   class=\"custom-control-input\" value=\"Old\" ngModel  name=\"numberFormat\" (click)=\"VehicleNumber('Old')\" [(ngModel)]=\"numberFormatFlag\" id=\"numberFormatOld\">\n                            <label class=\"custom-control-label\" for=\"numberFormatOld\">Old</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" value=\"New\"  ngModel   name=\"numberFormat\" (click)=\"VehicleNumber('New')\" [(ngModel)]=\"numberFormatFlag\" id=\"numberFormatNew\" >\n                            <label class=\"custom-control-label\" for=\"numberFormatNew\">New</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                    <label class=\"mb-0\" ng-show=\"isVehicle\">Vehicle No. </label>\n                    <div class=\"d-flex mb-3\" ng-show=\"isVehicle\">\n                        <div class=\"input-group\" *ngIf=\"isOldNumberFormat\">\n                            <input type=\"text\" ngModel name=\"OldVehNo1\" required data-entry=\"OldVehNo1\" placeholder=\"MHA\" class=\"form-control validate-alphabetsWoSpace\" length=\"3\" />\n                            <input type=\"text\" ngModel name=\"OldVehNo2\" required data-entry=\"OldVehNo2\" placeholder=\"1234\" class=\"form-control validate-number\" length=\"4\"  number/>\n                        </div>\n                        <div class=\"input-group\" *ngIf=\"isNewNumberFormat\">\n                            <input type=\"text\" autocomplete=\"off\" ngModel name=\"NewVehNo1\" required  data-entry=\"NewVehNo1\" placeholder=\"MH\" class=\"form-control validate-alphabetsWoSpace\" length=\"2\" />\n                            <input type=\"text\" autocomplete=\"off\" ngModel name=\"NewVehNo2\" required  data-entry=\"NewVehNo2\" placeholder=\"01\" class=\"form-control validate-number\" length=\"2\" />\n                            <input type=\"text\" autocomplete=\"off\" ngModel  name=\"NewVehNo3\" #_VehicleNo='ngModel' required data-entry=\"NewVehNo3\" placeholder=\"AW\" class=\"form-control validate-alphabetsWoSpace\" length=\"2\" />\n                            <input type=\"text\" autocomplete=\"off\"    data-entry=\"NewVehNo4\" placeholder=\"0123\" class=\"form-control validate-number\" length=\"4\" ngModel name=\"NewVehNo4\" required  />\n                        </div>\n                    <!-- <span class=\"help-block\" *ngIf=\"_VehicleNo.touched && isNewNumberFormat\"> Please enter a valid email id</span> -->\n\n                    </div>\n                </div>\n               \n                <div class=\"col-4\">\n                    <label class=\"mb-0\" for=\"forVehicleOwner\">Owner Name</label>\n                    <div class=\"\">\n                        <input type=\"text\" id='forVehicleOwner'\n                         autocomplete=\"off\"  \n                         placeholder=\"Enter Owner Name\" \n                         class=\"form-control validate-alphabets\"\n                         ngModel name=\"OwnerName\"  #owner=\"ngModel\" required  length=\"50\"  />\n                    </div>\n                    <span class=\"help-block\" *ngIf=\"!owner.valid && owner.touched \"> Please Enter a Owner Name</span>\n                </div>\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Mobile No.</label>\n                    <div class=\"\">\n                        <input type=\"text\" autocomplete=\"off\"  name=\"MobileNo\"  data-entry=\"MobileNo\" placeholder=\"9999999999\" class=\"form-control validate-number\"  minlength=10 maxlength=10 ngModel  required #O_mobileNo='ngModel' />\n                    </div>\n                    <span class=\"help-block\" *ngIf=\"!O_mobileNo.valid && O_mobileNo.touched \"> Please Enter a Valid mobile No</span>\n\n                </div>\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Emaill Id</label>\n                    <div class=\"\">\n                        <input type=\"text\" autocomplete=\"off\"  name=\"email\"  placeholder=\"Enter Email Id\" class=\"form-control validate-number\"  ngModel required email #email=\"ngModel\" />\n                    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched \"> Please enter a valid email id</span>\n                      </div>\n                </div>\n                \n\n                <div class=\"col-12\">\n                    <label class=\"mb-0\">Address</label>\n                    <div class=\"mb-3\">\n                        <textarea ngModel name=\"Address\" placeholder=\"Address\" class=\"form-control\" data-entry=\"Address\" rows=\"2\" required></textarea>\n                    </div>\n                </div>\n\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Block/Unblock</label>\n                    <div class=\"mb-3 form-control\">\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" value=\"True\" ngModel name=\"blockUnblock\"  [(ngModel)]='blockUnblockflag' id=\"blockUnblockBlock\" (change)=\"blockToggle()\">\n                            <label class=\"custom-control-label\" for=\"blockUnblockBlock\">Block</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" value=\"False\" ngModel name=\"blockUnblock\" [(ngModel)]='blockUnblockflag' id=\"blockUnblockUnblock\" (change)=\"blockToggle()\">\n                            <label class=\"custom-control-label\" for=\"blockUnblockUnblock\">Unblock</label>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-8\" *ngIf=\"isRemark\">\n                    <label class=\"mb-0\">Remark</label>\n                    <div class=\"mb-3\">\n                        <textarea  ngModel name=\"Remark\" placeholder=\"Remark for Block/UnBlock\" class=\"form-control\" data-entry=\"Remark\" rows=\"2\" required></textarea>\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Driver Name</label>\n                    <div class=\"mb-3\">\n                        <input type=\"text\" autocomplete=\"off\" ngModel name=\"DriverName\" data-entry=\"DriverName\" placeholder=\"Enter Driver Name\" class=\"form-control validate-alphabets\" length=\"50\" required />\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Driver Mobile no.</label>\n                    <div class=\"mb-3\">\n                        <input type=\"text\" autocomplete=\"off\" ngModel name=\"DriverNo\" data-entry=\"DriverNo\" placeholder=\"9999999999\" class=\"form-control validate-number\" length=\"10\" required />\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Driver licence No.</label>\n                    <div class=\"mb-3\">\n                        <input type=\"text\" autocomplete=\"off\" ngModel name=\"licenseNo\" data-entry=\"licenseNo\" placeholder=\"MH1420110062821. (Optional)\" class=\"form-control validate-alphanumeric\" length=\"20\" />\n                    </div>\n                </div>\n\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Device company name</label>\n                    <div class=\"mb-3\">\n                        <select ng-model=\"selectDistrictSearch\"  ngModel name=\"DeviceCompanyId\" class=\"form-control  mb-3\" ng-change=\"onChangeDistrictSearch()\" ng-options=\"x.CompanyName for x in GPSDeviceCompany track by x.CompanyName\">\n                            <option value=\"\">Select Device Company</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Device Id</label>\n                    <div class=\"mb-3\">\n                        <input type=\"text\" autocomplete=\"off\" ngModel name=\"DeviceId\" data-entry=\"DeviceId\" placeholder=\"123456\" class=\"form-control validate-number\" length=\"25\" required />\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Device sim no.</label>\n                    <div class=\"mb-3\">\n                        <input type=\"text\" autocomplete=\"off\" ngModel name=\"DeviceSIMNo\" data-entry=\"DeviceSIMNo\" placeholder=\"9999999999\" class=\"form-control validate-number\" length=\"13\" required />\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                    <label class=\"mb-0\">Vehicle Type</label>\n                    <div class=\"mb-3\">\n                        <select ng-model=\"selectDistrictSearch\" ngModel name=\"vehicleType\" class=\"form-control  mb-3\" ng-change=\"onChangeDistrictSearch()\" ng-options=\"x.VehTypeName for x in bindVehicleType track by x.VehTypeName\">\n                            <option value=\"0\">Select vehicle type</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <label class=\"mb-0\">Vehicle permit no.</label>\n                    <div class=\"mb-3\">\n                        <input type=\"text\" autocomplete=\"off\" name=\"permitNo\" data-entry=\"permitNo\" placeholder=\"Permit No. (Optional)\" class=\"form-control validate-alphanumeric\" length=\"20\" />\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                </div>\n                <div class=\"col-12\">\n                    <button ng-click=\"onClickSave()\" type=\"submit\" class=\"btn btn-primary btnS mr-2\" id=\"btnSave\" title=\"Search\">Save</button>\n                    <input type=\"button\" (click)=\"onEdit()\" class=\"btn btn-primary btnS\" value=\"Refresh\" title=\"Refresh\">\n                </div>\n            </div>\n        </div>\n\n\n        <!-- <label class=\"mb-0\" ng-show=\"isTransportType\">Transport Type </label>\n        <div class=\"mb-3 form-control\" ng-show=\"isTransportType\">\n            <div class=\"custom-control custom-radio custom-control-inline\">\n                <input type=\"radio\" class=\"custom-control-input\" value=\"Vehicle\" name=\"transportType\" ng-click=\"isBargeNumberFormat = false; isVehicle = true;\" id=\"Vehicle\" checked>\n                <label class=\"custom-control-label\" for=\"Vehicle\">Vehicle</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n                <input type=\"radio\" class=\"custom-control-input\" value=\"barge\" name=\"transportType\" ng-click=\"isBargeNumberFormat = true; isVehicle = false;\" id=\"barge\">\n                <label class=\"custom-control-label\" for=\"barge\">Barge</label>\n            </div>\n        </div>\n\n        <label class=\"mb-0\" ng-show=\"isBargeNumberFormat\">Barge no. </label>\n        <div class=\"input-group mb-3\" ng-show=\"isBargeNumberFormat\">\n            <input type=\"text\" autocomplete=\"off\" name=\"bargeNo1\" data-entry=\"bargeNo1\" placeholder=\"BDR\" class=\"form-control validate-alphabetsWoSpace\" length=\"3\" />\n            <input type=\"text\" autocomplete=\"off\" name=\"bargeNo2\" data-entry=\"bargeNo2\" placeholder=\"IV\" class=\"form-control validate-alphabetsWoSpace\" length=\"2\" />\n            <input type=\"text\" autocomplete=\"off\" name=\"bargeNo3\" data-entry=\"bargeNo3\" placeholder=\"01234\" class=\"form-control validate-number\" length=\"5\" />\n        </div> -->\n\n\n        <!-- <label class=\"mb-0\" ng-show=\"isVehicleCapacity\">Vehicle capacity ( Brass )</label>\n        <div class=\"mb-3\" ng-show=\"isVehicleCapacity\">\n            <input type=\"text\" autocomplete=\"off\" name=\"Capacity\" data-entry=\"Capacity\" placeholder=\"99 (Brass)\" class=\"form-control validate-number\" length=\"2\" required />\n        </div> -->\n        <!--<div class=\"dataEntry\">\n            <div class=\"dataLabel\">\n                <label></label><input type=\"hidden\" name=\"Flag\" class=\"saveUpdateFlag\" /><input type=\"hidden\" name=\"VehRegId\" class=\"VehRegIdField\" />\n            </div>\n            <div class=\"dataField\">\n                <input type=\"submit\" name=\"saveUpdate\" value=\"Save\" data-id=\"\" class=\"saveUpdate\" />\n                <input type=\"reset\" name=\"Cancel\" value=\"Cancel\" class=\"cancelSaveUpdate\" />\n            </div>\n        </div>-->\n        <div class=\"pt-3\">\n            \n        </div>\n    </form>\n\n</div>\n    </div>\n  </div>\n</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<app-header></app-header>\n<!-- <div class=\"alert alert-dismissible w-100 h-100 align-middle d-flex alert-danger\" role=\"alert\" style=\"z-index: 100000;\">\n    <div class=\"card m-auto\" style=\"min-width: 250px;\">\n            <i class=\"fa fa-spinner fa-spin fa-5x\"></i>\n        </div>\n</div> -->\n\n\n   <!-- Loading popup start -->\n\n   <div class=\"loadingPopMain\" *ngIf=\"loading\">\n    <div class=\"loadingPopInr\">\n        <div class=\"loadingBoxM text-center text-danger\">\n            <div class=\"spinner-border\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n            </div>\n            <div class=\"loadingTextSty\">loading..</div>\n        </div>\n\n    </div>\n</div>\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div >\n  <!--<button type=\"button\" ng-click=\"onClickToggleNav()\" id=\"btnOptionsToggleNav\">\n      <i class=\"fas fa-arrow-up\"></i>\n  </button>-->\n  <nav class=\"navbar navbar-light bg-white navbar-expand-sm fixed-top\" style=\"z-index:1031\" id=\"optionsToggleNav\" *ngIf=\"isUserlogedin\">\n      <div>\n          <a class=\"navbar-brand\" [routerLink]=\"''\">\n              <span><img alt=\"mahatrack\" height=\"25\" src=\"data:image/png;base64,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\"> GTS</span>\n          </a>\n          <span class=\"ml-0 pl-3\" id=\"activePage\" ng-cloak ngbind=\"title\">.</span>\n      </div>\n\n\n      <ul class=\"navbar-nav ml-auto\" id=\"accordion\">\n          <li class=\"nav-item\" data-id=\"dashboard_vts\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\"  [routerLink]=\"'/dashboard'\"  title=\"Dashboard\">Dashboard</a>\n          </li>\n          <li class=\"nav-item dropdown\" id=\"mapMenu\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link dropdown-toggle c-p\"   id=\"navbarDropdown\"  role=\"button\"  aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\" ><!--<i class=\"fas fa-map-marker-alt mr-2\"></i>-->Map</a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" >\n                  <a class=\"dropdown-item\" [routerLink]=\"'/Map/map'\" >Map</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"'/Map/tracking'\">Tracking</a>\n              </div>\n          </li>\n          <li class=\"nav-item dropdown\" id=\"masterMenu\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link dropdown-toggle c-p\"  href=\"#\" aria-expanded=\"false\" id=\"navbardrop2\" data-toggle=\"dropdown\"><!--<i class=\"fas fa-project-diagram mr-2\"></i>-->Master</a>\n              <div class=\"dropdown-menu\">\n                    <a class=\"dropdown-item \" [routerLink]=\"'/Master/vehicleOwnerRegistration'\">Owner Registration </a>\n                    <a class=\"dropdown-item \" [routerLink]=\"'/Master/vehicleRegistration'\">Vehicle Registration </a>\n                  <!-- <a class=\"dropdown-item \" href=\"poiDetails\" data-id=\"poiDetails\">POI</a>\n                  <a class=\"dropdown-item \" href=\"breakDown\" data-id=\"breakDown\">Break Down</a>\n                  <a class=\"dropdown-item \" href=\"recharge\" data-id=\"recharge\">Recharge</a>\n                  <a class=\"dropdown-item \" href=\"movementLocation\" data-id=\"movementLocation\">Movement location</a>\n                  <a class=\"dropdown-item \" href=\"productPurchase\" data-id=\"productPurchase\">Product purchase</a>\n                  <a class=\"dropdown-item hide\" href=\"stockManagement\" data-id=\"stockManagement\">Stock Management</a>\n                  <a class=\"dropdown-item hide\" href=\"assignToDistributor\" data-id=\"assignToDistributor\">Assign to distributor</a>\n                  <a class=\"dropdown-item hide\" href=\"assignTosubDistributor\" data-id=\"assignTosubDistributor\">Assign to sub-distributor</a>\n                  <a class=\"dropdown-item hide\" href=\"deviceSimLinkingByDistributor\" data-id=\"deviceSimLinkingByDistributor\">Device sim linking</a>\n                  <a class=\"dropdown-item hide\" href=\"distributorPayment\" data-id=\"distributorPayment\">Distributor payment</a>\n                  <a class=\"dropdown-item hide\" data-id=\"devicePaymentApproval\" href=\"devicePaymentApproval\">Device payment approval</a>\n                  <a class=\"dropdown-item\" data-id=\"deviceSaleToCustomer\" href=\"deviceSaleToCustomer\">Device Sale</a> -->\n\n              </div>\n          </li>\n          <!-- <li class=\"nav-item dropdown\" id=\"reportMenu\">\n              <a class=\"nav-link dropdown-toggle c-p\" ng-click=\"onClickDropMenu($event.currentTarget)\" href=\"#\" id=\"navbardrop3\" data-toggle=\"dropdown\">Reports</a>\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbardrop3\">\n                  <div id=\"generalReport\">\n                      <div class=\"dropdown sublink p-0\" id=\"stockDiv\">\n                          <a class=\"nav-link dropdown-toggle c-p\" ng-click=\"onClickDropMenu($event.currentTarget)\" href=\"\" id=\"stockOnClick\" aria-expanded=\"false\" data-toggle=\"dropdown\">\n                              Stock\n                          </a>\n                          <div class=\"dropdown-menu drop2\" aria-labelledby=\"navbardropReport\" id=\"stockSubmenu\">\n                              <a class=\"dropdown-item hide\" data-id=\"locationWiseStockReport\" href=\"locationWiseStockReport\">\n                                  Location wise\n                              </a>\n                              <a class=\"dropdown-item hide\" data-id=\"purchaseWiseStockReport\" href=\"purchaseWiseStockReport\">\n                                  Purchase wise\n                              </a>\n                              <a class=\"dropdown-item hide\" data-id=\"deviceStatusReport\" href=\"deviceStatusReport\">\n                                  Device status\n                              </a>\n                              <a class=\"dropdown-item hide\" data-id=\"simStatusReport\" href=\"simStatusReport\">\n                                  Sim status\n                              </a>\n                          </div>\n                      </div>\n                      <div class=\"dropdown sublink p-0\" id=\"genDiv\">\n                          <a class=\"nav-link dropdown-toggle c-p\" ng-click=\"onClickDropMenu($event.currentTarget)\" href=\"\" id=\"genOnClick\" aria-expanded=\"false\" data-toggle=\"dropdown\">\n                              General\n                          </a>\n                          <div class=\"dropdown-menu\" aria-labelledby=\"navbardropGenReport\" id=\"genSubmenu\">\n                              <a class=\"dropdown-item hide\" data-id=\"summary\" href=\"summary\">Summary</a>\n                              <a class=\"dropdown-item hide\" data-id=\"speedRange\" href=\"speedRange\">Speed Range</a>\n                              <a class=\"dropdown-item hide\" data-id=\"trip\" href=\"trip\">Trip</a>\n                              <a class=\"dropdown-item hide\" data-id=\"address\" href=\"address\">Address</a>\n                              <a class=\"dropdown-item hide\" data-id=\"overSpeed\" href=\"overSpeed\">Overspeed</a>\n                          </div>\n                      </div>\n                      <div class=\"dropdown sublink p-0\" id=\"crDrDiv\">\n                          <a class=\"nav-link dropdown-toggle c-p\" ng-click=\"onClickDropMenu($event.currentTarget)\" href=\"\" id=\"crDrOnClick\" aria-expanded=\"false\" data-toggle=\"dropdown\">\n                              Credit/ Debit\n                          </a>\n                          <div class=\"dropdown-menu drop2\" aria-labelledby=\"navbardropCrDrReport\" id=\"crDrSubmenu\">\n                              <a class=\"dropdown-item hide\" data-id=\"creditDebitDateWiseReport\" href=\"creditDebitDateWiseReport\">\n                                  Date wise\n                              </a>\n                              <a class=\"dropdown-item hide\" data-id=\"creditDebitReport\" href=\"creditDebitReport\">\n                                  Owner wise\n                              </a>\n                              <a class=\"dropdown-item hide\" data-id=\"creditDebitLocationReport\" href=\"creditDebitLocationReport\">\n                                  Location wise\n                              </a>\n                          </div>\n                      </div>\n                      <div class=\"dropdown sublink p-0\" id=\"accountDiv\">\n                          <a class=\"nav-link dropdown-toggle c-p\" ng-click=\"onClickDropMenu($event.currentTarget)\" href=\"\" id=\"accountClick\" aria-expanded=\"false\" data-toggle=\"dropdown\">\n                              Account\n                          </a>\n                          <div class=\"dropdown-menu drop2\" aria-labelledby=\"navbardropOtherReport\" id=\"accountSubmenu\">\n                              <a class=\"dropdown-item hide\" data-id=\"maintenanceReport\" href=\"maintenanceReport\">\n                                  Maintenance\n                              </a>\n                              <a class=\"dropdown-item hide\" data-id=\"cashAccountReport\" href=\"cashAccountReport\">\n                                  Cash account\n                              </a>\n                              <a class=\"dropdown-item hide\" data-id=\"renewalList\" href=\"renewalList\">Renewal details</a>\n                              <a class=\"dropdown-item hide\" data-id=\"saleReport\" href=\"saleReport\">Device sale</a>\n                              <a class=\"dropdown-item hide\" data-id=\"devicePayment\" href=\"devicePayment\">Device payment</a>\n                          </div>\n                      </div>\n                      <div class=\"dropdown sublink p-0\" id=\"miningDiv\">\n                          <a class=\"nav-link dropdown-toggle c-p\" ng-click=\"onClickDropMenu($event.currentTarget)\" href=\"\" id=\"miningClick\" aria-expanded=\"false\" data-toggle=\"dropdown\">\n                              Mining\n                          </a>\n                          <div class=\"dropdown-menu\" aria-labelledby=\"navbardropminingReport\" id=\"miningSubmenu\">\n                              <a class=\"dropdown-item hide\" data-id=\"invoice\" href=\"invoice\">Invoice</a>\n                              <a class=\"dropdown-item hide\" data-id=\"materialOrder\" href=\"materialOrder\">Material Order</a>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </li> -->\n          <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle last\" ng-click=\"onClickDropMenu($event.currentTarget)\" href=\"#\" id=\"navbardrop4\" data-toggle=\"dropdown\"></a>\n              <div class=\"dropdown-menu dropdown-menu-right o-hidden\" style=\"min-width: 12rem;\">\n                  <div class=\"list-group-item\" style=\"border-top: 1px solid rgba(0,0,0,.125);\">\n                      <h6 class=\"card-title\" ng-cloak ng-bind=\"user\"></h6>\n                      <p class=\"card-subtitle mb-2 mt-1 text-muted\" ng-cloak ng-bind=\"userMobile\"></p>\n                  </div>\n                  <a class=\"dropdown-item\" href=\"changePassword\" title=\"Change password\"><i class=\"fas fa-key fa-rotate-270 mr-2\"></i> Change Password</a>\n                  <div class=\"dropdown-item text-danger c-p\" (click)=\"logout()\" title=\"Log out\"><i class=\"fas fa-power-off text-danger mr-2\"></i> <span class=\"text-danger\"> Logout</span></div>\n              </div>\n          </li>\n      </ul>\n  </nav>\n  <!--alert-->\n  <!--<div class=\"alert alert-primary w-100\" id=\"alert-p\">\n      <strong>Primary!</strong> Indicates an important action.\n  </div>-->\n\n\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Map/tracking/tracking.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Map/tracking/tracking.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01hcC90cmFja2luZy90cmFja2luZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/Map/tracking/tracking.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Map/tracking/tracking.component.ts ***!
  \****************************************************/
/*! exports provided: TrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingComponent", function() { return TrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrackingComponent = class TrackingComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tracking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tracking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Map/tracking/tracking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tracking.component.css */ "./src/app/Map/tracking/tracking.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TrackingComponent);



/***/ }),

/***/ "./src/app/Master/vehicle-registration/vehicle-registration.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Master/vehicle-registration/vehicle-registration.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched,select.ng-invalid.ng-touched {\r\n   border: 1px solid red \r\n}\r\n[data-target=\"#myModal\"]{\r\n    position: absolute;\r\n    bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWFzdGVyL3ZlaGljbGUtcmVnaXN0cmF0aW9uL3ZlaGljbGUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRztBQUNIO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvTWFzdGVyL3ZlaGljbGUtcmVnaXN0cmF0aW9uL3ZlaGljbGUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCBcclxufVxyXG5bZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiXXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/Master/vehicle-registration/vehicle-registration.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Master/vehicle-registration/vehicle-registration.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VehicleRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleRegistrationComponent", function() { return VehicleRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let VehicleRegistrationComponent = class VehicleRegistrationComponent {
    constructor() {
        this.isOldNumberFormat = false;
        this.isNewNumberFormat = true;
        this.isRemark = false;
        this.numberFormatFlag = 'New';
        this.blockUnblockflag = 'False';
    }
    ngOnInit() {
    }
    hideModal() { document.getElementById('myModal').click(); } // for hide popUp
    onSubmit(form) {
        alert('Ok');
        console.log(form.value);
        console.log(form);
    }
    onEdit() {
        this.vehicleregiForm.form.reset();
        this.vehicleregiForm.form.setValue({
            'blockUnblock': 'True'
        });
        this.numberFormatFlag = 'New';
        this.blockUnblockflag = 'False';
        // .patchValue ({
        //   'MobileNo' : 9923833608,
        //   'blockUnblock':'True'
        // })
    }
    VehicleNumber(id) {
        if (id === 'Old') {
            this.isOldNumberFormat = true;
            this.isNewNumberFormat = false;
        }
        else {
            this.isOldNumberFormat = false;
            this.isNewNumberFormat = true;
        }
    }
    blockToggle() { this.isRemark = !this.isRemark; } //for block/Unblock remark hide
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], VehicleRegistrationComponent.prototype, "vehicleregiForm", void 0);
VehicleRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Master/vehicle-registration/vehicle-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-registration.component.css */ "./src/app/Master/vehicle-registration/vehicle-registration.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VehicleRegistrationComponent);



/***/ }),

/***/ "./src/app/WebService/district.service.ts":
/*!************************************************!*\
  !*** ./src/app/WebService/district.service.ts ***!
  \************************************************/
/*! exports provided: DistrictService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictService", function() { return DistrictService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DistrictService = class DistrictService {
    constructor(http) {
        this.http = http;
    }
    getState(userid) {
        debugger;
        return this.http.get('http://192.168.1.235:5455/api/UserDetails/getState_VTS_Web_1_0?UserId=' + userid);
    }
    getdistrict(o) {
        return this.http.post('http://gpstrack.mahamining.com/api/UserDetails/getDistrict_VTS_Web_1_0', o);
    }
    gettaluka(o) {
        return this.http.post('http://gpstrack.mahamining.com/api/UserDetails/getTaluka_VTS_Web_1_0', o);
    }
};
DistrictService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DistrictService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DistrictService);



/***/ }),

/***/ "./src/app/_services/afterlogin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/afterlogin.service.ts ***!
  \*************************************************/
/*! exports provided: AfterloginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterloginService", function() { return AfterloginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AfterloginService = class AfterloginService {
    constructor(http) {
        this.isUserlogedincheck = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
};
AfterloginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AfterloginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AfterloginService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Map_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map/tracking/tracking.component */ "./src/app/Map/tracking/tracking.component.ts");
/* harmony import */ var _Master_vehicle_registration_vehicle_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Master/vehicle-registration/vehicle-registration.component */ "./src/app/Master/vehicle-registration/vehicle-registration.component.ts");
/* harmony import */ var _services_afterlogin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/afterlogin.service */ "./src/app/_services/afterlogin.service.ts");






const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | _userlogin-login-module */ "_userlogin-login-module").then(__webpack_require__.bind(null, /*! ./_userlogin/login.module */ "./src/app/_userlogin/login.module.ts")).then(mod => mod.LoginModule) },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(mod => mod.DashboardModule) },
    { path: 'Map/map', loadChildren: () => __webpack_require__.e(/*! import() | Map-map-map-module */ "Map-map-map-module").then(__webpack_require__.bind(null, /*! ./Map/map/map.module */ "./src/app/Map/map/map.module.ts")).then(mod => mod.MapModule) },
    { path: 'Master/vehicleOwnerRegistration', loadChildren: () => __webpack_require__.e(/*! import() | Master-owner-registration-owner-regi-module */ "Master-owner-registration-owner-regi-module").then(__webpack_require__.bind(null, /*! ./Master/owner-registration/owner-regi.module */ "./src/app/Master/owner-registration/owner-regi.module.ts")).then(mod => mod.OwnerRegiModule) },
    { path: 'Map/tracking', component: _Map_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_3__["TrackingComponent"] },
    { path: 'Master/vehicleRegistration', component: _Master_vehicle_registration_vehicle_registration_component__WEBPACK_IMPORTED_MODULE_4__["VehicleRegistrationComponent"] },
    { path: '**', redirectTo: '' },
];
let AppRoutingModule = class AppRoutingModule {
    constructor(islogedinService) {
        this.islogedinService = islogedinService;
    }
    ngOnInit() {
        debugger;
        this.islogedinService.isUserlogedincheck.next(true);
    }
    ;
};
AppRoutingModule.ctorParameters = () => [
    { type: _services_afterlogin_service__WEBPACK_IMPORTED_MODULE_5__["AfterloginService"] }
];
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_5__["AfterloginService"]])
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loadingPopMain{position:fixed; top:0; right:0; bottom:0; left:0; background-color:rgba(0,0,0,0.5);z-index:99999999;}\r\n.loadingPopMain .loadingPopInr{display:flex; justify-content:center; align-items:center; height:100%;}\r\n.loadingBoxM{background:#fff; border-radius:10px; padding:10px; box-shadow:1px 1px 5px #ccc;min-width:15rem}\r\n.loadingTextSty{font-size:14px; margin:5px 0 0;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLGNBQWMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsZ0NBQWdDLENBQUMsZ0JBQWdCLENBQUM7QUFDcEgsK0JBQStCLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUM7QUFDckcsYUFBYSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLDJCQUEyQixDQUFDLGVBQWU7QUFDM0csZ0JBQWdCLGNBQWMsRUFBRSxjQUFjLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nUG9wTWFpbntwb3NpdGlvbjpmaXhlZDsgdG9wOjA7IHJpZ2h0OjA7IGJvdHRvbTowOyBsZWZ0OjA7IGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjUpO3otaW5kZXg6OTk5OTk5OTk7fVxyXG4ubG9hZGluZ1BvcE1haW4gLmxvYWRpbmdQb3BJbnJ7ZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBhbGlnbi1pdGVtczpjZW50ZXI7IGhlaWdodDoxMDAlO31cclxuLmxvYWRpbmdCb3hNe2JhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czoxMHB4OyBwYWRkaW5nOjEwcHg7IGJveC1zaGFkb3c6MXB4IDFweCA1cHggI2NjYzttaW4td2lkdGg6MTVyZW19XHJcbi5sb2FkaW5nVGV4dFN0eXtmb250LXNpemU6MTRweDsgbWFyZ2luOjVweCAwIDA7fSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'GVTS';
        this.loading = false;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header/header.component */ "./src/app/header/header/header.component.ts");
/* harmony import */ var _Map_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Map/tracking/tracking.component */ "./src/app/Map/tracking/tracking.component.ts");
/* harmony import */ var _Master_vehicle_registration_vehicle_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Master/vehicle-registration/vehicle-registration.component */ "./src/app/Master/vehicle-registration/vehicle-registration.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _WebService_district_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WebService/district.service */ "./src/app/WebService/district.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _services_afterlogin_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/afterlogin.service */ "./src/app/_services/afterlogin.service.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _Map_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_8__["TrackingComponent"],
            _Master_vehicle_registration_vehicle_registration_component__WEBPACK_IMPORTED_MODULE_9__["VehicleRegistrationComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        ],
        providers: [_WebService_district_service__WEBPACK_IMPORTED_MODULE_11__["DistrictService"], _services_afterlogin_service__WEBPACK_IMPORTED_MODULE_13__["AfterloginService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/header/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active-link >a{\r\n    color: #007bff !important;\r\n    font-size: 1rem ! important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1saW5rID5he1xyXG4gICAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbSAhIGltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/header/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/afterlogin.service */ "./src/app/_services/afterlogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(_auth, route, router) {
        this._auth = _auth;
        this.route = route;
        this.router = router;
        this.isUserlogedin = false;
    }
    ngOnInit() {
        if (localStorage.length) {
            this.isUserlogedin = true;
        }
        this._auth.isUserlogedincheck.subscribe(dt => {
            this.isUserlogedin = dt;
        });
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__["AfterloginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header/header.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_afterlogin_service__WEBPACK_IMPORTED_MODULE_2__["AfterloginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Ishwar\Genral vehicle tracking System\GVTS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map