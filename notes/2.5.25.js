var travellerName = 'Intercity travels';

var busType = 'Bharat Benz A/C Sleeper (2+1)';

var price = 1199;

var averageRating = 4.8;

var ratingCount = 565;

var avaiableSeats = 12;

var avaiableSingleSeats = 8;

var isUserLoggedIn = true;

var isUserActive = true;

var isAccountSuspended = false;

var busName2 = ' TVK TRAVELS';

var busName3 = 'RAJESH TRANSPORTS';

var busName4 = 'Vikram Travels';

var busNames = ['Intercity travels', ' TVK TRAVELS', 'RAJESH TRANSPORTS', 'Vikram Travels'];

console.log(busNames[2]);


busNames[3] = 'SRS Travels';

console.log(busNames);

var subjectMarks = [85, 90, 78, 92, 88];

console.log(subjectMarks);

var busInfo = [
    ['name', 'Intercity travels'],
    ['type', 'Bharat Benz A/C Sleeper (2+1)'],
    ['price', 1199],
    ['averageRating', 4.8]]

console.log(busInfo[0][1]);

var busInfo =['Intercity travels','Bharat Benz A/C Sleeper (2+1)', 1199, 4.8, 12, 8];

busInfo = {
    name: 'Intercity travels',
    type: 'Bharat Benz A/C Sleeper (2+1)',
    price: 1199,
    averageRating: 4.8,
    avaiableSeats: 12,
    avaiableSingleSeats: 8,
    amenities:['WiFi', 'Charging Point', 'Blankets', 'Water Bottle'],
    ratings:[
        {
             type: 5,
             percentage : 80
        },
        {
             type: 4,
             percentage : 15
        },
        {
            type: 3,
            percentage: 5
        },
        {
            type: 2,
            percentage: 0
        },
        {
            type: 1,
            percentage: 0
        }
    ]
};

var vegetables = [
{
    id: 1, 
    imgUrl: 'https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,,q-40,dpr-2/cms/product_variant/ea5c2e7c-c104-4e34-8f52-f74ce1d5e99a.jpeg',
    name: 'Beans Haricot',
    quantity: '250g',
    actualPrice: 30,
    discountedPrice: 24,
    discount: 20

},
{  
    id: 2,
    imgUrl: 'https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,,q-40,dpr-2/cms/product_variant/ea5c2e7c-c104-4e34-8f52-f74ce1d5e99a.jpeg',
    name: 'Beans Haricot',
    quantity: '250g',
    actualPrice: 30,
    discountedPrice: 24,
    discount: 20
},
{  
    id: 3,
    imgUrl: 'https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,,q-40,dpr-2/cms/product_variant/ea5c2e7c-c104-4e34-8f52-f74ce1d5e99a.jpeg',
    name: 'Beans Haricot',
    quantity: '250g',
    actualPrice: 30,
    discountedPrice: 24,
    discount: 20
},
{
    id: 4,
    imgUrl: 'https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,,q-40,dpr-2/cms/product_variant/ea5c2e7c-c104-4e34-8f52-f74ce1d5e99a.jpeg',
    name: 'Beans Haricot',
    quantity: '250g',
    actualPrice: 30,
    discountedPrice: 24,
    discount: 20
},
{
    id: 5,
    imgUrl: 'https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,,q-40,dpr-2/cms/product_variant/ea5c2e7c-c104-4e34-8f52-f74ce1d5e99a.jpeg',
    name: 'Beans Haricot',
    quantity: '250g',
    actualPrice: 30,
    discountedPrice: 24,
    discount: 20
}
]
console.log(vegetables[0].imgUrl);

document.getElementById('grocery-img').src = vegetables[0].imgUrl;

document.getElementById('name').innerHTML = vegetables[0].name;
