// Creating literal objects and displaying results in the browser. 

var hotel = new Object ();

hotel.name = 'Resort';
hotel.nightlyRate = "$250";
hotel.checkAvailability = function() {
  return this.rooms - this.booked;
};

hotel.averageNightlyRate = function() {
  return this.nightlyRate;
};

var hotelName = document.getElementById('hotelName');
hotelName.textContent = hotel.name;

var hotelRooms = document.getElementById('hotelRooms');
hotelRooms.textContent = hotel.checkAvailability();

var hotelAvgRate = document.getElementById('hotelAvg');
hotelAvgRate.textContent = hotel.averageNightlyRate();