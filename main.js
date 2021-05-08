(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\VaibhavGhadage\Documents\Final project\WorkoutFrontend\src\main.ts */"zUnb");


/***/ }),

/***/ "3/9c":
/*!************************************************************!*\
  !*** ./src/app/update-workout/update-workout.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateWorkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateWorkoutComponent", function() { return UpdateWorkoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Workout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Workout */ "mgXb");
/* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workout.service */ "8v5d");
/* harmony import */ var _workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workout-form/workout-form.component */ "Zmvq");






class UpdateWorkoutComponent {
    constructor(workoutService) {
        this.workoutService = workoutService;
        this.workout = new _Workout__WEBPACK_IMPORTED_MODULE_2__["Workout"]();
        this.workoutSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.parent = { button: "Update" };
    }
    successHandler(result) {
        this.workoutSuccess.emit(result);
    }
    // getFieldData() {
    //   const promise = this.workoutService.getWorkout('1');
    //   promise.subscribe(response => {
    //     this.workoutAny = response;
    //     this.workout = this.workoutAny;
    //     if (this.workout[0] == undefined) {
    //       return(
    //         Swal.fire(
    //           'Failed!',
    //           'No Records available  currently from server'
    //         );
    //       )
    //     }
    //   },
    //     error => {
    //       if (error.status != 200)
    //       {
    //       }
    //         return alert("Unable to fetch records from server");
    //     });
    // }
    putWorkout(workoutTemp) {
        if (!this.workoutService.validateWorkout(workoutTemp)) {
            return;
        }
        const promise = this.workoutService.putWorkout(this.workout);
        promise.subscribe(response => {
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Updated!', 'Workout Updated Successfully!.', 'success');
            this.successHandler('1');
        }, error => {
            console.log(error);
            if (error.status != 201) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Failed!', 'Workout Updation Failed ! ' + error.error);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Updated!', 'Workout Updated Successfully!.', 'success');
            }
        });
    }
    ngOnInit() {
        // this.getFieldData();
    }
}
UpdateWorkoutComponent.ɵfac = function UpdateWorkoutComponent_Factory(t) { return new (t || UpdateWorkoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workout_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutService"])); };
UpdateWorkoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateWorkoutComponent, selectors: [["app-update-workout"]], inputs: { workout: "workout" }, outputs: { workoutSuccess: "workoutSuccess" }, decls: 16, vars: 2, consts: [[1, "container", "my-5"], [1, "row"], [1, "col-md-8", "mx-auto"], [1, "display-4", 2, "font-size", "3em"], [2, "float", "right", "font-size", "1em"], [1, "fas", "fa-biking"], [2, "color", "red"], [1, "fas", "fa-heartbeat"], [2, "float", "right"], [2, "font-size", "larger", 3, "click"], [1, "fas", "fa-times"], [3, "workout", "parent", "successHandler1", "sendWorkouParentt"]], template: function UpdateWorkoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update Workout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateWorkoutComponent_Template_span_click_11_listener() { return ctx.successHandler("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-workout-form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("successHandler1", function UpdateWorkoutComponent_Template_app_workout_form_successHandler1_15_listener($event) { return ctx.successHandler($event); })("sendWorkouParentt", function UpdateWorkoutComponent_Template_app_workout_form_sendWorkouParentt_15_listener($event) { return ctx.putWorkout($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("workout", ctx.workout)("parent", ctx.parent);
    } }, directives: [_workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_4__["WorkoutFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtd29ya291dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "8v5d":
/*!************************************!*\
  !*** ./src/app/workout.service.ts ***!
  \************************************/
/*! exports provided: WorkoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutService", function() { return WorkoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class WorkoutService {
    constructor(http) {
        this.http = http;
        this.URL = "";
    }
    getTrackWorkout(trackDate) {
        return this.http.get(this.URL + 'workout/date/' + trackDate + 'T00:00:00');
    }
    deleteWorkout(id) {
        return this.http.delete(this.URL + 'workout/' + id);
    }
    getWorkout(id) {
        return this.http.get(this.URL + 'workout/' + id);
    }
    ;
    putWorkout(workout) {
        return this.http.put(this.URL + 'workout/' + workout.id, workout, { headers: { "content-type": 'application/json' } });
    }
    getActiveWorkout() {
        return this.http.get(this.URL + 'workout/status/OPEN');
    }
    validateWorkout(workoutTemp) {
        return 1;
    }
    getWorkouts(id) {
        return this.http.get(this.URL + '');
    }
    getCategories() {
        return this.http.get(this.URL + 'category');
    }
    postWorkout(workout) {
        return this.http.post(this.URL + 'workout', workout, { headers: { "content-type": 'application/json' } });
    }
}
WorkoutService.ɵfac = function WorkoutService_Factory(t) { return new (t || WorkoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WorkoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkoutService, factory: WorkoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "FJD2":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Workout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Workout */ "mgXb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workout.service */ "8v5d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _update_workout_update_workout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update-workout/update-workout.component */ "3/9c");
/* harmony import */ var _start_workout_start_workout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../start-workout/start-workout.component */ "Or+w");
/* harmony import */ var _end_workout_end_workout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../end-workout/end-workout.component */ "JE3I");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");










function ViewComponent_table_7_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workout1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Started at ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 1, workout1_r1.startDateTime, "mediumTime"), "");
} }
function ViewComponent_table_7_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewComponent_table_7_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const workout1_r1 = ctx_r8.$implicit; const i_r2 = ctx_r8.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.startClick(workout1_r1, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewComponent_table_7_div_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const workout1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.endClick(workout1_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewComponent_table_7_div_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const workout1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.deleteClick(workout1_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewComponent_table_7_div_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const workout1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.editClick(workout1_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewComponent_table_7_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewComponent_table_7_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const workout1_r1 = ctx_r17.$implicit; const i_r2 = ctx_r17.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.startClick(workout1_r1, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewComponent_table_7_div_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const workout1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.endClick(workout1_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " End");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewComponent_table_7_div_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const workout1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.deleteClick(workout1_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewComponent_table_7_div_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const workout1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.editClick(workout1_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewComponent_table_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ViewComponent_table_7_span_6_Template, 8, 4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ViewComponent_table_7_div_8_Template, 12, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ViewComponent_table_7_div_9_Template, 10, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workout1_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](workout1_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", workout1_r1.startDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !workout1_r1.startDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", workout1_r1.startDateTime);
} }
class ViewComponent {
    constructor(workoutService) {
        this.workoutService = workoutService;
        this.workout = new _Workout__WEBPACK_IMPORTED_MODULE_1__["Workout"]();
        this.parent = { button: "Update" };
        this.buttonStatus = { start: "", end: "", edit: "", delete: "btn btn-danger disabled" };
        this.getFieldData();
    }
    startClick(workout, i) {
        this.workout = workout;
        this.workoutarray[i].started = "started";
        document.getElementById('showView').style.display = 'none';
        document.getElementById('showStart').style.display = 'block';
    }
    editClick(workout) {
        //this.getFieldData();
        this.workout = workout;
        document.getElementById('showView').style.display = 'none';
        document.getElementById('showUpdate').style.display = 'block';
    }
    endClick(workout) {
        //this.getFieldData();
        this.workout = workout;
        document.getElementById('showView').style.display = 'none';
        document.getElementById('showEnd').style.display = 'block';
    }
    deleteClick(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: 'Are you sure want to Delete this Workout?',
            text: 'You will not be able to recover this in future!!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                const promise = this.workoutService.deleteWorkout(id);
                promise.subscribe(response => {
                    this.workoutarray = response;
                }, error => {
                    if (error.status != 200)
                        return (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Cancelled', 'Due problem with server deletion failed )'));
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Deleted!', 'Your entry has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Cancelled', 'Your Entry is safe :)');
                window.location.reload();
            }
        });
    }
    workoutSuccess() {
        window.location.reload();
        document.getElementById('showView').style.display = 'block';
        document.getElementById('showStart').style.display = 'none';
        document.getElementById('workoutStartShow').style.display = 'block';
    }
    getFieldData() {
        const promise = this.workoutService.getActiveWorkout();
        promise.subscribe(response => {
            this.workoutarray = response;
            if (this.workoutarray[0] == undefined) {
                return alert("No Records available  currently from server");
            }
        }, error => {
            if (error.status != 200)
                return alert("Unable to fetch records from server");
        });
    }
    ngOnInit() {
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_workout_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutService"])); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 15, vars: 8, consts: [["id", "showView"], [1, "row", "mt-md-4"], [1, "col-md-7", "mx-auto"], [1, "form-group"], ["type", "text", "id", "search", "placeholder", "Search Workout", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table-responsive"], ["class", "table", 4, "ngFor", "ngForOf"], ["id", "showUpdate", 2, "display", "none"], [3, "workout", "workoutSuccess"], ["id", "showStart", 2, "display", "none"], ["id", "showEnd", 2, "display", "none"], [1, "table"], ["id", "text"], ["style", "float: right;", "id", "workoutStartShow", 4, "ngIf"], ["class", "d-flex justify-content-left", 4, "ngIf"], ["id", "workoutStartShow", 2, "float", "right"], [2, "float", "right", "font-size", "1em"], [1, "fas", "fa-biking"], [2, "color", "red"], [1, "fas", "fa-heartbeat"], [1, "d-flex", "justify-content-left"], ["type", "button", "id", "btn1", 1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-play"], ["type", "button", "id", "btn2", "disabled", "", 1, "btn", "btn-warning", 3, "click"], ["type", "button", "id", "btn3", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash-alt"], ["type", "button", "id", "btn4", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-pencil-alt"], ["type", "button", "id", "btn1", "disabled", "", 1, "btn", "btn-success", 3, "click"], ["type", "button", "id", "btn2", 1, "btn", "btn-warning", 3, "click"], [1, "fas", "fa-stop"], ["type", "button", "id", "btn3", "disabled", "", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "id", "btn4", "disabled", "", 1, "btn", "btn-primary", 3, "click"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ViewComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchedKeyword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ViewComponent_table_7_Template, 10, 4, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "app-update-workout", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("workoutSuccess", function ViewComponent_Template_app_update_workout_workoutSuccess_10_listener() { return ctx.workoutSuccess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-start-workout", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("workoutSuccess", function ViewComponent_Template_app_start_workout_workoutSuccess_12_listener() { return ctx.workoutSuccess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "app-end-workout", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("workoutSuccess", function ViewComponent_Template_app_end_workout_workoutSuccess_14_listener() { return ctx.workoutSuccess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchedKeyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 5, ctx.workoutarray, ctx.searchedKeyword));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("workout", ctx.workout);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("workout", ctx.workout);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("workout", ctx.workout);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _update_workout_update_workout_component__WEBPACK_IMPORTED_MODULE_6__["UpdateWorkoutComponent"], _start_workout_start_workout_component__WEBPACK_IMPORTED_MODULE_7__["StartWorkoutComponent"], _end_workout_end_workout_component__WEBPACK_IMPORTED_MODULE_8__["EndWorkoutComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".form-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.form-control-placeholder[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  padding: 7px 0 0 13px;\r\n  transition: all 200ms;\r\n  opacity: 0.5;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus    + .form-control-placeholder[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:valid    + .form-control-placeholder[_ngcontent-%COMP%] {\r\n  font-size: 100%;\r\n  transform: translate3d(0, -110%, 0);\r\n  opacity: 1;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  margin: 1%;\r\n}\r\n\r\n#btn1[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n padding: 10px;\r\n\r\n}\r\n\r\n#btn2[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  padding: 10px;\r\n  \r\n}\r\n\r\n#btn3[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n  padding: 10px;\r\n}\r\n\r\n#btn4[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n  padding: 10px;\r\n}\r\n\r\n#text[_ngcontent-%COMP%]{\r\n  color: black;\r\n  font-size: large;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztDQUNaLGFBQWE7O0FBRWQ7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTs7QUFFZjs7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQiLCJmaWxlIjoidmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZzogN3B4IDAgMCAxM3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMgKyAuZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyLFxyXG4uZm9ybS1jb250cm9sOnZhbGlkICsgLmZvcm0tY29udHJvbC1wbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTExMCUsIDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmJ1dHRvbntcclxuICBtYXJnaW46IDElO1xyXG59XHJcbiNidG4xe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxuI2J0bjJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG59XHJcbiNidG4ze1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4jYnRuNHtcclxuICB3aWR0aDogNzAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuI3RleHR7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG59Il19 */"] });


/***/ }),

/***/ "FMhs":
/*!****************************************************************!*\
  !*** ./src/app/workout-template/workout-template.component.ts ***!
  \****************************************************************/
/*! exports provided: WorkoutTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutTemplateComponent", function() { return WorkoutTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WorkoutTemplateComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkoutTemplateComponent.ɵfac = function WorkoutTemplateComponent_Factory(t) { return new (t || WorkoutTemplateComponent)(); };
WorkoutTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkoutTemplateComponent, selectors: [["app-workout-template"]], decls: 12, vars: 0, consts: [[1, "container"], [1, "col-md-12", "mx-auto"], ["id", "input1", 1, "form-control", "form1"], [1, "col-md-10", "mx-auto"], [1, "btn", "btn-primary", 2, "padding", "1%", "margin", "2px", "width", "100px"], [1, "btn", "btn-primary", 2, "padding", "1%", "margin", "8px", "width", "100px"]], template: function WorkoutTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 1rem;\r\n    margin-bottom: 1rem;\r\n    \r\n    background-color: #edffa9;\r\n    border-radius: 10px;\r\n    border:2px solid black;\r\n    box-shadow: green;\r\n    margin-top: 20px;\r\n    padding-top: 10px;\r\n    \r\n}\r\n.btn.btn-primary[_ngcontent-%COMP%]{\r\n    \r\n    position: relative;\r\n}\r\n.form-control.form1[_ngcontent-%COMP%]{\r\n    box-shadow: cornflowerblue;\r\n    position: relative;\r\n}\r\n.button-container[_ngcontent-%COMP%]{\r\n    \r\n    position:static;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtvdXQtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBOzs7R0FHRyIsImZpbGUiOiJ3b3Jrb3V0LXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZmZhOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogZ3JlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBcclxufVxyXG4uYnRuLmJ0bi1wcmltYXJ5e1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZvcm0tY29udHJvbC5mb3JtMXtcclxuICAgIGJveC1zaGFkb3c6IGNvcm5mbG93ZXJibHVlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lcntcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxNTBweDsgKi9cclxuICAgIHBvc2l0aW9uOnN0YXRpYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDg5MnB4KVxyXG57ICAgIFxyXG4gICAgLmZvcm0tZ3JvdXAgLmNvbC1tZC0xMnt3aWR0aDozMDBweDt9IFxyXG59ICovIl19 */"] });


/***/ }),

/***/ "JE3I":
/*!******************************************************!*\
  !*** ./src/app/end-workout/end-workout.component.ts ***!
  \******************************************************/
/*! exports provided: EndWorkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndWorkoutComponent", function() { return EndWorkoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Workout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Workout */ "mgXb");
/* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workout.service */ "8v5d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class EndWorkoutComponent {
    constructor(workoutService) {
        this.workoutService = workoutService;
        this.workout = new _Workout__WEBPACK_IMPORTED_MODULE_2__["Workout"]();
        this.workoutSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.parent = { button: "Update" };
    }
    successHandler(result) {
        this.workoutSuccess.emit(result);
    }
    putWorkout() {
        if (!this.workoutService.validateWorkout(this.workout)) {
            return;
        }
        this.workout.status = "CLOSED";
        let newWorkout = new _Workout__WEBPACK_IMPORTED_MODULE_2__["Workout"]();
        newWorkout.title = this.workout.title;
        newWorkout.note = this.workout.note;
        newWorkout.caloriesBurnt = this.workout.caloriesBurnt;
        newWorkout.category = this.workout.category;
        newWorkout.status = "OPEN";
        let tempdate = this.workout.endDateTime + '.000+05:30';
        this.workout.endDateTime = tempdate;
        function setDelay() {
            setTimeout(function () {
            }, 4000);
        }
        const promise = this.workoutService.putWorkout(this.workout);
        promise.subscribe(response => {
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Ended!', 'Workout Ended Successfully!.', 'success');
            const promise1 = this.workoutService.postWorkout(newWorkout);
            promise1.subscribe(response => {
                console.log(response);
                //alert("Workout created..");
                //this.successHandler('1');
            }, error => {
                console.log(error);
                if (error.status != 201) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Failed!', 'Workout Failed while updating! ' + error.error);
                }
            });
            setDelay();
            this.successHandler('1');
        }, error => {
            console.log(error);
            if (error.status != 201) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Failed!', 'Workout Creation Failed ! ' + error.error);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Ended!', 'Workout Ended Successfully!.', 'success');
            }
        });
    }
    ngOnInit() {
    }
}
EndWorkoutComponent.ɵfac = function EndWorkoutComponent_Factory(t) { return new (t || EndWorkoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workout_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutService"])); };
EndWorkoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EndWorkoutComponent, selectors: [["app-end-workout"]], inputs: { workout: "workout" }, outputs: { workoutSuccess: "workoutSuccess" }, decls: 26, vars: 3, consts: [[1, "container", "my-5"], [1, "row"], [1, "col-md-6", "mx-auto"], [1, "form-group"], [1, "bn"], ["type", "text", "id", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "note", "id", "note", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "datetime-local", "id", "inputstartdate", "placeholder", "Start Date", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-inline", 2, "margin", "4%", "justify-content", "center"], ["type", "button", "id", "btn1", 1, "btn", "btn-success", 3, "click"], ["type", "button", "id", "btn2", 1, "btn", "btn-danger", 3, "click"]], template: function EndWorkoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EndWorkoutComponent_Template_input_ngModelChange_8_listener($event) { return ctx.workout.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EndWorkoutComponent_Template_textarea_ngModelChange_14_listener($event) { return ctx.workout.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Enter End Date and Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EndWorkoutComponent_Template_input_ngModelChange_19_listener($event) { return ctx.workout.endDateTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EndWorkoutComponent_Template_button_click_21_listener() { return ctx.putWorkout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EndWorkoutComponent_Template_button_click_24_listener() { return ctx.successHandler("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workout.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workout.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workout.endDateTime);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 1.5rem;\r\n  }\r\n  \r\n  .form-control-placeholder[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    padding: 7px 0 0 13px;\r\n    transition: all 200ms;\r\n    opacity: 0.5;\r\n  }\r\n  \r\n  .form-control[_ngcontent-%COMP%]:focus    + .form-control-placeholder[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:valid    + .form-control-placeholder[_ngcontent-%COMP%] {\r\n    font-size: 100%;\r\n    transform: translate3d(0, -110%, 0);\r\n    opacity: 1;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none; \r\n    margin: 0; \r\n  }\r\n  \r\n  #btn1[_ngcontent-%COMP%]{\r\n  width: 65%;\r\n  padding-right: 5px;\r\n}\r\n  \r\n  #btn2[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n}\r\n  \r\n  .bn[_ngcontent-%COMP%]:after {\r\n  content:\" *\";\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZC13b3Jrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsd0JBQXdCO0lBQ3hCLFNBQVM7RUFDWDs7RUFFRjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaIiwiZmlsZSI6ImVuZC13b3Jrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcGFkZGluZzogN3B4IDAgMCAxM3B4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sOmZvY3VzICsgLmZvcm0tY29udHJvbC1wbGFjZWhvbGRlcixcclxuICAuZm9ybS1jb250cm9sOnZhbGlkICsgLmZvcm0tY29udHJvbC1wbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMTAlLCAwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiBcclxuICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG4gIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcclxuICAgIG1hcmdpbjogMDsgXHJcbiAgfVxyXG5cclxuI2J0bjF7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuI2J0bjJ7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uYm46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6XCIgKlwiO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Jw8o":
/*!****************************************************************!*\
  !*** ./src/app/category-workout/category-workout.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoryWorkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryWorkoutComponent", function() { return CategoryWorkoutComponent; });
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Category */ "csLA");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "rx/G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");







function CategoryWorkoutComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryWorkoutComponent_tr_18_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const category_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.update1(i_r2, category_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryWorkoutComponent_tr_18_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const category_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.deleteCategory(category_r1.id, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r1.title);
} }
class CategoryWorkoutComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.category = new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]();
    }
    saveCategory() {
        const observable = this.categoryService.addCategory(this.category);
        observable.subscribe(response => {
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("category added succesfully..");
            window.location.reload();
        }, error => {
            console.log(error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("error happened" + error.error);
        });
    }
    deleteCategory(id, index) {
        let ask = confirm("Please confirm for deletion: ");
        if (!ask) {
            return;
        }
        const observable = this.categoryService.delete(id);
        observable.subscribe(response => {
            this.categoryArray.splice(index, 1);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Category deleted...");
        });
    }
    update1(index, id) {
        console.log(this.categoryArray[index].title);
        let ask = prompt("Enter category");
        if (ask === '') {
            return;
        }
        this.category.title = ask;
        console.log(this.category.title);
        const observable = this.categoryService.update(id, this.category);
        observable.subscribe(response => {
            this.categoryArray[index].title = ask;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Category updated");
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Error Occured - " + error.error);
        });
    }
    ngOnInit() {
        const observable = this.categoryService.getAllCategories();
        observable.subscribe(response => {
            console.log(response);
            this.categoryArray = response;
        });
    }
}
CategoryWorkoutComponent.ɵfac = function CategoryWorkoutComponent_Factory(t) { return new (t || CategoryWorkoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"])); };
CategoryWorkoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategoryWorkoutComponent, selectors: [["app-category-workout"]], decls: 20, vars: 6, consts: [["id", "showView"], [1, "row", "mt-md-4"], [1, "col-md-7", "mx-auto"], [1, "form-group"], [1, "d-flex", "justify-content-left"], ["type", "text", "id", "inputCalories", "placeholder", "Add category", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-link", 2, "padding", "1%", "border", "2px solid blue", "width", "10%", 3, "click"], [1, "fas", "fa-plus"], ["type", "text", "id", "title", "placeholder", "Search here...", "required", "", 1, "form-control", 2, "margin-bottom", "2%", 3, "ngModel", "ngModelChange"], [1, "container"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content", 2, "margin-left", "70%"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "far", "fa-trash-alt"]], template: function CategoryWorkoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoryWorkoutComponent_Template_input_ngModelChange_11_listener($event) { return ctx.category.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryWorkoutComponent_Template_button_click_12_listener() { return ctx.saveCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoryWorkoutComponent_Template_input_ngModelChange_14_listener($event) { return ctx.searchedKeyword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CategoryWorkoutComponent_tr_18_Template, 9, 1, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.category.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchedKeyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 3, ctx.categoryArray, ctx.searchedKeyword));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"]], styles: [".form-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 8%;\r\n  }\r\n  \r\n  .form-control-placeholder[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    padding: 7px 0 0 13px;\r\n    transition: all 200ms;\r\n    opacity: 0.5;\r\n  }\r\n  \r\n  .form-control[_ngcontent-%COMP%]:focus    + .form-control-placeholder[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:valid    + .form-control-placeholder[_ngcontent-%COMP%] {\r\n    font-size: 100%;\r\n    transform: translate3d(0, -110%, 0);\r\n    opacity: 1;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 2%;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n    margin-left:2%;\r\n    justify-content: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXdvcmtvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBOztJQUVFLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJjYXRlZ29yeS13b3Jrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbC1wbGFjZWhvbGRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiA3cHggMCAwIDEzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXMgKyAuZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyLFxyXG4gIC5mb3JtLWNvbnRyb2w6dmFsaWQgKyAuZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTExMCUsIDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6MiU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgIl19 */"] });


/***/ }),

/***/ "Or+w":
/*!**********************************************************!*\
  !*** ./src/app/start-workout/start-workout.component.ts ***!
  \**********************************************************/
/*! exports provided: StartWorkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartWorkoutComponent", function() { return StartWorkoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Workout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Workout */ "mgXb");
/* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workout.service */ "8v5d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class StartWorkoutComponent {
    constructor(workoutService) {
        this.workoutService = workoutService;
        this.workout = new _Workout__WEBPACK_IMPORTED_MODULE_2__["Workout"]();
        this.workoutSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.parent = { button: "Update" };
    }
    successHandler(result) {
        this.workoutSuccess.emit(result);
    }
    putWorkout() {
        if (!this.workoutService.validateWorkout(this.workout)) {
            return;
        }
        function setDelay() {
            setTimeout(function () {
            }, 4000);
        }
        let tempdate = this.workout.startDateTime + '.000+05:30';
        this.workout.startDateTime = tempdate;
        const promise = this.workoutService.putWorkout(this.workout);
        promise.subscribe(response => {
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Satred!', 'Workout Satred Successfully!.', 'success');
            setDelay();
            this.successHandler('1');
        }, error => {
            console.log(error);
            if (error.status != 201) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Failed!', 'Workout Start Failed ! ' + error.error);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Satred!', 'Workout Satred Successfully!.', 'success');
            }
        });
    }
    ngOnInit() {
    }
}
StartWorkoutComponent.ɵfac = function StartWorkoutComponent_Factory(t) { return new (t || StartWorkoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workout_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutService"])); };
StartWorkoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartWorkoutComponent, selectors: [["app-start-workout"]], inputs: { workout: "workout" }, outputs: { workoutSuccess: "workoutSuccess" }, decls: 27, vars: 3, consts: [[1, "container", "my-5"], [1, "row"], [1, "col-md-6", "mx-auto"], [1, "form-group"], [1, "bn"], ["type", "text", "id", "title", "required", "", "length", "500", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "note", "id", "note", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "datetime-local", "id", "inputstartdate", "placeholder", "Start Date", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-inline", 2, "margin", "4%", "justify-content", "center"], ["type", "button", "id", "btn1", 1, "btn", "btn-success", 3, "click"], ["type", "button", "id", "btn2", 1, "btn", "btn-danger", 3, "click"]], template: function StartWorkoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StartWorkoutComponent_Template_input_ngModelChange_8_listener($event) { return ctx.workout.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StartWorkoutComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.workout.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter Start Date and Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StartWorkoutComponent_Template_input_ngModelChange_20_listener($event) { return ctx.workout.startDateTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartWorkoutComponent_Template_button_click_22_listener() { return ctx.putWorkout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartWorkoutComponent_Template_button_click_25_listener() { return ctx.successHandler("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workout.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workout.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workout.startDateTime);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 1.5rem;\r\n  }\r\n  \r\n  .form-control-placeholder[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    padding: 7px 0 0 13px;\r\n    transition: all 200ms;\r\n    opacity: 0.5;\r\n  }\r\n  \r\n  .form-control[_ngcontent-%COMP%]:focus    + .form-control-placeholder[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:valid    + .form-control-placeholder[_ngcontent-%COMP%] {\r\n    font-size: 100%;\r\n    transform: translate3d(0, -110%, 0);\r\n    opacity: 1;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none; \r\n    margin: 0; \r\n  }\r\n  \r\n  #btn1[_ngcontent-%COMP%]{\r\n  width: 65%;\r\n  padding-right: 5px;\r\n}\r\n  \r\n  #btn2[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n}\r\n  \r\n  .bn[_ngcontent-%COMP%]:after {\r\n  content:\" *\";\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LXdvcmtvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBOztJQUVFLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSx3QkFBd0I7SUFDeEIsU0FBUztFQUNYOztFQUVGO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLFVBQVU7QUFDWjs7RUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1oiLCJmaWxlIjoic3RhcnQtd29ya291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDdweCAwIDAgMTNweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyArIC5mb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIsXHJcbiAgLmZvcm0tY29udHJvbDp2YWxpZCArIC5mb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTEwJSwgMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcclxuICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyBcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXHJcbiAgICBtYXJnaW46IDA7IFxyXG4gIH1cclxuXHJcbiNidG4xe1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbiNidG4ye1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuLmJuOmFmdGVyIHtcclxuICBjb250ZW50OlwiICpcIjtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'WorkoutFrontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TCBu":
/*!**********************************************************!*\
  !*** ./src/app/track-workout/track-workout.component.ts ***!
  \**********************************************************/
/*! exports provided: TrackWorkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackWorkoutComponent", function() { return TrackWorkoutComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workout.service */ "8v5d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TrackWorkoutComponent_tr_31_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", w1_r1.note, "");
} }
function TrackWorkoutComponent_tr_31_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrackWorkoutComponent_tr_31_td_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const w1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.show(w1_r1.note); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, w1_r1.note, 0, 10), "..");
} }
function TrackWorkoutComponent_tr_31_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", w1_r1.comment, "");
} }
function TrackWorkoutComponent_tr_31_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrackWorkoutComponent_tr_31_td_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const w1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.show(w1_r1.comment); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, w1_r1.comment, 0, 10), "..");
} }
function TrackWorkoutComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TrackWorkoutComponent_tr_31_td_3_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TrackWorkoutComponent_tr_31_td_4_Template, 6, 5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TrackWorkoutComponent_tr_31_td_11_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TrackWorkoutComponent_tr_31_td_12_Template, 6, 5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrackWorkoutComponent_tr_31_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const w1_r1 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.deleteWorkout(w1_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w1_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](w1_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", w1_r1.note.length < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(w1_r1.note.length < 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, w1_r1.startDateTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 10, w1_r1.endDateTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", w1_r1.comment == undefined || w1_r1.comment.length < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(w1_r1.comment == undefined || w1_r1.comment.length < 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](w1_r1.category);
} }
class TrackWorkoutComponent {
    constructor(workoutService) {
        this.workoutService = workoutService;
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [], label: 'Best Fruits' }
        ];
    }
    deleteWorkout(id) {
    }
    show(synopsis) {
        document.getElementById('showSynopsis').innerHTML = synopsis;
        return document.getElementById('synopsisButton').click();
    }
    showChart() {
        const promise = this.workoutService.getTrackWorkout(this.trackDate);
        promise.subscribe(response => {
            console.log(response);
            this.workoutArray = response;
            for (let i = 0; i < this.workoutArray.length; i++) {
                if (this.workoutArray[i].endDateTime == null)
                    continue;
                // let tx:Date=this.workoutArray[i].startDateTime;
                // let txx:Date=this.workoutArray[i].endDateTime;
                // console.log((tx.getTime()))
                var time = new Date(this.workoutArray[i].startDateTime).getTime() - new Date(this.workoutArray[i].endDateTime).getTime();
                //return diffInMs / 1000;
                // var diff =(this.workoutArray[i].startDateTime.parse- this.workoutArray[i].endDateTime.parse) / 1000;
                //diff /= 60;
                console.log(Math.abs(Math.round((time / 1000) * this.workoutArray[i].caloriesBurnt)));
                this.barChartData[0].data[i] = Math.abs(Math.round((time / 1000) * this.workoutArray[i].caloriesBurnt));
                this.barChartLabels[i] = this.workoutArray[i].title;
            }
            // Swal.fire(
            //   'Success!',
            //   'Workout Satred Successfully!.',
            //   'success'
            // )
            //this.successHandler('1');
        }, error => {
            console.log(error);
            if (error.status != 201) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Failed!', 'Workout  Failed ! ' + error.error);
            }
            else { }
        });
    }
    ngOnInit() {
    }
}
TrackWorkoutComponent.ɵfac = function TrackWorkoutComponent_Factory(t) { return new (t || TrackWorkoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_workout_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutService"])); };
TrackWorkoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrackWorkoutComponent, selectors: [["app-track-workout"]], decls: 49, vars: 8, consts: [["id", "showView"], [1, "row", "mt-md-6"], [1, "col-md-8", "mx-auto"], [1, "form-group"], ["id", "inputDate", 2, "margin-left", "33%", "width", "100%"], ["type", "date", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"], [1, "col-md-10", "mx-auto"], [1, "chart-wrapper"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"], [1, "table-responsive"], [1, "table", "table-bordered"], [2, "text-align-last", "center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "showmore"], ["data-toggle", "modal", "data-target", "#myModal", "id", "synopsisButton", 1, "btn", "btn-link", "btn-lg", 2, "display", "none"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title", 2, "float", "left"], ["id", "showSynopsis", 1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [4, "ngIf"], ["onMouseOver", "this.style.color='#FF0000'", "onMouseOut", "this.style.color='#337ab7'", "type", "button", 1, "btn", "btn-link", 3, "click"], [1, "fas", "fa-trash"], [1, "btn", "btn-link", "btn-xs", 3, "click"]], template: function TrackWorkoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TrackWorkoutComponent_Template_input_ngModelChange_5_listener($event) { return ctx.trackDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrackWorkoutComponent_Template_button_click_6_listener() { return ctx.showChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " get data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "thead", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Started On");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Ended On");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, TrackWorkoutComponent_tr_31_Template, 19, 12, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.trackDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.workoutArray);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: ["body[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'arial', sans-serif;\r\n  background: #eeeeee;\r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n  max-width: 560px;\r\n  margin: 100px auto;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: block;\r\n}\r\nlabel[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n  border-radius: 0;\r\n  outline: none;\r\n  height: 45px;\r\n  width: 100%;\r\n  font-size: 16px;\r\n  margin: 0 0 30px 0;\r\n  padding: 0;\r\n  box-shadow: none;\r\n  box-sizing: content-box;\r\n  transition: all .3s;\r\n}\r\nlabel[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:valid    + span[_ngcontent-%COMP%] {\r\n  transform: translateY(-25px) scale(0.8);\r\n  transform-origin: 0;\r\n}\r\nlabel[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:valid {\r\n  border-bottom: 1px solid #3F51B5;\r\n  box-shadow: 0 1px 0 0 #3F51B5;\r\n}\r\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  color: #9e9e9e;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  font-size: 16px;\r\n  cursor: text;\r\n  transition: .2s ease-out;\r\n}\r\nlabel[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus    + span[_ngcontent-%COMP%] {\r\n  transform: translateY(-25px) scale(0.8);\r\n  transform-origin: 0;\r\n  color: #3F51B5;\r\n}\r\nlabel[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus {\r\n  border-bottom: 1px solid #3F51B5;\r\n  box-shadow: 0 1px 0 0 #3F51B5;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  margin:5%;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n  margin-top: 10%;\r\n}\r\n.navbar[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  border-radius: 0;\r\n}\r\n.row.content[_ngcontent-%COMP%] {\r\n    height: 450px\r\n}\r\n.sidenav[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  background-color: #f1f1f1;\r\n  height: 100%;\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n  background-color: #555;\r\n  color: white;\r\n  padding: 15px;\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .sidenav[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    padding: 15px;\r\n  }\r\n  .row.content[_ngcontent-%COMP%] {height:auto;}\r\n}\r\np[_ngcontent-%COMP%]{\r\n  text-align: justify;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n  height: 100px;\r\n  width: 150px;\r\n}\r\n.well[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  align-content: center;\r\n  padding: 2px;\r\n}\r\n#logo[_ngcontent-%COMP%]{\r\n  height: 35px;\r\n  width: 180px;\r\n}\r\n.jumbotron[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n.buttonStyling[_ngcontent-%COMP%]{\r\n  border-color: #008CBA;\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\n.buttonStyling[_ngcontent-%COMP%]:hover {\r\n  background-color: #008CBA;\r\n  color: white;\r\n}\r\n#updateDetails[_ngcontent-%COMP%]{\r\n  visibility: hidden;\r\n}\r\n.submitButton[_ngcontent-%COMP%]{\r\n  width:50%;\r\n  align-self:center;\r\n  padding: 10px;\r\n  border-color: seagreen;\r\n}\r\n.submitButton[_ngcontent-%COMP%]:hover {\r\n  background-color: seagreen;\r\n  color: white;\r\n}\r\n.column[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n  padding: 10px;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n  display:inline-block;\r\n  width:200px;\r\n  margin-right:5px;\r\n  text-align:left;\r\n  }\r\ninput[_ngcontent-%COMP%]{\r\n  margin-bottom: 15px;\r\n  }\r\nfieldset[_ngcontent-%COMP%]{\r\n  border:none;\r\n  width:500px;\r\n  margin:0px auto;\r\n  }\r\n#column1[_ngcontent-%COMP%], #column2[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n  background-color: silver;\r\n}\r\n#bugDetails[_ngcontent-%COMP%]{\r\n  visibility: visible;\r\n}\r\n#updateBugDetails[_ngcontent-%COMP%]{\r\n  visibility: hidden;\r\n}\r\n#toast[_ngcontent-%COMP%] {\r\nvisibility: hidden;\r\nmin-width: 250px;\r\nmargin-left: -125px;\r\nbackground-color: mediumaquamarine;\r\ncolor: black;\r\ntext-align: center;\r\nborder-radius: 2px;\r\npadding: 16px;\r\nposition: fixed;\r\nz-index: 1;\r\nleft: 50%;\r\nbottom: 30px;\r\n}\r\n#toast.show[_ngcontent-%COMP%] {\r\nvisibility: visible;\r\nanimation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@keyframes fadein {\r\nfrom {bottom: 0; opacity: 0;}\r\nto {bottom: 20px; opacity: 1;}\r\n}\r\n@keyframes fadeout {\r\nfrom {bottom: 20px; opacity: 1;}\r\nto {bottom: 0; opacity: 0;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrLXdvcmtvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGVBQWU7RUFDZixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQSxjQUFjLFdBQVcsQ0FBQztBQUM1QjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Y7QUFFRjtFQUNFLG1CQUFtQjtFQUNuQjtBQUVBO0VBQ0EsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2Y7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLGtDQUFrQztBQUNsQyxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsZUFBZTtBQUNmLFVBQVU7QUFDVixTQUFTO0FBQ1QsWUFBWTtBQUNaO0FBRUE7QUFDQSxtQkFBbUI7QUFFbkIseUNBQXlDO0FBQ3pDO0FBRUEsbUJBQW1CO0FBTW5CO0FBQ0EsTUFBTSxTQUFTLEVBQUUsVUFBVSxDQUFDO0FBQzVCLElBQUksWUFBWSxFQUFFLFVBQVUsQ0FBQztBQUM3QjtBQU9BO0FBQ0EsTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUMxQiIsImZpbGUiOiJ0cmFjay13b3Jrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ2FyaWFsJywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDU2MHB4O1xyXG4gIG1hcmdpbjogMTAwcHggYXV0bztcclxufVxyXG5sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmxhYmVsID4gaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZTllOWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAwIDAgMzBweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcbmxhYmVsID4gaW5wdXQ6dmFsaWQgKyBzcGFuIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpIHNjYWxlKDAuOCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMDtcclxufVxyXG5sYWJlbCA+IGlucHV0OnZhbGlkIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNGNTFCNTtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIDAgIzNGNTFCNTtcclxufVxyXG5sYWJlbCA+IHNwYW4ge1xyXG4gIGNvbG9yOiAjOWU5ZTllO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY3Vyc29yOiB0ZXh0O1xyXG4gIHRyYW5zaXRpb246IC4ycyBlYXNlLW91dDtcclxufVxyXG5sYWJlbCA+IGlucHV0OmZvY3VzICsgc3BhbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KSBzY2FsZSgwLjgpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDA7XHJcbiAgY29sb3I6ICMzRjUxQjU7XHJcbn1cclxubGFiZWwgPiBpbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzRjUxQjU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICMzRjUxQjU7XHJcbn1cclxuYnV0dG9ue1xyXG4gIG1hcmdpbjo1JTtcclxufVxyXG50YWJsZXtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ucm93LmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA0NTBweFxyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICAucm93LmNvbnRlbnQge2hlaWdodDphdXRvO31cclxufVxyXG5cclxucHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi53ZWxse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbiNsb2dve1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb257XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvblN0eWxpbmd7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA4Q0JBO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJ1dHRvblN0eWxpbmc6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jdXBkYXRlRGV0YWlsc3tcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zdWJtaXRCdXR0b257XHJcbiAgd2lkdGg6NTAlO1xyXG4gIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBzZWFncmVlbjtcclxufVxyXG4uc3VibWl0QnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWFncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbHVtbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDoyMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB9XHJcblxyXG5pbnB1dHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgZmllbGRzZXR7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luOjBweCBhdXRvO1xyXG4gIH1cclxuXHJcbiNjb2x1bW4xLCNjb2x1bW4yLGJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcblxyXG4jYnVnRGV0YWlsc3tcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4jdXBkYXRlQnVnRGV0YWlsc3tcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbiN0b2FzdCB7XHJcbnZpc2liaWxpdHk6IGhpZGRlbjtcclxubWluLXdpZHRoOiAyNTBweDtcclxubWFyZ2luLWxlZnQ6IC0xMjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtYXF1YW1hcmluZTtcclxuY29sb3I6IGJsYWNrO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6IDJweDtcclxucGFkZGluZzogMTZweDtcclxucG9zaXRpb246IGZpeGVkO1xyXG56LWluZGV4OiAxO1xyXG5sZWZ0OiA1MCU7XHJcbmJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI3RvYXN0LnNob3cge1xyXG52aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4td2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG5hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxufVxyXG5cclxuLyogZm9yIGFuaW1hdGlvbnMgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbmZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbnRvIHtib3R0b206IDIwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbmZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbnRvIHtib3R0b206IDIwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XHJcbmZyb20ge2JvdHRvbTogMjBweDsgb3BhY2l0eTogMTt9XHJcbnRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xyXG5mcm9tIHtib3R0b206IDIwcHg7IG9wYWNpdHk6IDE7fVxyXG50byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _start_workout_start_workout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start-workout/start-workout.component */ "Or+w");
/* harmony import */ var _end_workout_end_workout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./end-workout/end-workout.component */ "JE3I");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workout-form/workout-form.component */ "Zmvq");
/* harmony import */ var _create_workout_create_workout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-workout/create-workout.component */ "dkcR");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/view.component */ "FJD2");
/* harmony import */ var _workout_template_workout_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workout-template/workout-template.component */ "FMhs");
/* harmony import */ var _update_workout_update_workout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update-workout/update-workout.component */ "3/9c");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _track_workout_track_workout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./track-workout/track-workout.component */ "TCBu");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _category_workout_category_workout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category-workout/category-workout.component */ "Jw8o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: 'create', component: _create_workout_create_workout_component__WEBPACK_IMPORTED_MODULE_8__["CreateWorkoutComponent"] },
                { path: 'category', component: _category_workout_category_workout_component__WEBPACK_IMPORTED_MODULE_17__["CategoryWorkoutComponent"] },
                { path: 'viewAll', component: _view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"] },
                { path: 'track', component: _track_workout_track_workout_component__WEBPACK_IMPORTED_MODULE_14__["TrackWorkoutComponent"] },
                { path: '', redirectTo: '/viewAll', pathMatch: 'full' }
            ], { useHash: true }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_7__["WorkoutFormComponent"],
        _create_workout_create_workout_component__WEBPACK_IMPORTED_MODULE_8__["CreateWorkoutComponent"],
        _view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"],
        _workout_template_workout_template_component__WEBPACK_IMPORTED_MODULE_10__["WorkoutTemplateComponent"],
        _end_workout_end_workout_component__WEBPACK_IMPORTED_MODULE_5__["EndWorkoutComponent"],
        _start_workout_start_workout_component__WEBPACK_IMPORTED_MODULE_4__["StartWorkoutComponent"],
        _update_workout_update_workout_component__WEBPACK_IMPORTED_MODULE_11__["UpdateWorkoutComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _start_workout_start_workout_component__WEBPACK_IMPORTED_MODULE_4__["StartWorkoutComponent"],
        _end_workout_end_workout_component__WEBPACK_IMPORTED_MODULE_5__["EndWorkoutComponent"],
        _track_workout_track_workout_component__WEBPACK_IMPORTED_MODULE_14__["TrackWorkoutComponent"],
        _category_workout_category_workout_component__WEBPACK_IMPORTED_MODULE_17__["CategoryWorkoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipeModule"]] }); })();


