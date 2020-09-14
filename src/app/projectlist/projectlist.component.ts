import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as $ from "jquery";

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {
  public year: string = '';
  public firstclick = 0;
  public secondclick = 0;
  public thirdclick = 0;
  public fourclick = 0;
  public fiveclick = 0;
  public sixclick = 0;
  public sevenclick = 0;
  public eightclick = 0;
  public nineclick = 0;
  public tenclick = 0;
  public elevenclick = 0;
  public twelveclick = 0;
  public thirteenclick = 0;
  public fourteenclick = 0;
  public fifteenclick = 0;
  public launchTrueclick = 0;
  public launchSuccess = '';
  public launchfalseclick = 0;
  public landtrueclick = 0;
  public landSuccess = '';
  public landfalseclick = 0;
  public openerrordialog: boolean = false;
  public spacexAllData: any = [];




  constructor(private http: HttpService) { }

  /**
   * 
   * @param value 
   */

  getFirstYearValue(value: any): void {
    var $inputs = $('button');
    this.firstclick = this.firstclick + 1;
    if (this.firstclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2006').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2006').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getSecondYearValue(value: any): void {
    var $inputs = $('button');
    this.secondclick = this.secondclick + 1;
    if (this.secondclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2007').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2007').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getThirdYearValue(value: any): void {
    var $inputs = $('button');
    this.thirdclick = this.thirdclick + 1;
    if (this.thirdclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2008').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2008').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getFourYearValue(value: any): void {
    var $inputs = $('button');
    this.fourclick = this.fourclick + 1;
    if (this.fourclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2009').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2009').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getFiveYearValue(value: any): void {
    var $inputs = $('button');
    this.fiveclick = this.fiveclick + 1;
    if (this.fiveclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2010').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2010').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getSixYearValue(value: any): void {
    var $inputs = $('button');
    this.sixclick = this.sixclick + 1;
    if (this.sixclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2011').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2011').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getSevenYearValue(value: any): void {
    var $inputs = $('button');
    this.sevenclick = this.sevenclick + 1;
    if (this.sevenclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2012').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2012').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getEightYearValue(value: any): void {
    var $inputs = $('button');
    this.eightclick = this.eightclick + 1;
    if (this.eightclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2013').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2013').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getNineYearValue(value: any): void {
    var $inputs = $('button');
    this.nineclick = this.nineclick + 1;
    if (this.nineclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2014').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2014').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getTenYearValue(value: any): void {
    var $inputs = $('button');
    this.tenclick = this.tenclick + 1;
    if (this.tenclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2015').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2015').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getElevenYearValue(value: any): void {
    var $inputs = $('button');
    this.elevenclick = this.elevenclick + 1;
    if (this.elevenclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2016').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2016').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getTwelveYearValue(value: any): void {
    var $inputs = $('button');
    this.twelveclick = this.twelveclick + 1;
    if (this.twelveclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2017').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2017').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getThirteenYearValue(value: any): void {
    var $inputs = $('button');
    this.thirteenclick = this.thirteenclick + 1;
    if (this.thirteenclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2018').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2018').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getFourteenYearValue(value: any): void {
    var $inputs = $('button');
    this.fourteenclick = this.fourteenclick + 1;
    if (this.fourteenclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2019').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2019').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getFifteenYearValue(value: any): void {
    var $inputs = $('button');
    this.fifteenclick = this.fifteenclick + 1;
    if (this.fifteenclick % 2 !== 0) {
      this.year = value;
      $inputs.not('#'+value+",[name=true], [name=false]").prop('disabled', true);
      document.getElementById('2020').style.background = '#28a745';
    } else {
      this.year = "";
      $inputs.prop('disabled', false);
      document.getElementById('2020').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getLaunchTrueValue(value: any): void {
    var $inputs = $('#SLF');
    this.launchTrueclick = this.launchTrueclick + 1;
    if (this.launchTrueclick % 2 !== 0) {
      this.launchSuccess = value;
      $inputs.prop('disabled', true);
      document.getElementById('SLT').style.background = '#28a745';
    } else {
      this.launchSuccess = "";
      $inputs.prop('disabled', false);
      document.getElementById('SLT').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getLaunchFalseValue(value: any): void {
    var $inputs = $('#SLT');
    this.launchfalseclick = this.launchfalseclick + 1;
    if (this.launchfalseclick % 2 !== 0) {
      this.launchSuccess = value;
      $inputs.prop('disabled', true);
      document.getElementById('SLF').style.background = '#28a745';
    } else {
      this.launchSuccess = "";
      $inputs.prop('disabled', false);
      document.getElementById('SLF').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getLandTrueValue(value: any): void {
    var $inputs = $('#landF');
    this.landtrueclick = this.landtrueclick + 1;
    if (this.landtrueclick % 2 !== 0) {
      this.landSuccess = value;
      $inputs.prop('disabled', true);
      document.getElementById('landT').style.background = '#28a745';
    } else {
      this.landSuccess = "";
      $inputs.prop('disabled', false);
      document.getElementById('landT').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * 
   * @param value 
   */

  getLandFalseValue(value: any): void {
    var $inputs = $('#landT');
    this.landfalseclick = this.landfalseclick + 1;
    if (this.landfalseclick % 2 !== 0) {
      this.landSuccess = value;
      $inputs.prop('disabled', true);
      document.getElementById('landF').style.background = '#28a745';
    } else {
      this.landSuccess = "";
      $inputs.prop('disabled', false);
      document.getElementById('landF').style.background = 'lightgreen';
    }
    this.applyFilter();
  }

  /**
   * Applies the filter according to the selection made.
   */

  applyFilter(): void {
    if (this.year !== "" && this.launchSuccess == "" && this.landSuccess == "") {
      let params = '&launch_year=' + this.year;
      this.http.getData(this.http.dataUrl + params).subscribe((data) => {
        this.spacexAllData = [];
        this.spacexAllData = data;
        this.openerrordialog = false;
        if (this.spacexAllData.length == 0) {
          this.openerrordialog = true;
        }
      })
    }

    else if (this.year == "" && this.launchSuccess !== "" && this.landSuccess == "") {
      let params = '&launch_success=' + this.launchSuccess;
      this.http.getData(this.http.dataUrl + params).subscribe((data) => {
        this.spacexAllData = [];
        this.spacexAllData = data;
        this.openerrordialog = false;
        if (this.spacexAllData.length == 0) {
          this.openerrordialog = true;
        }
      })
    }

    else if (this.year !== "" && this.launchSuccess !== "" && this.landSuccess == "") {
      let params = '&launch_success=' + this.launchSuccess + '&launch_year=' + this.year;
      this.http.getData(this.http.dataUrl + params).subscribe((data) => {
        this.spacexAllData = [];
        this.spacexAllData = data;
        this.openerrordialog = false;
        if (this.spacexAllData.length == 0) {
          this.openerrordialog = true;
        }
      })
    }

    else if (this.year !== "" && this.launchSuccess == "" && this.landSuccess !== "") {
      let params = '&land_success=' + this.landSuccess + '&launch_year=' + this.year;
      this.http.getData(this.http.dataUrl + params).subscribe((data) => {
        this.spacexAllData = [];
        this.spacexAllData = data;
        this.openerrordialog = false;
        if (this.spacexAllData.length == 0) {
          this.openerrordialog = true;
        }
      })
    }

    else if (this.year == "" && this.launchSuccess == "" && this.landSuccess !== "") {
      let params = '&land_success=' + this.landSuccess;
      this.http.getData(this.http.dataUrl + params).subscribe((data) => {
        this.spacexAllData = [];
        this.spacexAllData = data;
        this.openerrordialog = false;
        if (this.spacexAllData.length == 0) {
          this.openerrordialog = true;
        }
      })
    }

    else if (this.year == "" && this.launchSuccess !== "" && this.landSuccess !== "") {
      let params = '&launch_success=' + this.launchSuccess + '&land_success=' + this.landSuccess;
      this.http.getData(this.http.dataUrl + params).subscribe((data) => {
        this.spacexAllData = [];
        this.spacexAllData = data;
        this.openerrordialog = false;
        if (this.spacexAllData.length == 0) {
          this.openerrordialog = true;
        }
      })
    }

    else if (this.year !== "" && this.launchSuccess !== "" && this.landSuccess !== "") {
      let params = '&launch_success=' + this.launchSuccess + '&land_success=' + this.landSuccess + '&launch_year=' + this.year;
      this.http.getData(this.http.dataUrl + params).subscribe((data) => {
        this.spacexAllData = [];
        this.spacexAllData = data;
        this.openerrordialog = false;
        if (this.spacexAllData.length == 0) {
          this.openerrordialog = true;
        }
      })
    }

    else if (this.year == "" && this.launchSuccess == "" && this.landSuccess == "") {
      this.http.getData(this.http.dataUrl).subscribe((data) => {
        this.spacexAllData = [];
        this.spacexAllData = data;
      })
    }
  }

  ngOnInit() {
    this.http.getData(this.http.dataUrl).subscribe((res) => {
      this.spacexAllData = res;
    })
  }

}
