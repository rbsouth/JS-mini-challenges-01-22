// //1.
// class Multiplier {
// 	constructor(number, current_value){
// 		this.number = number
// 		this.current_value = 1
// 	}
// 	multiply(){
// 		this.current_value = this.current_value * this.number
// 	 }
// 	getCurrentValue(){
// 		console.log(this.current_value);
// 	}
// }

// var new_number = new Multiplier(5);

// new_number.multiply();
// new_number.getCurrentValue();
// new_number.multiply();
// new_number.getCurrentValue();
// new_number.multiply();
// new_number.getCurrentValue();
// new_number.multiply();
// new_number.getCurrentValue();
// new_number.multiply();
// new_number.getCurrentValue();


//2. Create an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new Photo, 
// list all Photos (i.e., returns the paths of each photo in the album), 
// and access a specific Photo by the order it was added. 
// Each Photo should store the photo's file name (path) and the location (place in world) 
// the photo was taken in as strings. 
// Create instances of each object defined to prove that your object model works.

// class Album {
// 	constructor(photos){
// 	this.photos = [];
// 	}
// 	addPhoto(add_photo){
// 		this.photos.push(add_photo);
// 		console.log(this.photos);
// 	}
// 	listAllPhotos(){
// 		console.log(this.photos);
// 	}
// 	selectPhoto(x){
// 		console.log(this.photos[x]);
// 	}
// }

// class Photo {
// 	constructor(name, location){
// 	this.name = name;
// 	this.location = location;
// 	}
// }

// var album = new Album();
// var summer_photo = new Photo('images/summer/img1','Rio');
// var winter_photo = new Photo('images/winter/img12','Amsterdam');
// var fall_photo = new Photo('images/fall/img6','Salt Lake');
// var spring_photo = new Photo('images/spring/img2','Congo');

// album.addPhoto(summer_photo);
// album.addPhoto(winter_photo);
// album.addPhoto(spring_photo);
// album.addPhoto(fall_photo);
// album.listAllPhotos();
// album.selectPhoto(2);

// 3. Create a Library object that holds Book objects. 
// The Library object can retrieve a book by title, 
// allows you to add a new Book, 
// will get rid of a book by title, 
// and will give you a count of how many books are in the library. 
// Each Book holds a title, author, and genre. 
// Create instances of each object defined to prove that your objects and their methods work.

class Library {
	constructor(book){
	this.book = book
	}
}