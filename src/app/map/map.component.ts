import { Component, OnInit } from '@angular/core';
import {FarmsService} from "../farms.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title: string = 'Find A Llama Farm Near You';
  zoominLevel: number = 4;
  lat: number = 39.8283;
  lng: number = -98.5795;
  farms = [];
  farmsOnMap = [];
  selected_farm_id: number = 0;
  selected_farm_name: string = 'NAME';
  selected_farm_address: string = 'ADDRESS';
  selected_farm_phone: string = 'PHONE';
  selected_farm_link: string = 'LINK';
  selected_farm_state: string = 'STATE';

  constructor(private farmsService: FarmsService) {}

  ngOnInit() {
    var tempFarms = this.farmsService.getFarmsList();

    for(var count = 0 ; count < tempFarms.length ; count++) {
      var tempFarm = {
        id: 0,
        name: 'NAME',
        address: 'ADDRESS',
        lat: 0,
        lon: 0,
        phone: 'PHONE',
        link: 'LINK',
        state: 'STATE'
      };

      tempFarm.id = count + 1;
      tempFarm.name = tempFarms[count].name;
      tempFarm.address = tempFarms[count].address;
      tempFarm.lat = tempFarms[count].lat;
      tempFarm.lon = tempFarms[count].lon;
      tempFarm.phone = tempFarms[count].phone;
      tempFarm.link = tempFarms[count].link;
      tempFarm.state = tempFarms[count].state;

      this.farms.push(tempFarm);
    }

    this.farmsOnMap = this.farms;
  }

  markerClick(marker) {
    this.lat = marker.lat;
    this.lng = marker.lon;
    this.selected_farm_id = marker.id;
    this.selected_farm_name = marker.name;
    this.selected_farm_address = marker.address;
    this.selected_farm_phone = marker.phone;
    this.selected_farm_link = marker.link;
    this.selected_farm_state = marker.state;
  }

  showAllFarms() {
    this.farmsOnMap = this.farms;
    this.zoominLevel = 4;
    this.lat = 39.8283;
    this.lng = -98.5795;

    this.selected_farm_id = 0;
  }

  listItemClick(item) {
    this.zoominLevel = 10;
    this.lat = item.lat;
    this.lng = item.lon;
    this.selected_farm_id = item.id;
    this.selected_farm_name = item.name;
    this.selected_farm_address = item.address;
    this.selected_farm_phone = item.phone;
    this.selected_farm_link = item.link;
    this.selected_farm_state = item.state;

    this.farmsOnMap = [];
    this.farmsOnMap.push(item);
  }

}