/***/ }),

/***/ "Zmvq":
/*!********************************************************!*\
  !*** ./src/app/workout-form/workout-form.component.ts ***!
  \********************************************************/
/*! exports provided: WorkoutFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutFormComponent", function() { return WorkoutFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Workout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Workout */ "mgXb");
/* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workout.service */ "8v5d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function WorkoutFormComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.title);
} }
class WorkoutFormComponent {
    constructor(workoutService) {
        this.workoutService = workoutService;
        this.parent = { button: "gg" };
        this.workout = new _Workout__WEBPACK_IMPORTED_MODULE_2__["Workout"]();
        this.sendWorkouParentt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.successHandler1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    sendWorkout() {
        this.sendWorkouParentt.emit(this.workout);
    }
    sendWorkout1() {
        this.successHandler1.emit(this.workout);
    }
    // successHandler(result: string) {
    //   this.workoutSuccess.emit(result);
    // }
    cancelUpdate() {
    }
    caloriesPlusMinus(increment) {
        if (!(this.workout.caloriesBurnt + (increment * 0.1))) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Failed!', 'Calories Cant be zero or negative');
        }
        else {
            this.workout.caloriesBurnt += increment * 0.1;
            this.workout.caloriesBurnt = +this.workout.caloriesBurnt.toPrecision(3);
            document.getElementById('inputCalories').focus();
        }
    }
    ngOnInit() {
        const observable = this.workoutService.getCategories();
        observable.subscribe(response => {
            this.categories = response;
            if (this.categories[0] == undefined) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Failed!', 'No Records available  currently from server');
            }
        }, error => {
            if (error.status != 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Failed!', 'Unable to fetch records from server');
            }
        });
    }
}
WorkoutFormComponent.ɵfac = function WorkoutFormComponent_Factory(t) { return new (t || WorkoutFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workout_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutService"])); };
WorkoutFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkoutFormComponent, selectors: [["app-workout-form"]], inputs: { parent: "parent", workout: "workout" }, outputs: { sendWorkouParentt: "sendWorkouParentt", successHandler1: "successHandler1" }, decls: 25, vars: 6, consts: [[1, "form-group"], ["type", "text", "id", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "title", 1, "form-control-placeholder"], ["type", "note", "id", "note", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "note", 1, "form-control-placeholder"], [1, "d-flex", "justify-content-left"], ["type", "text", "id", "inputCalories", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputCalories", 1, "form-control-placeholder"], ["type", "button", 1, "btn", "btn-link", 2, "padding", "1%", "margin", "0px", 3, "click"], [1, "fas", "fa-plus"], [1, "fa", "fa-minus", "fa-spin"], ["id", "inputState", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "form-group", "form-inline", 2, "margin", "0%", "justify-content", "center"], ["type", "button", 1, "btn", "btn-success", 2, "width", "40%", 3, "click"], ["type", "button", "id", "cancelUpdate", 1, "btn", "btn-info", 2, "width", "30%", 3, "click"]], template: function WorkoutFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkoutFormComponent_Template_input_ngModelChange_1_listener($event) { return ctx.workout.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkoutFormComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.workout.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkoutFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.workout.caloriesBurnt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Calories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutFormComponent_Template_button_click_13_listener() { return ctx.caloriesPlusMinus(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutFormComponent_Template_button_click_15_listener() { return ctx.caloriesPlusMinus(-1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkoutFormComponent_Template_select_ngModelChange_18_listener($event) { return ctx.workout.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WorkoutFormComponent_option_19_Template, 2, 1, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutFormComponent_Template_button_click_21_listener() { return ctx.sendWorkout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutFormComponent_Template_button_click_23_listener() { return ctx.sendWorkout1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workout.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workout.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workout.caloriesBurnt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workout.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parent.button);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"]], styles: [".form-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 8%;\r\n}\r\n\r\n.form-control-placeholder[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  padding: 7px 0 0 13px;\r\n  transition: all 200ms;\r\n  opacity: 0.5;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus    + .form-control-placeholder[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:valid    + .form-control-placeholder[_ngcontent-%COMP%] {\r\n  font-size: 100%;\r\n  transform: translate3d(0, -110%, 0);\r\n  opacity: 1;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 2%;\r\n  width: 10%;\r\n  justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtvdXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04scUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJ3b3Jrb3V0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZzogN3B4IDAgMCAxM3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMgKyAuZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyLFxyXG4uZm9ybS1jb250cm9sOnZhbGlkICsgLmZvcm0tY29udHJvbC1wbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTExMCUsIDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDIlO1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "csLA":
/*!*****************************!*\
  !*** ./src/app/Category.ts ***!
  \*****************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "dkcR":
/*!************************************************************!*\
  !*** ./src/app/create-workout/create-workout.component.ts ***!
  \************************************************************/
/*! exports provided: CreateWorkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWorkoutComponent", function() { return CreateWorkoutComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Workout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Workout */ "mgXb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workout.service */ "8v5d");
/* harmony import */ var _workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workout-form/workout-form.component */ "Zmvq");





class CreateWorkoutComponent {
    constructor(workoutService) {
        this.workoutService = workoutService;
        this.title = "Create Workout";
        this.workout = new _Workout__WEBPACK_IMPORTED_MODULE_1__["Workout"]();
        this.parent = { button: "Add Workout" };
    }
    postWorkout(workoutTemp) {
        if (!this.workoutService.validateWorkout(workoutTemp)) {
            return;
        }
        const promise = this.workoutService.postWorkout(this.workout);
        promise.subscribe(response => {
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Created!', 'Workout Created Successfully!.', 'success');
        }, error => {
            console.log(error);
            if (error.status != 201) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Failed!', 'Workout Creation Failed ! ' + error.error);
                console.log(error.error);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Created!', 'Workout Created Successfully!.', 'success');
            }
        });
    }
    ngOnInit() {
    }
}
CreateWorkoutComponent.ɵfac = function CreateWorkoutComponent_Factory(t) { return new (t || CreateWorkoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_workout_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutService"])); };
CreateWorkoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateWorkoutComponent, selectors: [["app-create-workout"]], decls: 12, vars: 2, consts: [[1, "container", "my-5"], [1, "row"], [1, "col-md-8", "mx-auto"], [1, "display-4"], [2, "float", "right", "font-size", "1em"], [1, "fas", "fa-biking"], [2, "color", "red"], [1, "fas", "fa-heartbeat"], [3, "workout", "parent", "sendWorkouParentt"]], template: function CreateWorkoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Add Workout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "app-workout-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sendWorkouParentt", function CreateWorkoutComponent_Template_app_workout_form_sendWorkouParentt_11_listener($event) { return ctx.postWorkout($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("workout", ctx.workout)("parent", ctx.parent);
    } }, directives: [_workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_4__["WorkoutFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtd29ya291dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 0, consts: [[1, "nav"], ["type", "checkbox", "id", "nav-check"], [1, "nav-header"], [1, "nav-title"], [1, "nav-btn"], ["for", "nav-check"], [1, "nav-links"], ["routerLink", "/viewAll", "routerLinkActive", "active"], ["routerLink", "/create", "routerLinkActive", "active"], ["routerLink", "/category", "routerLinkActive", "active"], ["routerLink", "/track", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Workout Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "view All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Track");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  border: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  width: 100%;\r\n  background-color: #4d4d4d;\r\n  position: relative;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] > .nav-header[_ngcontent-%COMP%] {\r\n  display: inline;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] > .nav-header[_ngcontent-%COMP%] > .nav-title[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 22px;\r\n  color: #fff;\r\n  font-family: Georgia, serif;\r\n  padding: 10px 10px 10px 10px;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] > .nav-links[_ngcontent-%COMP%] {\r\n  display: inline;\r\n  font-size: 18px;\r\n  font-family: Georgia, serif;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] > .nav-links[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 13px 10px 13px 10px;\r\n  text-decoration: none;\r\n  color: #efefef;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] > .nav-links[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] > .nav-btn[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%] > #nav-check[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n@media (max-width:600px) {\r\n  .nav[_ngcontent-%COMP%]    > .nav-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n  }\r\n  .nav[_ngcontent-%COMP%]    > .nav-btn[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 13px;\r\n  }\r\n  .nav[_ngcontent-%COMP%]    > .nav-btn[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%]   #nav-check[_ngcontent-%COMP%]:checked    ~ .nav-btn[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n  }\r\n  .nav[_ngcontent-%COMP%]    > .nav-btn[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 25px;\r\n    height: 10px;\r\n    border-top: 2px solid #eee;\r\n  }\r\n  .nav[_ngcontent-%COMP%]    > .nav-links[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    background-color: #333;\r\n    height: 0px;\r\n    transition: all 0.3s ease-in;\r\n    overflow-y: hidden;\r\n    top: 50px;\r\n    left: 0px;\r\n  }\r\n  .nav[_ngcontent-%COMP%]    > .nav-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  .nav[_ngcontent-%COMP%]    > #nav-check[_ngcontent-%COMP%]:not(:checked)    ~ .nav-links[_ngcontent-%COMP%] {\r\n    height: 0px;\r\n  }\r\n  .nav[_ngcontent-%COMP%]    > #nav-check[_ngcontent-%COMP%]:checked    ~ .nav-links[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 50px);\r\n    overflow-y: auto;\r\n  }\r\n\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  background-color: rgba(92, 73, 255, 0.1);\r\n}\r\n\r\n.col-5[_ngcontent-%COMP%] {\r\n  float: center;\r\n  width: 25%;\r\n  margin-top: 6px;\r\n  margin-left: 20px;\r\n  padding-right: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.col-6[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n  margin-top: 6px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.lab[_ngcontent-%COMP%]{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: small;\r\n    font-weight: 500;\r\n    font-style: initial;\r\n    color: darkblue;\r\n}\r\n\r\n#bugName[_ngcontent-%COMP%]{\r\n    box-shadow: darkkhaki;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], date[_ngcontent-%COMP%]{\r\n  width: 60%;\r\n  padding: 6px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  float: center;\r\n  position: relative;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  padding: 10px 10px 0px 10px;\r\n  bottom: 0;\r\n  width: 100%;\r\n  \r\n  height: 60px;\r\n\r\n}\r\n\r\n.bn[_ngcontent-%COMP%]:after {\r\n  content:\" *\";\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7RUFDVjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0VBQ1g7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLGdCQUFnQjtFQUNsQjs7QUFFRjs7QUFDQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixZQUFZOztBQUVkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDRkNGQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2Pi5uYXYtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5uYXY+Lm5hdi1oZWFkZXI+Lm5hdi10aXRsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLm5hdj4ubmF2LWxpbmtzIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcclxufVxyXG5cclxuLm5hdj4ubmF2LWxpbmtzPmEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxM3B4IDEwcHggMTNweCAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2VmZWZlZjtcclxufVxyXG5cclxuLm5hdj4ubmF2LWxpbmtzPmE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLm5hdj4ubmF2LWJ0bixcclxuLm5hdj4jbmF2LWNoZWNrIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xyXG4gIC5uYXYgPiAubmF2LWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC5uYXYgPiAubmF2LWJ0biA+IGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuICB9XHJcbiAgLm5hdiA+IC5uYXYtYnRuID4gbGFiZWw6aG92ZXIsLm5hdiAgI25hdi1jaGVjazpjaGVja2VkIH4gLm5hdi1idG4gPiBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIC5uYXYgPiAubmF2LWJ0biA+IGxhYmVsID4gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlZWU7XHJcbiAgfVxyXG4gIC5uYXYgPiAubmF2LWxpbmtzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuICAubmF2ID4gLm5hdi1saW5rcyA+IGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm5hdiA+ICNuYXYtY2hlY2s6bm90KDpjaGVja2VkKSB+IC5uYXYtbGlua3Mge1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5uYXYgPiAjbmF2LWNoZWNrOmNoZWNrZWQgfiAubmF2LWxpbmtzIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcblxyXG59XHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgNzMsIDI1NSwgMC4xKTtcclxufVxyXG5cclxuLmNvbC01IHtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNvbC02IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5sYWJ7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zdHlsZTogaW5pdGlhbDtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxufVxyXG4jYnVnTmFtZXtcclxuICAgIGJveC1zaGFkb3c6IGRhcmtraGFraTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LGRhdGV7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmNvbC01LCAuY29sLTYsIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIEhlaWdodCBvZiB0aGUgZm9vdGVyKi9cclxuICBoZWlnaHQ6IDYwcHg7XHJcblxyXG59XHJcblxyXG4uYm46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6XCIgKlwiO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 37, vars: 0, consts: [[1, "footer-dark"], [1, "container"], [1, "row"], [1, "col-sm-6", "col-md-3", "item1"], ["href", "#"], [1, "col-sm-6", "col-md-3", "item2"], [1, "col-md-6", "item", "text"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fitness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Yoga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Gymnastics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Workout Buddy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Your ultimate workout trainer has arrived. Here you can track your daily exercises and maintain your good health.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Workout BUddy \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-dark[_ngcontent-%COMP%] {\r\n    padding:15px 0;\r\n    color:#f0f9ff;\r\n    background-color:#282d32;\r\n\r\n    left:0;\r\n    bottom: 0;\r\n    width:100%;\r\n    margin-top:10%;\r\n    \r\n  }\r\n\r\n  .footer-dark[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-top:0;\r\n    margin-bottom:12px;\r\n    font-weight:bold;\r\n    font-size:16px;\r\n  }\r\n\r\n  .footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding:0;\r\n    list-style:none;\r\n    line-height:1.6;\r\n    font-size:14px;\r\n    margin-bottom:0;\r\n  }\r\n\r\n  .footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color:inherit;\r\n    text-decoration:none;\r\n    opacity:0.6;\r\n  }\r\n\r\n  .footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    opacity:0.8;\r\n  }\r\n\r\n  @media (max-width:767px) {\r\n    .footer-dark[_ngcontent-%COMP%]   .item1[_ngcontent-%COMP%]:not(.social) {\r\n      text-align:center;\r\n      padding-bottom:10px;\r\n    }\r\n  }\r\n\r\n  @media (max-width:767px) {\r\n    .footer-dark[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]:not(.social) {\r\n      text-align:center;\r\n      padding-bottom:10px;\r\n    }\r\n  }\r\n\r\n  .footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%] {\r\n    margin-bottom:36px;\r\n  }\r\n\r\n  @media (max-width:767px) {\r\n    .footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%] {\r\n      margin-bottom:0;\r\n    }\r\n  }\r\n\r\n  .footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    opacity:0.6;\r\n    margin-bottom:0;\r\n  }\r\n\r\n  .footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] {\r\n    text-align:center;\r\n  }\r\n\r\n  @media (max-width:991px) {\r\n    .footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] {\r\n      text-align:center;\r\n      margin-top:20px;\r\n    }\r\n  }\r\n\r\n  .footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    font-size:20px;\r\n    width:36px;\r\n    height:36px;\r\n    line-height:36px;\r\n    display:inline-block;\r\n    text-align:center;\r\n    border-radius:50%;\r\n    box-shadow:0 0 0 1px rgba(255,255,255,0.4);\r\n    margin:0 8px;\r\n    color:#fff;\r\n    opacity:0.75;\r\n  }\r\n\r\n  \r\n\r\n  .footer-dark[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n    text-align:center;\r\n    padding-top:24px;\r\n    opacity:0.3;\r\n    font-size:13px;\r\n    margin-bottom:0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix3QkFBd0I7O0lBRXhCLE1BQU07SUFDTixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLG1CQUFtQjtJQUNyQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsbUJBQW1CO0lBQ3JCO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTs7S0FFRzs7RUFFSDtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0VBQ2pCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1kYXJrIHtcclxuICAgIHBhZGRpbmc6MTVweCAwO1xyXG4gICAgY29sb3I6I2YwZjlmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzI4MmQzMjtcclxuXHJcbiAgICBsZWZ0OjA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDoxMCU7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWRhcmsgaDMge1xyXG4gICAgbWFyZ2luLXRvcDowO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1kYXJrIHVsIHtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNjtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1kYXJrIHVsIGEge1xyXG4gICAgY29sb3I6aW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgb3BhY2l0eTowLjY7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWRhcmsgdWwgYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OjAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZm9vdGVyLWRhcmsgLml0ZW0xOm5vdCguc29jaWFsKSB7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5mb290ZXItZGFyayAuaXRlbTI6bm90KC5zb2NpYWwpIHtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWRhcmsgLml0ZW0udGV4dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjM2cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLmZvb3Rlci1kYXJrIC5pdGVtLnRleHQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWRhcmsgLml0ZW0udGV4dCBwIHtcclxuICAgIG9wYWNpdHk6MC42O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1kYXJrIC5pdGVtLnNvY2lhbCB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSB7XHJcbiAgICAuZm9vdGVyLWRhcmsgLml0ZW0uc29jaWFsIHtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb290ZXItZGFyayAuaXRlbS5zb2NpYWwgPiBhIHtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgd2lkdGg6MzZweDtcclxuICAgIGhlaWdodDozNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MzZweDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIGJveC1zaGFkb3c6MCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcclxuICAgIG1hcmdpbjowIDhweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBvcGFjaXR5OjAuNzU7XHJcbiAgfVxyXG5cclxuICAvKiAuZm9vdGVyLWRhcmsgLml0ZW0uc29jaWFsID4gYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OjAuOTtcclxuICB9ICovXHJcblxyXG4gIC5mb290ZXItZGFyayAuY29weXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6MjRweDtcclxuICAgIG9wYWNpdHk6MC4zO1xyXG4gICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "mgXb":
/*!****************************!*\
  !*** ./src/app/Workout.ts ***!
  \****************************/
/*! exports provided: Workout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workout", function() { return Workout; });
class Workout {
    constructor() {
        this.title = "default";
        this.caloriesBurnt = 1;
        this.category = "ACTIVE";
        this.status = "OPEN";
        this.started = "started";
    }
}


/***/ }),

/***/ "rx/G":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CategoryService {
    constructor(http) {
        this.http = http;
        this.URL = "";
    }
    ;
    addCategory(category) {
        return this.http.post(this.URL + 'category', category, { headers: { "content-type": 'application/json' }, responseType: "text" });
    }
    getAllCategories() {
        return this.http.get(this.URL + 'category');
    }
    delete(id) {
        return this.http.delete(this.URL + 'category' + '/' + id);
    }
    update(id, updatedBody) {
        const endpointURL = this.URL + 'category' + '/' + id;
        return this.http.put(endpointURL, updatedBody, { headers: { "content-type": 'application/json' }, responseType: "text" });
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map