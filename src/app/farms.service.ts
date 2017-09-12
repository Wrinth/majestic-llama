import { Injectable } from '@angular/core';

@Injectable()
export class FarmsService {
  farms = [
    {
      name: 'Alpaca Downs',
      address: '26901 143rd Street Ct. E, Buckley, WA  98321',
      lat: 47.127149,
      lon: -122.068783,
      phone: '253-227-8069',
      link: 'http://www.alpacadowns.com/',
      state: 'Washington'
    },
    {
      name: 'Pucara International',
      address: '15204 Muddy Valley Road, McMinnville, OR 97128',
      lat: 45.149449,
      lon: -123.321443,
      phone: '503-843-3939',
      link: 'http://www.pucara-alpacas.com/',
      state: 'Oregon'
    },
    {
      name: 'Mahart Alpacas',
      address: '20419 SW Scholls-Sherwood Rd., Sherwood, OR 97140',
      lat: 45.393767,
      lon: -122.887217,
      phone: '503-705-1019',
      link: 'https://www.openherd.com/farms/2880/mahart-alpacas',
      state: 'Oregon'
    },
    {
      name: 'Northwest Alpacas',
      address: '11785 SW River Road, Hillsboro, OR 97123',
      lat: 45.431670,
      lon: -122.945687,
      phone: '503-628-3110',
      link: 'http://www.alpacas.com/',
      state: 'Oregon'
    },
    {
      name: 'Alpacas at Windy Hill',
      address: '7660 Bradley Rd., Somis, CA  93066',
      lat: 34.310903,
      lon: -118.978761,
      phone: '805-386-2394',
      link: 'http://www.alpacalink.com/',
      state: 'California'
    },
    {
      name: '925 Suris of Sterling Alpacas',
      address: '196 Colt Lane, Thousand Oaks, CA 91361',
      lat: 34.167890,
      lon: -118.862035,
      phone: '805-496-0343',
      link: 'http://925suris.com/',
      state: 'California'
    },
    {
      name: 'F-Leece Station',
      address: '16821 Owl Tree Road, Riverside, CA 92504',
      lat: 33.854464,
      lon: -117.365434,
      phone: '951-203-5777',
      link: 'http://www.f-leecestation.com/',
      state: 'California'
    },
    {
      name: 'Pacific Breeze Alpacas',
      address: '1590 Edison St., Santa Ynez, CA 93460',
      lat: 34.627875,
      lon: -120.078701,
      phone: '805-686-7969',
      link: 'http://ww38.pacificbreezealpacas.com/',
      state: 'California'
    },
    {
      name: 'Alpacas at West Ranch',
      address: '5009 Zaca Station, Los Olivos, CA 93441',
      lat: 34.720381,
      lon: -120.136819,
      phone: '805-698-4540',
      link: 'http://www.alpacasatwestranch.com/',
      state: 'California'
    },
    {
      name: 'Tanglewood Suri Alpacas',
      address: '34930 Johnson Rd., Agua Dulce, CA 91390',
      lat: 34.521121,
      lon: -118.313682,
      phone: '818-535-5726',
      link: 'http://www.tanglewoodalpacas.com/',
      state: 'California'
    },
    {
      name: 'Twisted Lock Alpacas',
      address: '9560 Sunland Blvd., Sunland, CA 91040',
      lat: 34.244185,
      lon: -118.362894,
      phone: '626-376-7515',
      link: 'http://www.twistedlock.com/',
      state: 'California'
    },
    {
      name: 'Lilly of the Valley Alpacas',
      address: '2912 Church Street, Modesto, CA 95357',
      lat: 37.681187,
      lon: -120.897335,
      phone: '209-577-3638',
      link: 'http://www.lovalpacas.com/',
      state: 'California'
    },
    {
      name: 'Alpacas @ Hall & Oaks Ranch',
      address: '40651 Avenida La Cresta, Murrieta, CA 92562',
      lat: 33.530512,
      lon: -117.311973,
      phone: '951-677-2909',
      link: 'http://www.alpacanation.com/hall&oaksranch.asp',
      state: 'California'
    },
    {
      name: 'Shiloh Springs Ranch',
      address: '39505 Avenida Bonita, Murrieta, CA 92562',
      lat: 33.557361,
      lon: -117.311962,
      phone: '951-677-2126',
      link: 'http://www.shilohspringsranch.net/',
      state: 'California'
    },
    {
      name: 'Cloud Dancer Alpacas',
      address: '3657 Forest Grove Road, Lewiston, MT 59457',
      lat: 47.001179,
      lon: -109.210417,
      phone: '928-853-6669',
      link: 'http://www.clouddanceralpacas.com/',
      state: 'Montana'
    },
    {
      name: 'Hance Ranch Alpacas',
      address: '11818 W. 52nd Ave., Wheat Ridge, CO 80033',
      lat: 39.790747,
      lon: -105.131934,
      phone: '303-422-4681',
      link: 'http://www.alpacas.ws/',
      state: 'Colorado'
    },
    {
      name: '3 Crosses Alpaca Ranch',
      address: '7525 277th Ave., N.E., North Branch, MN  55056',
      lat: 45.472847,
      lon: -93.081096,
      phone: '651-237-0345',
      link: 'http://www.alpacatrends.com/',
      state: 'Minnesota'
    },
    {
      name: 'Diamond Triple C Ranch',
      address: '450358 South Highway 85, Afton, OK  74331',
      lat: 36.614055,
      lon: -94.975744,
      phone: '918-256-1993',
      link: 'http://www.diamondtriplecranch.com/',
      state: 'Oklahoma'
    },
    {
      name: 'A and A Alpacas',
      address: '2252 County Road 3124, Greenville, TX  75402',
      lat: 33.089039,
      lon: -96.031834,
      phone: '903-450-1999',
      link: 'http://www.aandaalpacas.com/',
      state: 'Texas'
    },
    {
      name: 'Long Neck Acres',
      address: '23753 E. HWY 71, Horseshoe Bay, TX 78657',
      lat: 30.529861,
      lon: -98.426342,
      phone: '830-330-0317',
      link: 'http://www.longneckacres.com/',
      state: 'Texas'
    },
    {
      name: 'Benchmark Alpacas at the Tin Roof Ranch',
      address: '8475 Gale Road, Goodrich, MI  48438',
      lat: 42.905931,
      lon: -83.530947,
      phone: '810-636-3456',
      link: 'http://www.benchmarkalpacas.com/',
      state: 'Michigan'
    },
    {
      name: 'RobAsia Alpaca Ranch LLC',
      address: '611 Norstad Rd. , Manitowoc, WI 54220',
      lat: 44.089093,
      lon: -87.810189,
      phone: '920-775-9439',
      link: 'http://www.robasiaalpacas.com/',
      state: 'Wisconsin'
    },
    {
      name: 'J4 Alpacas',
      address: '7711 North Valley Hill Rd., Woodstock, IL  60098',
      lat: 42.343949,
      lon: -88.348546,
      phone: '815-759-0247',
      link: 'http://www.j4alpacas.com/',
      state: 'Illinois'
    },
    {
      name: 'Tiskilwa Farms Alpacas, LLC',
      address: '11809 1100 North Ave., Tiskilwa, IL  61368',
      lat: 41.306737,
      lon: -89.625514,
      phone: '309-895-3004',
      link: 'http://www.illinoisalpacas.com/',
      state: 'Illinois'
    },
    {
      name: 'ALsPACAS @ Dutch Mill Farm',
      address: '19860 Lembecke Road, Harvard, IL  60033',
      lat: 42.375484,
      lon: -88.596598,
      phone: '815-943-3248',
      link: '',
      state: 'Illinois'
    },
    {
      name: 'Keva Ranch',
      address: '4783 W. 3000N Rd., Kankakee, IL  60901',
      lat: 41.161904,
      lon: -87.967057,
      phone: '815-274-7550',
      link: 'http://www.kevaranchalpacas.com/',
      state: 'Illinois'
    },
    {
      name: 'Ravada Hills Alpaca Farm',
      address: '4256 S 475E, Portland, IN 47371',
      lat: 40.378803,
      lon: -84.886282,
      phone: '260-335-2615',
      link: 'http://www.ravadahills.com/',
      state: 'Indiana'
    },
    {
      name: 'Accoyo! @ Double Stuff Farms',
      address: '2962 Sodom Hutchings Rd., Fowler, OH 44148',
      lat: 41.298604,
      lon: -80.636257,
      phone: '330-673-9318',
      link: 'http://www.alpacanation.com/farmsandbreeders/03_viewfarm.asp?name=11643',
      state: 'Ohio'
    },
    {
      name: 'Magical Farms, Inc.',
      address: '5280 Avon Lake Rd., Litchfield, OH 44253',
      lat: 41.129161,
      lon: -82.024752,
      phone: '330-667-3233',
      link: 'http://www.alpacafarm.com/',
      state: 'Ohio'
    },
    {
      name: 'Crafdal Farm Alpacas',
      address: '2070 Fieldcrest Lane, Madison, GA  30650',
      lat: 33.568362,
      lon: -83.390212,
      phone: '770-519-5731',
      link: 'http://www.crafdalfarm.com/',
      state: 'Georgia'
    },
    {
      name: 'Angel Fleece Alpaca Farm ',
      address: '3508 Veechdale Rd., Simpsonville, KY 40067',
      lat: 38.187991,
      lon: -85.393903,
      phone: '502-722-8530 ',
      link: 'http://www.angelfleecealpacas.com/',
      state: 'Kentucky'
    },
    {
      name: 'Alpacas of Peaceful Glen',
      address: '4749 Kirksville Road, Paint Lick, KY 40461',
      lat: 37.646796,
      lon: -84.461897,
      phone: '859-792-1644',
      link: 'http://www.alpacasofpeacefulglen.net/',
      state: 'Kentucky'
    },
    {
      name: 'Brightside Bend Alpacas',
      address: '6041 Damar Ct., Lexington, KY 40515',
      lat: 37.930568,
      lon: -84.396745,
      phone: '859-509-0798',
      link: 'http://www.brightsidebend.com/',
      state: 'Kentucky'
    },
    {
      name: 'Diamond Triple C Ranch',
      address: '541 Deerfield Road, Millboro, VA 24460',
      lat: 38.055338,
      lon: -79.682877,
      phone: '540-968-0529',
      link: 'http://www.diamondtriplecranch.com/',
      state: 'Virginia'
    },
    {
      name: 'Clearview Alpaca Farm',
      address: '775 Smithfield School Road, St. Stephens Church, VA 23148',
      lat: 37.843505,
      lon: -77.020111,
      phone: '804-366-6926',
      link: 'http://www.clearviewalpacafarm.com/',
      state: 'Virginia'
    },
    {
      name: 'Six Paca Farm',
      address: '38 Bozrah Street, Bozrah, CT  06334',
      lat: 41.555565,
      lon: -72.165432,
      phone: '860-204-0386',
      link: 'http://www.sixpaca.com/',
      state: 'Connecticut'
    },
    {
      name: 'Equinox Farms',
      address: '791 Jewett Road, Hopkinton, NH  03229',
      lat: 43.175483,
      lon: -71.646309,
      phone: '603-225-2159',
      link: 'http://www.eqnxfarms.com/',
      state: 'New Hampshire'
    },
    {
      name: 'Finger Lakes Alpacas',
      address: '8418 Cooper Road, Weedsport, NY 13166',
      lat: 43.023246,
      lon: -76.510874,
      phone: '315-258-8770',
      link: 'http://www.fingerlakesalpacas.com/',
      state: 'New York'
    },
    {
      name: 'Patchwork Meadow Alpacas',
      address: '151 S. Buel Road, Canajoharie, NY 13317',
      lat: 42.845651,
      lon: -74.651322,
      phone: '518-673-5130',
      link: 'http://www.patchworkmeadowalpacas.com/',
      state: 'New York'
    },
    {
      name: 'Rancho Cerritos',
      address: '2242 State Route 12, Waterville, NY 13480',
      lat: 42.969066,
      lon: -75.325169,
      phone: '315-725-3145',
      link: 'http://www.ranchocerritos.biz/',
      state: 'New York'
    },
    {
      name: 'MountainView Alpacas of Ellicottville',
      address: '7197 Bibbs Road, Ellicottville, NY  14731-0624',
      lat: 42.277992,
      lon: -78.705416,
      phone: '716-699-4088',
      link: 'http://www.mtvalpacas.com/',
      state: 'New York'
    },
    {
      name: 'West Penn Alpacas',
      address: '1843 East Finley Drive, Claysville, PA  15323',
      lat: 40.049499,
      lon: -80.394475,
      phone: '724-663-5635',
      link: 'http://www.westpennalpacas.com/',
      state: 'Pennsylvania'
    },
    {
      name: 'Silvercloud Farm',
      address: '997 Deer Creek Road, Gibsonia, PA 15044',
      lat: 40.660506,
      lon: -79.895369,
      phone: '877-MYALPACA',
      link: 'http://www.silvercloudfarm.com/',
      state: 'Pennsylvania'
    },
    {
      name: 'Alpacas of the Alleghenies',
      address: '550 Forsht Drive, Duncansville, PA  16635',
      lat: 40.419522,
      lon: -78.422747,
      phone: '814-696-4048',
      link: 'http://www.gentlealpacas.com/',
      state: 'Pennsylvania'
    },
    {
      name: 'Cas-Cad-Nac Farm',
      address: '551 Wheeler Camp Rd., Perkinsville, VT 05151',
      lat: 43.418160,
      lon: -72.447650,
      phone: '802-263-5740',
      link: 'http://www.cas-cad-nacfarm.com/',
      state: 'Vermont'
    },
    {
      name: 'Maple View Farm Alpacas',
      address: '185 Adams Rd., Brandon, VT 05733',
      lat: 43.824752,
      lon: -73.125549,
      phone: '802-247-5412',
      link: 'http://www.mapleviewfarmalpacas.com/',
      state: 'Vermont'
    }
  ];

  constructor() {}

  getFarmsList() {
    return this.farms;
  }

  getFarmsListByState(name) {
    var temp_list = [];
    for(var item in this.farms) {
      if(item['state'] == name) {
        temp_list.push(item);
      }
    }
    return temp_list;
  }

}
